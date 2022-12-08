"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressTokensTransactionConfirmedDataItemMinedInBlock = _interopRequireDefault(require("./AddressTokensTransactionConfirmedDataItemMinedInBlock"));
var _AddressTokensTransactionConfirmedToken = _interopRequireDefault(require("./AddressTokensTransactionConfirmedToken"));
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
 * The AddressTokensTransactionConfirmedDataItem model module.
 * @module model/AddressTokensTransactionConfirmedDataItem
 * @version 1.11.0
 */
var AddressTokensTransactionConfirmedDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/AddressTokensTransactionConfirmedDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\",  are test networks.
   * @param address {String} Defines the specific address to which the transaction has been sent.
   * @param minedInBlock {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} 
   * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
   * @param tokenType {module:model/AddressTokensTransactionConfirmedDataItem.TokenTypeEnum} Defines the type of token sent with the transaction, e.g. ERC 20.
   * @param token {module:model/AddressTokensTransactionConfirmedToken} 
   * @param direction {module:model/AddressTokensTransactionConfirmedDataItem.DirectionEnum} Defines whether the transaction is \"incoming\" or \"outgoing\".
   */
  function AddressTokensTransactionConfirmedDataItem(blockchain, network, address, minedInBlock, transactionId, tokenType, token, direction) {
    _classCallCheck(this, AddressTokensTransactionConfirmedDataItem);
    AddressTokensTransactionConfirmedDataItem.initialize(this, blockchain, network, address, minedInBlock, transactionId, tokenType, token, direction);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddressTokensTransactionConfirmedDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, address, minedInBlock, transactionId, tokenType, token, direction) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['address'] = address;
      obj['minedInBlock'] = minedInBlock;
      obj['transactionId'] = transactionId;
      obj['tokenType'] = tokenType;
      obj['token'] = token;
      obj['direction'] = direction;
    }

    /**
     * Constructs a <code>AddressTokensTransactionConfirmedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedDataItem} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedDataItem} The populated <code>AddressTokensTransactionConfirmedDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionConfirmedDataItem();
        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }
        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('minedInBlock')) {
          obj['minedInBlock'] = _AddressTokensTransactionConfirmedDataItemMinedInBlock["default"].constructFromObject(data['minedInBlock']);
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
        if (data.hasOwnProperty('tokenType')) {
          obj['tokenType'] = _ApiClient["default"].convertToType(data['tokenType'], 'String');
        }
        if (data.hasOwnProperty('token')) {
          obj['token'] = _AddressTokensTransactionConfirmedToken["default"].constructFromObject(data['token']);
        }
        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddressTokensTransactionConfirmedDataItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressTokensTransactionConfirmedDataItem</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(AddressTokensTransactionConfirmedDataItem.RequiredProperties),
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
      if (data['network'] && !(typeof data['network'] === 'string' || data['network'] instanceof String)) {
        throw new Error("Expected the field `network` to be a primitive type in the JSON string but got " + data['network']);
      }
      // ensure the json data is a string
      if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
        throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
      }
      // validate the optional field `minedInBlock`
      if (data['minedInBlock']) {
        // data not null
        _AddressTokensTransactionConfirmedDataItemMinedInBlock["default"].validateJSON(data['minedInBlock']);
      }
      // ensure the json data is a string
      if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
        throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
      }
      // ensure the json data is a string
      if (data['tokenType'] && !(typeof data['tokenType'] === 'string' || data['tokenType'] instanceof String)) {
        throw new Error("Expected the field `tokenType` to be a primitive type in the JSON string but got " + data['tokenType']);
      }
      // validate the optional field `token`
      if (data['token']) {
        // data not null
        _AddressTokensTransactionConfirmedToken["default"].validateJSON(data['token']);
      }
      // ensure the json data is a string
      if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
        throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
      }
      return true;
    }
  }]);
  return AddressTokensTransactionConfirmedDataItem;
}();
AddressTokensTransactionConfirmedDataItem.RequiredProperties = ["blockchain", "network", "address", "minedInBlock", "transactionId", "tokenType", "token", "direction"];

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
AddressTokensTransactionConfirmedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\",  are test networks.
 * @member {String} network
 */
AddressTokensTransactionConfirmedDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address to which the transaction has been sent.
 * @member {String} address
 */
AddressTokensTransactionConfirmedDataItem.prototype['address'] = undefined;

/**
 * @member {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */
AddressTokensTransactionConfirmedDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
AddressTokensTransactionConfirmedDataItem.prototype['transactionId'] = undefined;

/**
 * Defines the type of token sent with the transaction, e.g. ERC 20.
 * @member {module:model/AddressTokensTransactionConfirmedDataItem.TokenTypeEnum} tokenType
 */
AddressTokensTransactionConfirmedDataItem.prototype['tokenType'] = undefined;

/**
 * @member {module:model/AddressTokensTransactionConfirmedToken} token
 */
AddressTokensTransactionConfirmedDataItem.prototype['token'] = undefined;

/**
 * Defines whether the transaction is \"incoming\" or \"outgoing\".
 * @member {module:model/AddressTokensTransactionConfirmedDataItem.DirectionEnum} direction
 */
AddressTokensTransactionConfirmedDataItem.prototype['direction'] = undefined;

/**
 * Allowed values for the <code>tokenType</code> property.
 * @enum {String}
 * @readonly
 */
AddressTokensTransactionConfirmedDataItem['TokenTypeEnum'] = {
  /**
   * value: "ERC-20"
   * @const
   */
  "ERC-20": "ERC-20",
  /**
   * value: "ERC-721"
   * @const
   */
  "ERC-721": "ERC-721",
  /**
   * value: "OMNI"
   * @const
   */
  "OMNI": "OMNI",
  /**
   * value: "BEP-20"
   * @const
   */
  "BEP-20": "BEP-20"
};

/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
AddressTokensTransactionConfirmedDataItem['DirectionEnum'] = {
  /**
   * value: "incoming"
   * @const
   */
  "incoming": "incoming",
  /**
   * value: "outgoing"
   * @const
   */
  "outgoing": "outgoing"
};
var _default = AddressTokensTransactionConfirmedDataItem;
exports["default"] = _default;