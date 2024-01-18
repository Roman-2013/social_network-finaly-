export {}
export const required = (value: string) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (max: number) => (value: string) => {
    if (value && value.length < max) {
        return undefined
    } else {
        console.log('yes')
        return `Max length is ${max} symbols`
    }
}


