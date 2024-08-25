const checkPassword = (password) => {
    const validation = {
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
    };
    const patterns = {
        lowercase: /[a-z]/,
        uppercase: /[A-Z]/,
        number: /\d/,
        symbol: /[!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/~`]/,
    };

    if (password.length >= 8) {
        for (const key in patterns) {
            if (patterns[key].test(password)) {
                validation[key] = true;
            }
        }
    } else {
        return false;
    }
    return validation;
}

const passwordStrength = (validation) => {
    const strength = Object.values(validation).filter(Boolean).length;
    return strength === 4 ? 'strong' : strength === 3 ? 'mid' : strength === 2 ? 'weak' : 'weak'
};

const validatedPassword = checkPassword('password');
console.log(validatedPassword)

if (validatedPassword) {
    console.log(passwordStrength(validatedPassword));
} else {
    console.log('password unvalidated | maybe no password');
}
