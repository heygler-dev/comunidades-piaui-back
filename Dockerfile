FROM node:20.19.1-alpine AS deps
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20.19.1-alpine AS build
WORKDIR /app
ENV DATABASE_URL="postgresql://premio:premio@localhost:5432/premio_piaui?schema=public"
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:20.19.1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN apk add --no-cache python3 make g++ \
  && npm ci --omit=dev \
  && npm install prisma@7.8.0 tsx@4.23.0 \
  && apk del python3 make g++

COPY prisma ./prisma
COPY prisma.config.ts ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/generated ./generated

RUN mkdir -p uploads

EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate deploy && if [ \"$RUN_SEED\" = \"true\" ]; then npx tsx prisma/seed.ts; fi && node dist/src/main.js"]
