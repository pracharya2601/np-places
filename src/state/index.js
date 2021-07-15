const lists = require('../lists.json');

const state = lists.data.map((item) => item.state);
module.exports = {
  state,
};
