export const exercicio2 = (date: string):string => {
    if (typeof date !== "string") {
        throw new Error("o argumento deve ser string")
    }

    const brDate = date.split("/").reverse().join("/")

    return brDate
}