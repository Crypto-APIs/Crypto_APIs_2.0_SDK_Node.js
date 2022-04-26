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
 * The ListAllAssetsFromAllWalletsRICoins model module.
 * @module model/ListAllAssetsFromAllWalletsRICoins
 * @version 1.5.0
 */
var ListAllAssetsFromAllWalletsRICoins = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllAssetsFromAllWalletsRICoins</code>.
   * @alias module:model/ListAllAssetsFromAllWalletsRICoins
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param confirmedBalance {String} Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param totalReceived {String} Defines the total amount of all coins received to the address, based on confirmed transactions.
   * @param totalSpent {String} Defines the total amount of all spent by this address coins, based on confirmed transactions.
   * @param unit {String} Represents the unit of the confirmed balance.
   */
  function ListAllAssetsFromAllWalletsRICoins(blockchain, confirmedBalance, network, totalReceived, totalSpent, unit) {
    _classCallCheck(this, ListAllAssetsFromAllWalletsRICoins);

    ListAllAssetsFromAllWalletsRICoins.initialize(this, blockchain, confirmedBalance, network, totalReceived, totalSpent, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllAssetsFromAllWalletsRICoins, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, confirmedBalance, network, totalReceived, totalSpent, unit) {
      obj['blockchain'] = blockchain;
      obj['confirmedBalance'] = confirmedBalance;
      obj['network'] = network;
      obj['totalReceived'] = totalReceived;
      obj['totalSpent'] = totalSpent;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>ListAllAssetsFromAllWalletsRICoins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsFromAllWalletsRICoins} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsFromAllWalletsRICoins} The populated <code>ListAllAssetsFromAllWalletsRICoins</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllAssetsFromAllWalletsRICoins();

        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }

        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _ApiClient["default"].convertToType(data['confirmedBalance'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('totalReceived')) {
          obj['totalReceived'] = _ApiClient["default"].convertToType(data['totalReceived'], 'String');
        }

        if (data.hasOwnProperty('totalSpent')) {
          obj['totalSpent'] = _ApiClient["default"].convertToType(data['totalSpent'], 'String');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListAllAssetsFromAllWalletsRICoins;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */


ListAllAssetsFromAllWalletsRICoins.prototype['blockchain'] = undefined;
/**
 * Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
 * @member {String} confirmedBalance
 */

ListAllAssetsFromAllWalletsRICoins.prototype['confirmedBalance'] = undefined;
/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */

ListAllAssetsFromAllWalletsRICoins.prototype['network'] = undefined;
/**
 * Defines the total amount of all coins received to the address, based on confirmed transactions.
 * @member {String} totalReceived
 */

ListAllAssetsFromAllWalletsRICoins.prototype['totalReceived'] = undefined;
/**
 * Defines the total amount of all spent by this address coins, based on confirmed transactions.
 * @member {String} totalSpent
 */

ListAllAssetsFromAllWalletsRICoins.prototype['totalSpent'] = undefined;
/**
 * Represents the unit of the confirmed balance.
 * @member {String} unit
 */

ListAllAssetsFromAllWalletsRICoins.prototype['unit'] = undefined;
var _default = ListAllAssetsFromAllWalletsRICoins;
exports["default"] = _default;