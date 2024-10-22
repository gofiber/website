
# Fiber Website

The official website of the Fiber Web Framework — https://gofiber.io

## Project Description

This project is a [Next.js](https://nextjs.org) app. In order to work on it locally, you need to have Node.js installed on your computer.

## Getting Started

**1. Clone the repository:**

```bash
git clone git@github.com:gofiber/website.git fiber-website
cd fiber-website
```

**2. Install the dependencies:**

```bash
npm i -g yarn
yarn
```

**3. Start the app in dev mode:**

```bash
yarn dev
```

## Deployment

Use the build command to create a deployable bundle:

```bash
yarn build
```

You can then deploy the files inside of `out` to a web hosting service. The official website deploys to Github Pages.

## Option 2: Docker Development

### 1. Clone the repository:

```bash
git clone git@github.com:gofiber/website.git fiber-website
cd fiber-website
```

### 2. Start the development environment:

```bash
docker-compose up app
```

The app will be available at http://localhost:3000 with hot-reload enabled.

### 3. For production build:

```bash
docker-compose up app-production
```

The app will be available at http://localhost:3001.

### Docker Commands

```bash
# Start development environment
docker-compose up app

# Start production environment
docker-compose up app-production

# Rebuild containers
docker-compose build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f app
```

## Deployment

### Traditional Deployment

```bash
yarn build
```

Deploy the files inside out to a web hosting service. The official website deploys to Github Pages.

### Docker Deployment

```bash
docker-compose -f docker-compose.yml up app-production -d
```

## License

Landing page by [József Sallai](https://github.com/jozsefsallai). Licensed under MIT.
