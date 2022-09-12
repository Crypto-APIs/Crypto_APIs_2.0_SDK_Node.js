"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConfirmedTokensTransactionForCertainAmountOrHigherErc721 model module.
 * @module model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721
 * @version 1.8.0
 */
var ConfirmedTokensTransactionForCertainAmountOrHigherErc721 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfirmedTokensTransactionForCertainAmountOrHigherErc721</code>.
   * ERC-721
   * @alias module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721
   * @param name {String} Specifies the name of the token.
   * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
   * @param tokenId {String} Specifies the ID of the token.
   * @param contractAddress {String} Specifies the address of the contract.
   */
  function ConfirmedTokensTransactionForCertainAmountOrHigherErc721(name, symbol, tokenId, contractAddress) {
    _classCallCheck(this, ConfirmedTokensTransactionForCertainAmountOrHigherErc721);

    ConfirmedTokensTransactionForCertainAmountOrHigherErc721.initialize(this, name, symbol, tokenId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConfirmedTokensTransactionForCertainAmountOrHigherErc721, null, [{
    key: "initialize",
    value: function initialize(obj, name, symbol, tokenId, contractAddress) {
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['tokenId'] = tokenId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>ConfirmedTokensTransactionForCertainAmountOrHigherErc721</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721} obj Optional instance to populate.
     * @return {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721} The populated <code>ConfirmedTokensTransactionForCertainAmountOrHigherErc721</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfirmedTokensTransactionForCertainAmountOrHigherErc721();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('tokenId')) {
          obj['tokenId'] = _ApiClient["default"].convertToType(data['tokenId'], 'String');
        }

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConfirmedTokensTransactionForCertainAmountOrHigherErc721;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */


ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */

ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['symbol'] = undefined;
/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */

ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['tokenId'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */

ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['contractAddress'] = undefined;
var _default = ConfirmedTokensTransactionForCertainAmountOrHigherErc721;
exports["default"] = _default;