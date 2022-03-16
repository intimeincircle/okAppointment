FROM node:18-buster as builder

RUN yarn global add pnpm@7.11.0
RUN pnpm config set store-dir ~/.pnpm-store

RUN mkdir -p /app
RUN mkdir -p /app/apps
ADD ./package.json  /app/package.json
ADD ./babel.config.json  /app/babel.config.json
ADD ./apps/note  /app/apps/note
ADD ./nx.json  /app/nx.json
ADD ./tsconfig.base.json  /app/tsconfig.base.json
ADD ./pnpm-workspace.yaml  /app/pnpm-workspace.yaml
ADD .npmrc /app/.npmrc
ADD ./tools  /app/tools

WORKDIR /app
RUN pnpm install

WORKDIR /app/apps/note
RUN pnpm build

FROM node:18-buster
RUN yarn global add pnpm@7.11.0
RUN pnpm config set store-dir ~/.pnpm-store

RUN mkdir -p /app
RUN mkdir -p /app/apps
ADD ./package.json  /app/package.json
ADD ./babel.config.json  /app/babel.config.json
ADD ./apps/note  /app/apps/note
ADD ./nx.json  /app/nx.json
ADD ./tsconfig.base.json  /app/tsconfig.base.json
ADD ./pnpm-workspace.yaml  /app/pnpm-workspace.yaml
ADD .npmrc /app/.npmrc

WORKDIR /app
RUN pnpm install -P

COPY --from=builder /app/apps/note/.next /app/apps/note/.next
COPY --from=builder /app/apps/note/out /app/apps/note

RUN mv /app/apps/note/_next /app/apps/.next
WORKDIR /app/apps/note

RUN ls -l
EXPOSE 3000

ENTRYPOINT ["pnpm", "next", "start"]



