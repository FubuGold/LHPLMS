const name = 'class';

const action = {
  CREATE: `create`,
  UPDATE: `update`,
  DELETE: `delete`,
  GET_ONE: `getOne`,
  GET_ALL: `getAll`,
  GENERAL: `*`,
};

const CLASS_PATTERN = Object.entries(action)
  .map((item) => ({ [item[0]]: `${name}.${item[1]}` }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

module.exports = { CLASS_PATTERN };
