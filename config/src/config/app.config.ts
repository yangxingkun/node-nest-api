export default () => ({
  app: {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
    isDev: process.env.NODE_ENV == 'development' ? true : false,
  },
});
