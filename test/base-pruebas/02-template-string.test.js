import {getSaludo} from '../../src/base-pruebas/02-template-strin'

describe('Puebas en 02-template-string', () => {
  
test('getSaludo debe de retornar "hola Ale"',() =>{

    const name = 'Ale';
    const message = getSaludo(name);

    expect( message ).toBe(`Hola ${name}`)

})

})
