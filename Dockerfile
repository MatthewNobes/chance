# Use a lightweight Node.js 18 image as the base
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json ./

# Install project dependencies
RUN npm install --frozen-lockfile --production

# Copy the entire project directory into the Docker image
COPY . .

# Build the Svelte app
RUN npm run build

# Use a smaller image for the final production build
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy the built Svelte app from the previous stage
COPY --from=base /app/dist ./dist
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./

# Install only production dependencies
RUN npm install --production --immutable

# Expose the desired port (change it according to your Svelte app configuration)
EXPOSE 5173

# Run the Svelte app
CMD ["node", "dist/index.js"]
