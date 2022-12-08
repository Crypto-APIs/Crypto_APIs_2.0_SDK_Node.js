"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetWalletAssetDetailsRIConfirmedBalance = _interopRequireDefault(require("./GetWalletAssetDetailsRIConfirmedBalance"));
var _GetWalletAssetDetailsRIFungibleTokensInner = _interopRequireDefault(require("./GetWalletAssetDetailsRIFungibleTokensInner"));
var _GetWalletAssetDetailsRINonFungibleTokensInner = _interopRequireDefault(require("./GetWalletAssetDetailsRINonFungibleTokensInner"));
var _GetWalletAssetDetailsRIRecievedConfirmedAmount = _interopRequireDefault(require("./GetWalletAssetDetailsRIRecievedConfirmedAmount"));
var _GetWalletAssetDetailsRISentConfirmedAmount = _interopRequireDefault(require("./GetWalletAssetDetailsRISentConfirmedAmount"));
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
 * The GetWalletAssetDetailsRI model module.
 * @module model/GetWalletAssetDetailsRI
 * @version 1.11.0
 */
var GetWalletAssetDetailsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletAssetDetailsRI</code>.
   * @alias module:model/GetWalletAssetDetailsRI
   * @param confirmedBalance {module:model/GetWalletAssetDetailsRIConfirmedBalance} 
   * @param depositAddressesCount {Number} Specifies the count of deposit addresses in the Wallet.
   * @param fungibleTokens {Array.<module:model/GetWalletAssetDetailsRIFungibleTokensInner>} Represents fungible tokens'es detailed information
   * @param name {String} Defines the name of the Wallet given to it by the user.
   * @param nonFungibleTokens {Array.<module:model/GetWalletAssetDetailsRINonFungibleTokensInner>} Represents non-fungible tokens'es detailed information.
   * @param recievedConfirmedAmount {module:model/GetWalletAssetDetailsRIRecievedConfirmedAmount} 
   * @param sentConfirmedAmount {module:model/GetWalletAssetDetailsRISentConfirmedAmount} 
   */
  function GetWalletAssetDetailsRI(confirmedBalance, depositAddressesCount, fungibleTokens, name, nonFungibleTokens, recievedConfirmedAmount, sentConfirmedAmount) {
    _classCallCheck(this, GetWalletAssetDetailsRI);
    GetWalletAssetDetailsRI.initialize(this, confirmedBalance, depositAddressesCount, fungibleTokens, name, nonFungibleTokens, recievedConfirmedAmount, sentConfirmedAmount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetWalletAssetDetailsRI, null, [{
    key: "initialize",
    value: function initialize(obj, confirmedBalance, depositAddressesCount, fungibleTokens, name, nonFungibleTokens, recievedConfirmedAmount, sentConfirmedAmount) {
      obj['confirmedBalance'] = confirmedBalance;
      obj['depositAddressesCount'] = depositAddressesCount;
      obj['fungibleTokens'] = fungibleTokens;
      obj['name'] = name;
      obj['nonFungibleTokens'] = nonFungibleTokens;
      obj['recievedConfirmedAmount'] = recievedConfirmedAmount;
      obj['sentConfirmedAmount'] = sentConfirmedAmount;
    }

    /**
     * Constructs a <code>GetWalletAssetDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletAssetDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetWalletAssetDetailsRI} The populated <code>GetWalletAssetDetailsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletAssetDetailsRI();
        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _GetWalletAssetDetailsRIConfirmedBalance["default"].constructFromObject(data['confirmedBalance']);
        }
        if (data.hasOwnProperty('depositAddressesCount')) {
          obj['depositAddressesCount'] = _ApiClient["default"].convertToType(data['depositAddressesCount'], 'Number');
        }
        if (data.hasOwnProperty('fungibleTokens')) {
          obj['fungibleTokens'] = _ApiClient["default"].convertToType(data['fungibleTokens'], [_GetWalletAssetDetailsRIFungibleTokensInner["default"]]);
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('nonFungibleTokens')) {
          obj['nonFungibleTokens'] = _ApiClient["default"].convertToType(data['nonFungibleTokens'], [_GetWalletAssetDetailsRINonFungibleTokensInner["default"]]);
        }
        if (data.hasOwnProperty('recievedConfirmedAmount')) {
          obj['recievedConfirmedAmount'] = _GetWalletAssetDetailsRIRecievedConfirmedAmount["default"].constructFromObject(data['recievedConfirmedAmount']);
        }
        if (data.hasOwnProperty('sentConfirmedAmount')) {
          obj['sentConfirmedAmount'] = _GetWalletAssetDetailsRISentConfirmedAmount["default"].constructFromObject(data['sentConfirmedAmount']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetWalletAssetDetailsRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetWalletAssetDetailsRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetWalletAssetDetailsRI.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `confirmedBalance`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['confirmedBalance']) {
        // data not null
        _GetWalletAssetDetailsRIConfirmedBalance["default"].validateJSON(data['confirmedBalance']);
      }
      if (data['fungibleTokens']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['fungibleTokens'])) {
          throw new Error("Expected the field `fungibleTokens` to be an array in the JSON data but got " + data['fungibleTokens']);
        }
        // validate the optional field `fungibleTokens` (array)
        var _iterator2 = _createForOfIteratorHelper(data['fungibleTokens']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _GetWalletAssetDetailsRIFungibleTokensInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      if (data['nonFungibleTokens']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['nonFungibleTokens'])) {
          throw new Error("Expected the field `nonFungibleTokens` to be an array in the JSON data but got " + data['nonFungibleTokens']);
        }
        // validate the optional field `nonFungibleTokens` (array)
        var _iterator3 = _createForOfIteratorHelper(data['nonFungibleTokens']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _GetWalletAssetDetailsRINonFungibleTokensInner["default"].validateJsonObject(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      // validate the optional field `recievedConfirmedAmount`
      if (data['recievedConfirmedAmount']) {
        // data not null
        _GetWalletAssetDetailsRIRecievedConfirmedAmount["default"].validateJSON(data['recievedConfirmedAmount']);
      }
      // validate the optional field `sentConfirmedAmount`
      if (data['sentConfirmedAmount']) {
        // data not null
        _GetWalletAssetDetailsRISentConfirmedAmount["default"].validateJSON(data['sentConfirmedAmount']);
      }
      return true;
    }
  }]);
  return GetWalletAssetDetailsRI;
}();
GetWalletAssetDetailsRI.RequiredProperties = ["confirmedBalance", "depositAddressesCount", "fungibleTokens", "name", "nonFungibleTokens", "recievedConfirmedAmount", "sentConfirmedAmount"];

/**
 * @member {module:model/GetWalletAssetDetailsRIConfirmedBalance} confirmedBalance
 */
GetWalletAssetDetailsRI.prototype['confirmedBalance'] = undefined;

/**
 * Specifies the count of deposit addresses in the Wallet.
 * @member {Number} depositAddressesCount
 */
GetWalletAssetDetailsRI.prototype['depositAddressesCount'] = undefined;

/**
 * Represents fungible tokens'es detailed information
 * @member {Array.<module:model/GetWalletAssetDetailsRIFungibleTokensInner>} fungibleTokens
 */
GetWalletAssetDetailsRI.prototype['fungibleTokens'] = undefined;

/**
 * Defines the name of the Wallet given to it by the user.
 * @member {String} name
 */
GetWalletAssetDetailsRI.prototype['name'] = undefined;

/**
 * Represents non-fungible tokens'es detailed information.
 * @member {Array.<module:model/GetWalletAssetDetailsRINonFungibleTokensInner>} nonFungibleTokens
 */
GetWalletAssetDetailsRI.prototype['nonFungibleTokens'] = undefined;

/**
 * @member {module:model/GetWalletAssetDetailsRIRecievedConfirmedAmount} recievedConfirmedAmount
 */
GetWalletAssetDetailsRI.prototype['recievedConfirmedAmount'] = undefined;

/**
 * @member {module:model/GetWalletAssetDetailsRISentConfirmedAmount} sentConfirmedAmount
 */
GetWalletAssetDetailsRI.prototype['sentConfirmedAmount'] = undefined;
var _default = GetWalletAssetDetailsRI;
exports["default"] = _default;