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

const assessPasswordStrength = (validation) => {
    const { lowercase, uppercase, number, symbol } = validation;

    if (lowercase && uppercase && number && symbol) {
        return 'strong';
    } else if ((lowercase && uppercase && number) || 
               (lowercase && uppercase && symbol) || 
               (lowercase && number && symbol) || 
               (uppercase && number && symbol)) {
        return 'mid';
    } else if ((lowercase && uppercase) || 
               (lowercase && number) || 
               (lowercase && symbol) || 
               (uppercase && number) || 
               (uppercase && symbol) || 
               (number && symbol)) {
        return 'weak';
    } else {
        return 'weak';
    }
}

const validatedPassword = checkPassword('password123');

if (validatedPassword) {
    console.log(assessPasswordStrength(validatedPassword));
} else {
    console.log('password unvalidated');
}
