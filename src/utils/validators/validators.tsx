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

export const urlAddress = (value: string) => {
    const Regex=/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/
    if (Regex.test(value)) {
        return undefined
    } else if (value==='') {
        return undefined
    } else{
        return  'Incorrect address'
    }
}
