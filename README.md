latlng-address
====

this library is wrapper to call reverse geocoding function in the Google Maps API from node.js

## Purpose
get address with latitude / longitude by reverse geocoding.

## Parameter

field | data type | necessity |  description
:------ | :-----:  | :-----: | :-----
latitude | double | required | latitude data
longitude | double | required | longitude data
option | object | optional | about the detail, check below.

### Optional parameter
optional parameter is set in the option argument.  

* language
    - 'en' / 'ja' etc.
    - use Subtag data in the following link
    - http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry

## Sample Code
About the key data, please register map api servie.  
https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse?hl=ja


```
const LatLngAdr = require('latlng-address');

const config = {
  key: {YOUR KEY},
  stagger_time: 1000,
  encode_polylines: false,
  secure: true
};

const lla = new LatLngAdr(config);

lla.getAddress(40.782906, -73.965433)
.then((address) => {
  console.log(address);
});
```
