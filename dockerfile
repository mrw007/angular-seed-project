# Stage 1
FROM node:22
WORKDIR /angular-seed-project

# Copy project's package
COPY package.json ./package.json

# Install dependencies
RUN apt-get update && apt-get install -y \
build-essential \
python-is-python3
RUN apt-get -y autoclean

# Install Angular CLI
RUN npm i -g @angular/cli

# Workspace cleanup and install project's dependencies
RUN rm -rfv node_modules/* package-lock.json
RUN npm run clean
RUN npm install

# Expose ports
EXPOSE 4200 9876

# Infinite loop command to keep the container running
CMD tail -f /dev/null
