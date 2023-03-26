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
    instance = new FastApi.RevisionResponseModel();
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

  describe('RevisionResponseModel', function() {
    it('should create an instance of RevisionResponseModel', function() {
      // uncomment below and update the code to test RevisionResponseModel
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be.a(FastApi.RevisionResponseModel);
    });

    it('should have the property binaries (base name: "binaries")', function() {
      // uncomment below and update the code to test the property binaries
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property config (base name: "config")', function() {
      // uncomment below and update the code to test the property config
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property cpuUsage (base name: "cpu_usage")', function() {
      // uncomment below and update the code to test the property cpuUsage
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property erasureDate (base name: "erasure_date")', function() {
      // uncomment below and update the code to test the property erasureDate
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property feedback (base name: "feedback")', function() {
      // uncomment below and update the code to test the property feedback
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property health (base name: "health")', function() {
      // uncomment below and update the code to test the property health
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property imageId (base name: "image_id")', function() {
      // uncomment below and update the code to test the property imageId
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property lastStartDate (base name: "last_start_date")', function() {
      // uncomment below and update the code to test the property lastStartDate
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property lastStopDate (base name: "last_stop_date")', function() {
      // uncomment below and update the code to test the property lastStopDate
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property ramUsage (base name: "ram_usage")', function() {
      // uncomment below and update the code to test the property ramUsage
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property seeds (base name: "seeds")', function() {
      // uncomment below and update the code to test the property seeds
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

    it('should have the property tmpfsSize (base name: "tmpfs_size")', function() {
      // uncomment below and update the code to test the property tmpfsSize
      //var instance = new FastApi.RevisionResponseModel();
      //expect(instance).to.be();
    });

  });

}));
