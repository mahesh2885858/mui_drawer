const checkStrength = (password: string) => {
    const minLength = 8
    let score = 100;
    const remarksArray: ({ reduceFactor: number, message: string } | undefined)[] = []
    remarksArray.push(checkLength(password, minLength))
    remarksArray.push(checkLowerCase(password))
    remarksArray.push(checkUpperCase(password))
    remarksArray.push(checkNumber(password))
    remarksArray.push(checkSpecialCharacter(password))
    remarksArray.forEach((item) => {
        if (item === undefined) return
        score -= item.reduceFactor
    })
    return score
}
const checkLength = (password: string, minLimit: number) => {
    if (password.trim().length === 0) return {
        reduceFactor: 100,
        message: `password should be atleast ${minLimit} characters`
    }
    if (password.trim().length >= minLimit) {
        return undefined
    } else {
        return {
            reduceFactor: 20,
            message: `password should be atleast ${minLimit} characters`
        }
    }
}
const checkLowerCase = (Password: string) => {
    if (Password.match(/[a-z]/)) {
        return undefined
    } else {
        return {
            reduceFactor: 20,
            message: `password should contain at least one lower case letter`
        }
    }
}
const checkUpperCase = (Password: string) => {
    if (Password.match(/[A-Z]/)) {
        return undefined
    } else {
        return {
            reduceFactor: 20,
            message: `password should contain at least one upper case letter`
        }
    }
}
const checkNumber = (password: string) => {
    if (password.match(/[0-9]/)) {
        return undefined
    } else {
        return {
            reduceFactor: 20,
            message: "password should contain atleast one number"
        }
    }
}
const checkSpecialCharacter = (password: string) => {
    if (password.match(/[^a-zA-Z0-9\s]/)) {
        return undefined
    } else {
        return {

            reduceFactor: 20,
            message: "password should contain atleast one special character"
        }
    }
}
export default checkStrength