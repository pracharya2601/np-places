/* eslint-disable no-plusplus */
const lists = require('../lists.json');

const arrayOfDistrict = lists.data.map((item) => item.districts);

// eslint-disable-next-line consistent-return
const stateDistricts = (stateName) => {
  for (let i = 0; i < lists.data.length; i++) {
    if (lists.data[i].state === stateName) {
      return lists.data[i].districts;
    }
  }
};

const districts = arrayOfDistrict.flat(1);
const districtList = (stateName) => stateDistricts(stateName);

module.exports = {
  districts,
  districtList,
};
