const checkPassword = password => {
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
};

const assessPasswordStrength = validation => {
    const strength = Object.keys(validation).filter(Boolean).length;
    if (strength === 4) {
        return 'strong';
    } else if (strength === 3) {
        return 'mid';
    } else {
        return 'weak';
    }
};

const validatedPassword = checkPassword('password123');

if (validatedPassword) {
    console.log(assessPasswordStrength(validatedPassword));
} else {
    console.log('password unvalidated');
}
