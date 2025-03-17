const name = 'assignment';

const action = {
  CREATE: `create`,
  UPDATE: `update`,
  DELETE: `delete`,
  GET_ONE: `getOne`,
  GET_ALL: `getAll`,
  GENERAL: `*`,
};

const ASSIGNMENT_PATTERN = Object.entries(action)
  .map((item) => ({ [item[0]]: `${name}.${item[1]}` }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

module.exports = { ASSIGNMENT_PATTERN };
