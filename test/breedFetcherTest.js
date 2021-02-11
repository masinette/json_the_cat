// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      // console.log("PRINT ME", err, desc);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error for an invalid/nonexistent breed', (done) => {
    fetchBreedDescription('Tabby', (err, desc) => {
      // compare returned error
      const expectedError = "This breed is not in our database";
      // the error should be true and match expected error
      assert.equal(err, expectedError);
      // assert.equal(expectedError, null);

      done();
    });
  });


});