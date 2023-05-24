const User = require('../database/models/User');
const server = require('../server');
const request = require('supertest');
const expect = require('chai').expect;


describe('Tests on /api/auth', () => {

    let api = null;
    let userId = '';

    before(() => {
        api = request(server);
    });

    describe('GET /api/auth/all', () => {

        it('Debería devolver un status 200 si encuentran usuarios', async () => {
            const { body, statusCode } = await api.get('/api/auth/all');
            // console.log(statusCode);
            expect(statusCode).to.equal(200);
        });

        it('Debería existir una propiedad "users" que sea un array con contenido ', async () => {
            const { body, statusCode } = await api.get('/api/auth/all');
            // console.log(statusCode);
            expect(statusCode).to.equal(200);
            expect(body).to.have.property('users');
            expect(body.users).to.be.an('array');
            expect(body.users.length).to.be.greaterThan(0);
        });

    });

    describe('POST /api/auth/signup', () => {

        it('Debería devolver una propiedad "message" con el mensaje "Usuario creado correctamente"', async () => {

            const newUser = {
                email: "adrian@mh.com.ar",
                password: "hola1234"
            }

            const message = 'Usuario creado correctamente';

            const { body, statusCode } = await api.post('/api/auth/signup')
                .set('Authorization', 'Bearer asrfgareg3q4tg34qg23q4g')
                .send(newUser);

            userId = body.user._id

            expect(body).to.have.property('message');
            expect(body.message).to.equal(message);

        });

    });

    after(async () => {
        //Importar modelo User
        //Una vez que se ejecutan todos los tests
        // Eliminar usuarios creados
        await User.findByIdAndDelete(userId);
    });


});