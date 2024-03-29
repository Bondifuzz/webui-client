/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FastApi);
  }
}(this, function(expect, FastApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FastApi.StatisticsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StatisticsApi', function() {
    describe('countFuzzerStatisticsRecords', function() {
      it('should call countFuzzerStatisticsRecords successfully', function(done) {
        //uncomment below and update the code to test countFuzzerStatisticsRecords
        //instance.countFuzzerStatisticsRecords(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('countRevisionStatisticsRecords', function() {
      it('should call countRevisionStatisticsRecords successfully', function(done) {
        //uncomment below and update the code to test countRevisionStatisticsRecords
        //instance.countRevisionStatisticsRecords(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listFuzzerStatistics', function() {
      it('should call listFuzzerStatistics successfully', function(done) {
        //uncomment below and update the code to test listFuzzerStatistics
        //instance.listFuzzerStatistics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRevisionStatistics', function() {
      it('should call listRevisionStatistics successfully', function(done) {
        //uncomment below and update the code to test listRevisionStatistics
        //instance.listRevisionStatistics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
