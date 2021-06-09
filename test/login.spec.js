// importamos el mock manual que creamos
/* import MockFirebase from '../_mock_/firebase-mock.js'
global.firebase = MockFirebase(); */
import MockFirebase from 'mock-cloud-firestore';

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockAuthentication();

import { RegistroUsuario} from "../src/Pages/index.js";

describe('RegistroUsuario', () => {
    test('debería crear una cuenta con un correo y una contraseña', () => {
      const promesa = RegistroUsuario('nini@example.com','123456');

      return promesa
      .then((user)=>{


        expect(user.email).toBe('nini@example.com')
      })
      

    });
    

});