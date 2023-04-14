/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
//npm install nodemon --save-dev
const Hapi = require('@hapi/hapi');
const routes = require('/routes');


const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
        cors: {
            origin: ['*'],
        },
    },
});
init();