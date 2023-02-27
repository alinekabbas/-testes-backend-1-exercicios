import { exercicio1 } from "../src/exercicio1"

describe("exercicio1", () => {
    test("receber um número em formato 'string' e retornar o mesmo número em formato 'number'", () => {
        const result = exercicio1("10")
        expect(result).toBe(10)
    })
})