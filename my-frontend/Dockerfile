# Use the official Node.js image
FROM node:26 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Production image
FROM node:26

WORKDIR /app

# Copy the build from the previous stage
COPY --from=builder /app ./

# Expose the port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
