FROM node:18
ARG PATH_PREFIX
ARG ENVIRONMENT
ENV ENVIRONMENT=${ENVIRONMENT}
WORKDIR /usr/src/app
COPY ./tsconfig.base.json /usr/src/app/tsconfig.base.json
COPY .${PATH_PREFIX}package*.json ./
RUN npm install
COPY .${PATH_PREFIX} ./
RUN npm run build
COPY .${PATH_PREFIX}entrypoint.sh ./
RUN chmod +x /usr/src/app/entrypoint.sh
ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]
EXPOSE 3002