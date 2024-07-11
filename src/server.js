const routes = require('./routes')
const Hapi = require('@hapi/hapi')

const init = async() => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);



  server.route({
    method: "*",
    path: "/{any*}",
    handler: () => {
      return "nothing here ";
    },
  });

  await server.start();

  console.log(`Server berjalan pada port ${server.info.uri}`);
};

init();
