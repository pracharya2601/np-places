/* eslint-disable max-len */
/* eslint-disable no-undef */
const { expect } = require('chai');
const { isArrayOfStrings } = require('../utils/isArrayOfStrings');
const { isIncludedIn } = require('../utils/isIncludedIn');
const { provence } = require('.');

describe('provence-name', () => {
  it('it should have a list of all available names', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(isArrayOfStrings(provence)).to.be.true;
  });

  it('should allow to get random item', () => {
    expect(provence[[Math.floor(Math.random() * provence.length)]]).to.satisfy(isIncludedIn(provence));
  });
});
