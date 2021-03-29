'use strict';
const superTest = require('supertest');
const server = require('../src/server');
const request = superTest(server.app);


describe('validatot test', () => {
    it('no name', async () => {
        const response = await request.get('/person');
        expect(response.status).toEqual(500);
        expect(response.query).toBeFalsy();
      });
      it('whith name', async () => {
        const response = await request.get('/person?name=ahmad');
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('ahmad');
      });


  })
