"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateCoinsTransactionFromAddressForWholeAmountE = _interopRequireDefault(require("./CreateCoinsTransactionFromAddressForWholeAmountE401"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreateCoinsTransactionFromAddressForWholeAmount401Response model module.
 * @module model/CreateCoinsTransactionFromAddressForWholeAmount401Response
 * @version 1.7.0
 */
var CreateCoinsTransactionFromAddressForWholeAmount401Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionFromAddressForWholeAmount401Response</code>.
   * @alias module:model/CreateCoinsTransactionFromAddressForWholeAmount401Response
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
   * @param error {module:model/CreateCoinsTransactionFromAddressForWholeAmountE401} 
   */
  function CreateCoinsTransactionFromAddressForWholeAmount401Response(apiVersion, requestId, error) {
    _classCallCheck(this, CreateCoinsTransactionFromAddressForWholeAmount401Response);

    CreateCoinsTransactionFromAddressForWholeAmount401Response.initialize(this, apiVersion, requestId, error);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionFromAddressForWholeAmount401Response, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, requestId, error) {
      obj['apiVersion'] = apiVersion;
      obj['requestId'] = requestId;
      obj['error'] = error;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionFromAddressForWholeAmount401Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionFromAddressForWholeAmount401Response} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionFromAddressForWholeAmount401Response} The populated <code>CreateCoinsTransactionFromAddressForWholeAmount401Response</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionFromAddressForWholeAmount401Response();

        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }

        if (data.hasOwnProperty('requestId')) {
          obj['requestId'] = _ApiClient["default"].convertToType(data['requestId'], 'String');
        }

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _CreateCoinsTransactionFromAddressForWholeAmountE["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return CreateCoinsTransactionFromAddressForWholeAmount401Response;
}();
/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */


CreateCoinsTransactionFromAddressForWholeAmount401Response.prototype['apiVersion'] = undefined;
/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */

CreateCoinsTransactionFromAddressForWholeAmount401Response.prototype['requestId'] = undefined;
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */

CreateCoinsTransactionFromAddressForWholeAmount401Response.prototype['context'] = undefined;
/**
 * @member {module:model/CreateCoinsTransactionFromAddressForWholeAmountE401} error
 */

CreateCoinsTransactionFromAddressForWholeAmount401Response.prototype['error'] = undefined;
var _default = CreateCoinsTransactionFromAddressForWholeAmount401Response;
exports["default"] = _default;