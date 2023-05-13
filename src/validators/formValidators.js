export const ifIsEmptyValidator = (value = "") => {
    let error = ""
    if (!value && value.length === 0) {
        error = "this value is required";
    }
    return error;
}

export const ifIsNotValidEmailValidator = (value = "") => {
    let error = ""
    if (!value.includes("@")) {
        error = "email should have an @ symbol";
    }
    return error;
}

export const ifIsMajorThanLimitValidator = (value = "", limit = 0) => {
    let error = ""
    if (value.length > limit) {
        error = `this value should not have more than ${limit} characters`;
    }
    return error;
}

export const ifIsMinorThanLimitValidator = (value = "", limit = 0) => {
    let error = ""
    if (value.length < limit) {
        error = `this value should not have less than ${limit} characters`;
    }
    return error;
}

export const emailValidator = (value = "", limit = 0) => {
    const isEmpty = ifIsEmptyValidator(value);
    const isMinor = ifIsMinorThanLimitValidator(value, limit);
    const hasCorrectSymbol = ifIsNotValidEmailValidator(value);
    let errors = []
    hasCorrectSymbol ? errors.unshift(hasCorrectSymbol) : errors.splice(0, 1);
    isEmpty ? errors.unshift(isEmpty) : errors.splice(1, 1);
    isMinor ? errors.unshift(isMinor) : errors.splice(2, 1);
    return errors.length === 0 ? [] : errors;
}

export const taskTitleValidator = (value = "", limit = 0) => {
    const isEmpty = ifIsEmptyValidator(value);
    const isMinor = ifIsMinorThanLimitValidator(value, limit);
    let errors = []
    isEmpty ? errors.unshift(isEmpty) : errors.splice(1, 1);
    isMinor ? errors.unshift(isMinor) : errors.splice(2, 1);
    return errors.length === 0 ? [] : errors;
}
