import { exercicio2 } from "../src/exercicio2"

describe("exercicio2", () => {
    test("recebe data no formato 'aaaa/mm/dd' e retorna outra string no formato 'dd/mm/aaaa'", () => {
        const result = exercicio2("2023/02/27")
        expect(result).toBe("27/02/2023")
    })
})