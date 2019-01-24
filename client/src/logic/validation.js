export default {
    name: {
        max: 5,
        valid: /^[a-zA-Z &.',]{1,50}$/,
        invalid: /[^a-zA-Z &.',]/g,
    },
    email: {
        max: 50,
        valid: /^$/,
        invalid: / /g,
    },
    phone: {
        max: 10,
        valid: /^\d{10}/,
        invalid: / /g,
    },
    subject: {
        max: 100,
        valid: /^[a-zA-Z]$/,
        invalid: / /g,
    },
    message: {
        max: 500,
        valid: /^[a-zA-Z]$/,
        invalid: / /g,
    }
};