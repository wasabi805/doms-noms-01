import {default as Validations} from './validation';

export const capitalize = (input='') => input.charAt(0).toUpperCase() + input.substr(1);
export const clipAndStrip = (input='', regex, max) => input.replace(regex, '').substr(0, max);


export const validateField = (field, input) => {
    const IdCapitalized = capitalize(field);
    const INPUT_LEN = input.length;

    const FIELD_MAX_LEN = Validations[field].max;
    let error = '';

    if (INPUT_LEN === 0)                            error = `${IdCapitalized} is required`;
    else if (INPUT_LEN > FIELD_MAX_LEN)             error = `${IdCapitalized} is too long`;
    else if (!Validations[field].valid.test(input)) error = `${IdCapitalized} has invalid characters`;

    return error;
};