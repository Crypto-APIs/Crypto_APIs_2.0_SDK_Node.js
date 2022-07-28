"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListZilliqaTransactionsByBlockHashE = _interopRequireDefault(require("./ListZilliqaTransactionsByBlockHashE403"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListZilliqaTransactionsByBlockHash403Response model module.
 * @module model/ListZilliqaTransactionsByBlockHash403Response
 * @version 1.7.0
 */
var ListZilliqaTransactionsByBlockHash403Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListZilliqaTransactionsByBlockHash403Response</code>.
   * @alias module:model/ListZilliqaTransactionsByBlockHash403Response
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
   * @param error {module:model/ListZilliqaTransactionsByBlockHashE403} 
   */
  function ListZilliqaTransactionsByBlockHash403Response(apiVersion, requestId, error) {
    _classCallCheck(this, ListZilliqaTransactionsByBlockHash403Response);

    ListZilliqaTransactionsByBlockHash403Response.initialize(this, apiVersion, requestId, error);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListZilliqaTransactionsByBlockHash403Response, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, requestId, error) {
      obj['apiVersion'] = apiVersion;
      obj['requestId'] = requestId;
      obj['error'] = error;
    }
    /**
     * Constructs a <code>ListZilliqaTransactionsByBlockHash403Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListZilliqaTransactionsByBlockHash403Response} obj Optional instance to populate.
     * @return {module:model/ListZilliqaTransactionsByBlockHash403Response} The populated <code>ListZilliqaTransactionsByBlockHash403Response</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListZilliqaTransactionsByBlockHash403Response();

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
          obj['error'] = _ListZilliqaTransactionsByBlockHashE["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return ListZilliqaTransactionsByBlockHash403Response;
}();
/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */


ListZilliqaTransactionsByBlockHash403Response.prototype['apiVersion'] = undefined;
/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */

ListZilliqaTransactionsByBlockHash403Response.prototype['requestId'] = undefined;
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */

ListZilliqaTransactionsByBlockHash403Response.prototype['context'] = undefined;
/**
 * @member {module:model/ListZilliqaTransactionsByBlockHashE403} error
 */

ListZilliqaTransactionsByBlockHash403Response.prototype['error'] = undefined;
var _default = ListZilliqaTransactionsByBlockHash403Response;
exports["default"] = _default;