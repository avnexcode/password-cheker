const checkPassword = (password) => {
    if (password.length < 8) return false;

    const rules = [/[a-z]/, /[A-Z]/, /\d/, /[!@#$%^&*()_+\-=\[\]{};:'",.<>?~]/];
    return rules.map(rule => rule.test(password));
}

const passwordStrength = (results) => {
    const strength = results.filter(Boolean).length;
    return ['weak', 'weak', 'weak', 'mid', 'strong'][strength];
}

const result = checkPassword("password");

if (result) {
    console.log(passwordStrength(result));
} else {
    console.log('Password tidak valid');
}