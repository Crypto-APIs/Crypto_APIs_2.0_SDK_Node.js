"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateTokensTransactionRequestFromAddressRBData = _interopRequireDefault(require("./CreateTokensTransactionRequestFromAddressRBData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTokensTransactionRequestFromAddressRB model module.
 * @module model/CreateTokensTransactionRequestFromAddressRB
 * @version 1.3.0
 */
var CreateTokensTransactionRequestFromAddressRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTokensTransactionRequestFromAddressRB</code>.
   * @alias module:model/CreateTokensTransactionRequestFromAddressRB
   * @param data {module:model/CreateTokensTransactionRequestFromAddressRBData} 
   */
  function CreateTokensTransactionRequestFromAddressRB(data) {
    _classCallCheck(this, CreateTokensTransactionRequestFromAddressRB);

    CreateTokensTransactionRequestFromAddressRB.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTokensTransactionRequestFromAddressRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRB} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRB} The populated <code>CreateTokensTransactionRequestFromAddressRB</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTokensTransactionRequestFromAddressRB();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _CreateTokensTransactionRequestFromAddressRBData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return CreateTokensTransactionRequestFromAddressRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */


CreateTokensTransactionRequestFromAddressRB.prototype['context'] = undefined;
/**
 * @member {module:model/CreateTokensTransactionRequestFromAddressRBData} data
 */

CreateTokensTransactionRequestFromAddressRB.prototype['data'] = undefined;
var _default = CreateTokensTransactionRequestFromAddressRB;
exports["default"] = _default;