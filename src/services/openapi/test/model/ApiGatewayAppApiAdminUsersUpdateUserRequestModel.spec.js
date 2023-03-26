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
    instance = new FastApi.ApiGatewayAppApiAdminUsersUpdateUserRequestModel();
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

  describe('ApiGatewayAppApiAdminUsersUpdateUserRequestModel', function() {
    it('should create an instance of ApiGatewayAppApiAdminUsersUpdateUserRequestModel', function() {
      // uncomment below and update the code to test ApiGatewayAppApiAdminUsersUpdateUserRequestModel
      //var instance = new FastApi.ApiGatewayAppApiAdminUsersUpdateUserRequestModel();
      //expect(instance).to.be.a(FastApi.ApiGatewayAppApiAdminUsersUpdateUserRequestModel);
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new FastApi.ApiGatewayAppApiAdminUsersUpdateUserRequestModel();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new FastApi.ApiGatewayAppApiAdminUsersUpdateUserRequestModel();
      //expect(instance).to.be();
    });

    it('should have the property isConfirmed (base name: "is_confirmed")', function() {
      // uncomment below and update the code to test the property isConfirmed
      //var instance = new FastApi.ApiGatewayAppApiAdminUsersUpdateUserRequestModel();
      //expect(instance).to.be();
    });

    it('should have the property isDisabled (base name: "is_disabled")', function() {
      // uncomment below and update the code to test the property isDisabled
      //var instance = new FastApi.ApiGatewayAppApiAdminUsersUpdateUserRequestModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new FastApi.ApiGatewayAppApiAdminUsersUpdateUserRequestModel();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new FastApi.ApiGatewayAppApiAdminUsersUpdateUserRequestModel();
      //expect(instance).to.be();
    });

  });

}));
