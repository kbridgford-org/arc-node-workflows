# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files
COPY package*.json index.js thumbsUp.jpeg ./

# Install dependencies
RUN npm install

# Expose the port the app runs on
ENV PORT=8000
EXPOSE 8000 2222

# Define the command to run the app
CMD [ "npm", "start" ]
