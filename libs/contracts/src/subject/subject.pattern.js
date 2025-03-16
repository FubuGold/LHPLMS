const name = 'subject';

const action = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  GET_ALL: 'getAll',
  GET_ONE: 'getOne',
  GENERAL: '*',
};

const PATTERN = Object.entries(action)
  .map((item) => ({ [item[0]]: `${name}.${item[1]}` }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

module.exports = { PATTERN };
