const name = 'group';

const action = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  GET_ONE: 'getOne',
  GET_ALL: 'getAll',
  ADD_USER: 'addUser',
  DELETE_USER: 'deleteUser',
  GENERAL: '*',
};

const GROUP_PATTERN = Object.entries(action)
  .map((item) => ({ [item[0]]: `${name}.${item[1]}` }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

module.exports = { GROUP_PATTERN };
