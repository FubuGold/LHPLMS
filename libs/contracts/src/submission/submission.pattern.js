const name = 'submission';

const action = {
  CREATE: 'create',
  DELETE: 'delete',
  GET_ONE: 'getOne',
  GET_ALL: 'getAll',
  GENERAL: '*',
};

const PATTERN = Object.entries(action)
  .map((item) => ({ [item[0]]: `${name}.${item[1]}` }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

module.exports = { PATTERN };
