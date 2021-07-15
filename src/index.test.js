/* eslint-disable max-len */
/* eslint-disable no-undef */
const { expect } = require('chai');
const { isArrayOfStrings } = require('../utils/isArrayOfStrings');
const mainExport = require('.');

describe('state-name', () => {
  it('it should have a list of all available names', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(isArrayOfStrings(mainExport.state)).to.be.true;
  });
  it('it should have a list of all available names', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(isArrayOfStrings(mainExport.districts)).to.be.true;
  });
  it('should all to get list of available district form state', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(isArrayOfStrings(mainExport.districtList(mainExport.state[[Math.floor(Math.random() * mainExport.state.length)]]))).to.be.true;
  });
});
