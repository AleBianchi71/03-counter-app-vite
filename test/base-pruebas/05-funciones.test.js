import {getUser} from '../../src/base-pruebas/05-funciones'
import { getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un objeto',() => {


    const testUser = {
      uid: 'ABC123',
        username: 'El_Papi1502'
    };

const user = getUser();
expect(testUser).toEqual(user)

  })

  test('getUsuarioActivo debe de retornar un objeto', () => {
    const name = 'Juampa';
    const uniD = {
        uid: 'ABC567',
        username: name
    };
    console.log(uniD)

    const usuario = getUsuarioActivo(name)

    expect(uniD).toStrictEqual(usuario)
})
})
