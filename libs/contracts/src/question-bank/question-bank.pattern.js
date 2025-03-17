const name = 'questionBank';

const action = {
  GET_ALL: 'getAll',
  GET_ONE: 'getOne',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  GET_ALL_QUESTION: 'question.getAll',
  GET_ONE_QUESTION: 'question.getOne',
  CREATE_QUESTION: 'question.create',
  UPDATE_QUESTION: 'question.update',
  DELETE_QUESTION: 'question.delete',
  GENERAL: '*',
};

const QUESTIONBANK_PATTERN = Object.entries(action)
  .map((item) => ({ [item[0]]: `${name}.${item[1]}` }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

module.exports = { QUESTIONBANK_PATTERN };
