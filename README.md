# Chance

A single-page pseudorandom rice rolling app setup as a small svelte-kit and tailwind css test lab.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Note: you can use the flag `--host` to expose the web server to the rest of your network.

## Testing

This project has been setup with two types of automated testing, automated unit tests for individual functions and components and full end-to-end testing for the whole app from the users perspective.

Both test formats are checked in the CI.js.yml workflow file.

### Unit tests

Unit tests are managed using [vitest](https://vitest.dev/). They are designed to verify the outputs of individual functions. The test files should be located within the code, ideally next to the function file they are testing. The command to run the unit test suite is:

```
npm run test:unit
```

### End-to-end testing

End-to-end testing has been implemented using [playwright](https://playwright.dev/). These tests use a virtual browse to carry out user actions and test that the expected result happens. The command to run the end-to-end testing suite is:

```
npm run test
```

The test files for end-to-end testing are stored in the `/tests` directory.

When you first run this command you may notice the tests fail and it mentions you need to run `npx playwright install`. Run the stated command and it will then work.

## Deploying

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

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

The static site is hosted on port `3001` and the node site on `3002`.

To borrow the docker setup from this repo, you will need to copy across the `docker-compose.yml`, `Dockerfile`, `svelte.config.js` and the adapters imported in the config file must be installed as dev dependencies.
