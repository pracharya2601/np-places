/* eslint-disable max-len */
/* eslint-disable no-undef */
const { expect } = require('chai');
const { isArrayOfStrings } = require('../../utils/isArrayOfStrings');
const { districts, districtList } = require('.');
const { state } = require('../state');

describe('state-names', () => {
  it('it should return list all district', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(isArrayOfStrings(districts)).to.be.true;
  });

  it('should all to get list of available district form state', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(isArrayOfStrings(districtList(state[[Math.floor(Math.random() * state.length)]]))).to.be.true;
  });
});
