# Use the official Node.js image
FROM node:16.20.2

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY backend/package*.json backend/yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3002

# Start the app
CMD ["node", "backend/app.js"]
