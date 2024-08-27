FROM node:20-alpine As base

# 수정해야 할 부분 *
# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY . .

# CMD [ "npm", "run", "dev" ]

# 여기까지 *

# 의존성 설치
FROM base As deps 

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci;

RUN rm -rf ./.next/cache

#프로젝트 빌드
FROM base As builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

COPY .env.production.sample .env.production

RUN npm run build

#실행
FROM base As runner

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

ENV PORT=3000

CMD ["node", "server.js"]