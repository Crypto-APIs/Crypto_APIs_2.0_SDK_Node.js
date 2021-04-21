"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetContractDetailsByAddressResponseItem model module.
 * @module model/GetContractDetailsByAddressResponseItem
 * @version 2.0.0
 */
var GetContractDetailsByAddressResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetContractDetailsByAddressResponseItem</code>.
   * @alias module:model/GetContractDetailsByAddressResponseItem
   * @param confirmedBalance {String} Token balance
   * @param creatorAddress {String} Token creator
   * @param tokensBalance {String} Token balance
   * @param totalSupply {String} Token total supply
   */
  function GetContractDetailsByAddressResponseItem(confirmedBalance, creatorAddress, tokensBalance, totalSupply) {
    _classCallCheck(this, GetContractDetailsByAddressResponseItem);

    GetContractDetailsByAddressResponseItem.initialize(this, confirmedBalance, creatorAddress, tokensBalance, totalSupply);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetContractDetailsByAddressResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, confirmedBalance, creatorAddress, tokensBalance, totalSupply) {
      obj['confirmedBalance'] = confirmedBalance;
      obj['creatorAddress'] = creatorAddress;
      obj['tokensBalance'] = tokensBalance;
      obj['totalSupply'] = totalSupply;
    }
    /**
     * Constructs a <code>GetContractDetailsByAddressResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetContractDetailsByAddressResponseItem} obj Optional instance to populate.
     * @return {module:model/GetContractDetailsByAddressResponseItem} The populated <code>GetContractDetailsByAddressResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetContractDetailsByAddressResponseItem();

        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _ApiClient["default"].convertToType(data['confirmedBalance'], 'String');
        }

        if (data.hasOwnProperty('creatorAddress')) {
          obj['creatorAddress'] = _ApiClient["default"].convertToType(data['creatorAddress'], 'String');
        }

        if (data.hasOwnProperty('tokenDecimals')) {
          obj['tokenDecimals'] = _ApiClient["default"].convertToType(data['tokenDecimals'], 'String');
        }

        if (data.hasOwnProperty('tokenName')) {
          obj['tokenName'] = _ApiClient["default"].convertToType(data['tokenName'], 'String');
        }

        if (data.hasOwnProperty('tokenSymbol')) {
          obj['tokenSymbol'] = _ApiClient["default"].convertToType(data['tokenSymbol'], 'String');
        }

        if (data.hasOwnProperty('tokenType')) {
          obj['tokenType'] = _ApiClient["default"].convertToType(data['tokenType'], 'String');
        }

        if (data.hasOwnProperty('tokensBalance')) {
          obj['tokensBalance'] = _ApiClient["default"].convertToType(data['tokensBalance'], 'String');
        }

        if (data.hasOwnProperty('totalSupply')) {
          obj['totalSupply'] = _ApiClient["default"].convertToType(data['totalSupply'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetContractDetailsByAddressResponseItem;
}();
/**
 * Token balance
 * @member {String} confirmedBalance
 */


GetContractDetailsByAddressResponseItem.prototype['confirmedBalance'] = undefined;
/**
 * Token creator
 * @member {String} creatorAddress
 */

GetContractDetailsByAddressResponseItem.prototype['creatorAddress'] = undefined;
/**
 * Number of decimals
 * @member {String} tokenDecimals
 */

GetContractDetailsByAddressResponseItem.prototype['tokenDecimals'] = undefined;
/**
 * Token name
 * @member {String} tokenName
 */

GetContractDetailsByAddressResponseItem.prototype['tokenName'] = undefined;
/**
 * Token symbol
 * @member {String} tokenSymbol
 */

GetContractDetailsByAddressResponseItem.prototype['tokenSymbol'] = undefined;
/**
 * Token type
 * @member {String} tokenType
 */

GetContractDetailsByAddressResponseItem.prototype['tokenType'] = undefined;
/**
 * Token balance
 * @member {String} tokensBalance
 */

GetContractDetailsByAddressResponseItem.prototype['tokensBalance'] = undefined;
/**
 * Token total supply
 * @member {String} totalSupply
 */

GetContractDetailsByAddressResponseItem.prototype['totalSupply'] = undefined;
var _default = GetContractDetailsByAddressResponseItem;
exports["default"] = _default;