/*!
 * latlng-address
 * Copyright(c) 2017 Shunsuke <qfoori@gmail.com>
 * ISC Licensed
 */

'use strict';
const GoogleMapsAPI = require('googlemaps');

const LANGUAGE = 'en';

module.exports = class LatLngAddress {
  constructor(config) {
    this.config = {};
    if (config) {
      this.config.key = config.key;
      this.config.stagger_time = config.stagger_time || 1000;
      this.config.encode_polylines = config.encode_polylines || false;
      this.config.secure = config.secure || true;
    }

    if (config && config.key && config.key.length > 0) {
      this.gm = new GoogleMapsAPI(config);
    }
  }

  _latlng(lat, lng) {
    if (!lat || !lng) {
      return;
    }
    let latlng = '';
    latlng += String(lat);
    latlng += ',';
    latlng += String(lng);
    return latlng;
  }

  getAddress(lat, lng, options) {
    return new Promise((resolve, reject) => {
      const gm = this.gm;
      if (!gm) {
        const err = new Error('invalid config');
        reject(err);
        return;
      }

      const latlng = this._latlng(lat, lng);
      if (!latlng || latlng.length === 0) {
        const err = new Error('invalid latitude/longitude');
        reject(err);
        return;
      }

      let lang = LANGUAGE;
      if (options) {
        if (options.language) {
          lang = options.language;
        }
      }
  
      const reverseGeocodeParams = {
        result_type  : 'postal_code',
        language     : lang,
        location_type: 'APPROXIMATE',
        latlng       : latlng
      };

      gm.reverseGeocode(reverseGeocodeParams, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        if (result && result.status === 'OK') {
          resolve(result.results);
          return;
        }
        resolve(null);
      });
    });
  }
}
