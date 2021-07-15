/* eslint-disable max-len */
/* eslint-disable no-undef */
const { expect } = require('chai');
const { isArrayOfStrings } = require('../../utils/isArrayOfStrings');
const { state } = require('.');

describe('state-names', () => {
  it('it should return list of all available state names', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(isArrayOfStrings(state)).to.be.true;
  });
});
