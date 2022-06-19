export const stringSum = (str: string) => {
    return str.split('').reduce((acc, val) => acc + val.charCodeAt(0), 0)
}