"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateCoinsTransactionRequestFromWalletRBData = _interopRequireDefault(require("./CreateCoinsTransactionRequestFromWalletRBData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreateCoinsTransactionRequestFromWalletRB model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRB
 * @version 1.7.2
 */
var CreateCoinsTransactionRequestFromWalletRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRB</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromWalletRB
   * @param data {module:model/CreateCoinsTransactionRequestFromWalletRBData} 
   */
  function CreateCoinsTransactionRequestFromWalletRB(data) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromWalletRB);

    CreateCoinsTransactionRequestFromWalletRB.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionRequestFromWalletRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRB} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletRB} The populated <code>CreateCoinsTransactionRequestFromWalletRB</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromWalletRB();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _CreateCoinsTransactionRequestFromWalletRBData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return CreateCoinsTransactionRequestFromWalletRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */


CreateCoinsTransactionRequestFromWalletRB.prototype['context'] = undefined;
/**
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRBData} data
 */

CreateCoinsTransactionRequestFromWalletRB.prototype['data'] = undefined;
var _default = CreateCoinsTransactionRequestFromWalletRB;
exports["default"] = _default;