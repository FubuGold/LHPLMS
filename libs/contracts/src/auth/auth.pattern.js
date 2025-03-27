const name = 'auth';

const action = {
    LOGIN: 'login',
    REGISTER: 'register',
    AUTHENTICATE: 'authenticate',
    LOGOUT: 'logout',
    REFRESH: 'refresh',
    GENERAL: `*`,
};

const AUTH_PATTERN = Object.entries(action)
    .map((item) => ({ [item[0]]: `${name}.${item[1]}` }))
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});

module.exports = { AUTH_PATTERN };
