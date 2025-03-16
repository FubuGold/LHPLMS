const name = 'post';

const action = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  GET_ONE: 'getOne',
  GET_ALL: 'getAll',
  GENERAL: '*',
};

const PATTERN = Object.entries(action)
  .map((item) => ({ [item[0]]: `${name}.${item[1]}` }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

module.exports = { PATTERN };
