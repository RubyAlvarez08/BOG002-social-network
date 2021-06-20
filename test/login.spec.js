import { crearUsuario,Login } from '../Firebase/firebaseAuth.js';

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockAuthentication();
var mocksdk = new firebasemock.MockFirebaseSdk(
  () => { return null; },
  () => { return mockauth; },
  () => { return mockfirestore; },
  () => { return mockstorage; },

);
mockauth.autoFlush();
global.firebase = mocksdk;



describe('crearUsuario', () => {
  test('deberia ser una function', () => {
    expect(typeof crearUsuario).toBe('function');
  }),
  test('deberia registrarme', () => {
    const promesa = crearUsuario('email@test.com','123456')
    return promesa
    .then((user) =>{
      expect(user.email).toBe('email@test.com');
      expect(typeof user).toBe('object');
    })
  })
})

describe('Login', () => {
  test('deberia se una function', () => {
    expect(typeof Login).toBe('function');
  }),
  test('', () =>{
    const promesa = Login('nini@test.com', '123456');
    return promesa
    .then((user) =>{
      expect(user.email).toBe('nini@test.com');
      expect(typeof user).toBe('object');
    })
  })
})
