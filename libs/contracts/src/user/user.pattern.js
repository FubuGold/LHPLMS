const name = 'user';

const action = {
  GET_ONE: 'getOne',
  GET_ALL: 'getAll',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  GET_SETTING: 'getSetting',
  GET_TASK: 'getTask',
  GET_BY_USERNAME: 'getByUsername',
  UPDATE_SETTING: 'updateSetting',
  GENERAL: '*',
};

const PATTERN = Object.entries(action)
  .map((item) => ({ [item[0]]: `${name}.${item[1]}` }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

module.exports = { PATTERN };
