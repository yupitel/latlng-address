const LatLngAdr = require('../index.js');
const expect    = require('chai').expect;

describe('Library test', () => {
  before(() => null);

  describe('Get request session', () => {
    it('get list of config files', (done) => {
      const config = {
        key: process.env.KEY,
        stagger_time: 1000,
        encode_polylines: false,
        secure: true
      };

      const lla = new LatLngAdr(config);
      lla.getAddress(40.782906, -73.965433)
      .then((address) => {
        console.log(address);
        expect(address).to.not.be.a('null');
        done();
      });
    });
  });
  after(() => {
    console.log('finish.');
  });
});


