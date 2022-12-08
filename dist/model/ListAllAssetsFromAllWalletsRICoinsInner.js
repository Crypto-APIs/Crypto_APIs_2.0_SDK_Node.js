"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListAllAssetsFromAllWalletsRICoinsInner model module.
 * @module model/ListAllAssetsFromAllWalletsRICoinsInner
 * @version 1.11.0
 */
var ListAllAssetsFromAllWalletsRICoinsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllAssetsFromAllWalletsRICoinsInner</code>.
   * @alias module:model/ListAllAssetsFromAllWalletsRICoinsInner
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param confirmedBalance {String} Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param totalReceived {String} Defines the total amount of all coins received to the address, based on confirmed transactions.
   * @param totalSpent {String} Defines the total amount of all spent by this address coins, based on confirmed transactions.
   * @param unit {String} Represents the unit of the confirmed balance.
   */
  function ListAllAssetsFromAllWalletsRICoinsInner(blockchain, confirmedBalance, network, totalReceived, totalSpent, unit) {
    _classCallCheck(this, ListAllAssetsFromAllWalletsRICoinsInner);
    ListAllAssetsFromAllWalletsRICoinsInner.initialize(this, blockchain, confirmedBalance, network, totalReceived, totalSpent, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListAllAssetsFromAllWalletsRICoinsInner, null, [{
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
     * Constructs a <code>ListAllAssetsFromAllWalletsRICoinsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllAssetsFromAllWalletsRICoinsInner} obj Optional instance to populate.
     * @return {module:model/ListAllAssetsFromAllWalletsRICoinsInner} The populated <code>ListAllAssetsFromAllWalletsRICoinsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllAssetsFromAllWalletsRICoinsInner();
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

    /**
     * Validates the JSON data with respect to <code>ListAllAssetsFromAllWalletsRICoinsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAllAssetsFromAllWalletsRICoinsInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListAllAssetsFromAllWalletsRICoinsInner.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['blockchain'] && !(typeof data['blockchain'] === 'string' || data['blockchain'] instanceof String)) {
        throw new Error("Expected the field `blockchain` to be a primitive type in the JSON string but got " + data['blockchain']);
      }
      // ensure the json data is a string
      if (data['confirmedBalance'] && !(typeof data['confirmedBalance'] === 'string' || data['confirmedBalance'] instanceof String)) {
        throw new Error("Expected the field `confirmedBalance` to be a primitive type in the JSON string but got " + data['confirmedBalance']);
      }
      // ensure the json data is a string
      if (data['network'] && !(typeof data['network'] === 'string' || data['network'] instanceof String)) {
        throw new Error("Expected the field `network` to be a primitive type in the JSON string but got " + data['network']);
      }
      // ensure the json data is a string
      if (data['totalReceived'] && !(typeof data['totalReceived'] === 'string' || data['totalReceived'] instanceof String)) {
        throw new Error("Expected the field `totalReceived` to be a primitive type in the JSON string but got " + data['totalReceived']);
      }
      // ensure the json data is a string
      if (data['totalSpent'] && !(typeof data['totalSpent'] === 'string' || data['totalSpent'] instanceof String)) {
        throw new Error("Expected the field `totalSpent` to be a primitive type in the JSON string but got " + data['totalSpent']);
      }
      // ensure the json data is a string
      if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
        throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
      }
      return true;
    }
  }]);
  return ListAllAssetsFromAllWalletsRICoinsInner;
}();
ListAllAssetsFromAllWalletsRICoinsInner.RequiredProperties = ["blockchain", "confirmedBalance", "network", "totalReceived", "totalSpent", "unit"];

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['blockchain'] = undefined;

/**
 * Defines the total balance of the address that is confirmed. It doesn't include unconfirmed transactions.
 * @member {String} confirmedBalance
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['confirmedBalance'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {String} network
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['network'] = undefined;

/**
 * Defines the total amount of all coins received to the address, based on confirmed transactions.
 * @member {String} totalReceived
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['totalReceived'] = undefined;

/**
 * Defines the total amount of all spent by this address coins, based on confirmed transactions.
 * @member {String} totalSpent
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['totalSpent'] = undefined;

/**
 * Represents the unit of the confirmed balance.
 * @member {String} unit
 */
ListAllAssetsFromAllWalletsRICoinsInner.prototype['unit'] = undefined;
var _default = ListAllAssetsFromAllWalletsRICoinsInner;
exports["default"] = _default;