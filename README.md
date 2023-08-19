# Chance

A pseudorandom rice rolling app

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Note: you can use the flag `--host` to expose the web server to the rest of your network.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Deploying

### Docker

Docker has been setup for this repository to allow the application to be build for either static site deployment or deployment via node js. Both options are available as services via the `docker-compose.yml` by passing in either `app-node` for node.js or `app-static` for a static site. These options are passed into the following command in `<insert-service-type>` to generate a build:

```bash
docker-compose build <insert-service-type>

docker-compose build app-static
```

To deploy this image to a build, use the following command:

```bash
docker-compose up -d <insert-service-type>

docker-compose up -d app-static
```

The static site is hosted on port 3001 and the node site on 3002.

To borrow the docker setup from this repo, you will need to copy across the `docker-compose.yml`, `Dockerfile`, `svelte.config.js` and the adapters imported in the config file must be installed as dev dependencies.
