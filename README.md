# teun.zengerink.com

[annekelabordus.nl](https://annekelabordus.nl) build using the following technologies:

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Playwright](https://playwright.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Development instructions

- Run `npm run dev` to launch the development server.
- Run `npm run test:e2e` to run the end-to-end test.

## Run the docker container

- Run `docker build -t annekelabordus.nl .` to build the Docker image.
- Run `docker run -d -p 3000:3000 annekelabordus.nl` to run the Docker container.
