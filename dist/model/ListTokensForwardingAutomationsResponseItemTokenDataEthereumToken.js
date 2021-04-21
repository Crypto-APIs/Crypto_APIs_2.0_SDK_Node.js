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
 * The ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken model module.
 * @module model/ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken
 * @version 2.0.0
 */
var ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken</code>.
   * Ethereum Token
   * @alias module:model/ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken
   * @param contractAddress {String} Defines the token contract address.
   */
  function ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken(contractAddress) {
    _classCallCheck(this, ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken);

    ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken.initialize(this, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken, null, [{
    key: "initialize",
    value: function initialize(obj, contractAddress) {
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken} obj Optional instance to populate.
     * @return {module:model/ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken} The populated <code>ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken();

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken;
}();
/**
 * Defines the token contract address.
 * @member {String} contractAddress
 */


ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken.prototype['contractAddress'] = undefined;
var _default = ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken;
exports["default"] = _default;