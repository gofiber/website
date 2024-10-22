# Use a more specific base image version
FROM node:18.19-alpine AS base

# Add tini for better process handling
RUN apk add --no-cache tini

# Set working directory
WORKDIR /usr/src/app

# Copy package files first
COPY package.json yarn.lock ./

# Development stage
FROM base AS development
RUN yarn install
COPY . .
EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["yarn", "dev"]

# Production stage
FROM base AS production
# Install dependencies with production flag
RUN yarn install --frozen-lockfile --production
COPY . .
RUN yarn build

# Only keep production necessary files
FROM node:18.19-alpine AS production-slim
WORKDIR /usr/src/app
COPY --from=production /usr/src/app/next.config.js ./
COPY --from=production /usr/src/app/.next ./.next
COPY --from=production /usr/src/app/public ./public
COPY --from=production /usr/src/app/node_modules ./node_modules
COPY --from=production /usr/src/app/package.json ./

EXPOSE 3000
ENV NODE_ENV=production
CMD ["yarn", "start"]