export const exercicio1 = (n: string) => {
    if (typeof n !== "string") {
        throw new Error("o argumento deve ser string")
    }

    let str = n
    let srtToNumber = parseInt(str)

    return srtToNumber

}