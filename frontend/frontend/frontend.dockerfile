FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
ARG PATH_PREFIX
COPY .${PATH_PREFIX}package*.json ./
COPY ./tsconfig.base.json /usr/tsconfig.base.json
EXPOSE 3000

FROM base as builder
WORKDIR /app
COPY .${PATH_PREFIX} ./
RUN npm run build


FROM base as production
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD npm start

FROM base as dev
RUN npm install 
COPY .${PATH_PREFIX} .
CMD npm run dev:watch