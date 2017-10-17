const LatLngAdr = require('./index.js');

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
});

