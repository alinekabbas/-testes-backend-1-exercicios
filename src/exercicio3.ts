
const users = [
    {
        name: 'Fulano'
    },
    {
        name: 'Ciclano'
    },
    {
        name: 'Beltrano'
    },
    {
        name: 'Astrodev'
    }
]

export const exercicio3 = (name: string) => {
    if (typeof name !== "string") {
        throw new Error("o argumento deve ser string")
    }
    const checkUser = users.find((user)=> {
        return user.name === name
    })
    return checkUser
}