FROM node:20-alpine As base

# 의존성 설치
FROM base As deps 

RUN apk add --no-cache lib6-compat

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci;

RUN rm -rf ./.next/cache

#프로젝트 빌드
FROM base As builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . . 

RUN npm run build

#실행
FROM base As runner

WORKDIR /app

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