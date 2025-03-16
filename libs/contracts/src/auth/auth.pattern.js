const name = 'auth';

const action = {
  LOGIN: 'login',
  REGISTER: 'register',
  GENERAL: `*`,
};

const PATTERN = Object.entries(action)
  .map((item) => ({ [item[0]]: `${name}.${item[1]}` }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

module.exports = { PATTERN };
