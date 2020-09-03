import axios from 'axios';
import Info from '../services/info'
import infoMock from '../__mocks__/infoResponse'

let fakeResponse

jest.mock('axios');

describe('Respuestas de servicios', () => { //https://www.gatsbyjs.org/docs/unit-testing/

    beforeEach(async () => {
        axios.get.mockResolvedValue(infoMock);
        fakeResponse = await Info.all();
    });

    test('Validamos que el servicio responda', () => {
        expect(fakeResponse).toBeDefined();
    })

    test('Validamos que la respuesta no sea Null, NaN, Undefined ', () => {
        expect(fakeResponse).not.toBeNull();
        expect(fakeResponse).not.toBeNaN();
        expect(fakeResponse).not.toBeUndefined();
    })

    test('Validamos que la respuesta cuente con los parametros: barrio, empresa, clientes', () => {
        expect(fakeResponse.barrio).toBeDefined()
        expect(fakeResponse.empresa).toBeDefined()
        expect(fakeResponse.clientes).toBeDefined()
    });

});