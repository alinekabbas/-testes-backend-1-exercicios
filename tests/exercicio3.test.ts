import { exercicio3 } from "../src/exercicio3"

describe("exercicio3", () => {
    test("verificar se o nome informado está incluido na lista de usuários", () => {
        const result = exercicio3("Astrodev")
        expect(result).toEqual({"name": "Astrodev"})
    })
})