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
 * The GetContractDetailsByAddressRI model module.
 * @module model/GetContractDetailsByAddressRI
 * @version 1.2.0
 */
var GetContractDetailsByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetContractDetailsByAddressRI</code>.
   * @alias module:model/GetContractDetailsByAddressRI
   * @param tokenDecimals {String} Defines the number of decimals that the token possesses.
   * @param tokenType {String} Defines the type of the token.
   * @param totalSupply {String} Defines the total number of tokens created that exist on the market minus the ones that have been burned.
   */
  function GetContractDetailsByAddressRI(tokenDecimals, tokenType, totalSupply) {
    _classCallCheck(this, GetContractDetailsByAddressRI);

    GetContractDetailsByAddressRI.initialize(this, tokenDecimals, tokenType, totalSupply);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetContractDetailsByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, tokenDecimals, tokenType, totalSupply) {
      obj['tokenDecimals'] = tokenDecimals;
      obj['tokenType'] = tokenType;
      obj['totalSupply'] = totalSupply;
    }
    /**
     * Constructs a <code>GetContractDetailsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetContractDetailsByAddressRI} obj Optional instance to populate.
     * @return {module:model/GetContractDetailsByAddressRI} The populated <code>GetContractDetailsByAddressRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetContractDetailsByAddressRI();

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

        if (data.hasOwnProperty('totalSupply')) {
          obj['totalSupply'] = _ApiClient["default"].convertToType(data['totalSupply'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetContractDetailsByAddressRI;
}();
/**
 * Defines the number of decimals that the token possesses.
 * @member {String} tokenDecimals
 */


GetContractDetailsByAddressRI.prototype['tokenDecimals'] = undefined;
/**
 * Specifies the token's name.
 * @member {String} tokenName
 */

GetContractDetailsByAddressRI.prototype['tokenName'] = undefined;
/**
 * Defines the unique symbol of the token.
 * @member {String} tokenSymbol
 */

GetContractDetailsByAddressRI.prototype['tokenSymbol'] = undefined;
/**
 * Defines the type of the token.
 * @member {String} tokenType
 */

GetContractDetailsByAddressRI.prototype['tokenType'] = undefined;
/**
 * Defines the total number of tokens created that exist on the market minus the ones that have been burned.
 * @member {String} totalSupply
 */

GetContractDetailsByAddressRI.prototype['totalSupply'] = undefined;
var _default = GetContractDetailsByAddressRI;
exports["default"] = _default;