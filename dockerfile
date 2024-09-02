FROM node:20-alpine AS base

# 수정해야 할 부분 *
# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY . .

# CMD [ "npm", "run", "dev" ]

# 의존성 설치
FROM base AS deps 

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci;

RUN rm -rf ./.next/cache

#프로젝트 빌드
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

#실행
FROM base AS runner

WORKDIR /app

# 실행 될지 확인 필요
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]