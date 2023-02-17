"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListUnconfirmedTransactionsByAddressRIBSD2VinInner = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSD2VinInner"));
var _ListUnconfirmedTransactionsByAddressRIBSD2VoutInner = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSD2VoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListUnconfirmedTransactionsByAddressRIBSD2 model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSD2
 * @version 1.13.0
 */
var ListUnconfirmedTransactionsByAddressRIBSD2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSD2</code>.
   * Dash
   * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSD2
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Represents the transaction's version number.
   * @param vin {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSD2VinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSD2VoutInner>} Represents the transaction outputs.
   */
  function ListUnconfirmedTransactionsByAddressRIBSD2(locktime, size, version, vin, vout) {
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRIBSD2);
    ListUnconfirmedTransactionsByAddressRIBSD2.initialize(this, locktime, size, version, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListUnconfirmedTransactionsByAddressRIBSD2, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSD2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSD2} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSD2} The populated <code>ListUnconfirmedTransactionsByAddressRIBSD2</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedTransactionsByAddressRIBSD2();
        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListUnconfirmedTransactionsByAddressRIBSD2VinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListUnconfirmedTransactionsByAddressRIBSD2VoutInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return ListUnconfirmedTransactionsByAddressRIBSD2;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListUnconfirmedTransactionsByAddressRIBSD2.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListUnconfirmedTransactionsByAddressRIBSD2.prototype['size'] = undefined;

/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
ListUnconfirmedTransactionsByAddressRIBSD2.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSD2VinInner>} vin
 */
ListUnconfirmedTransactionsByAddressRIBSD2.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSD2VoutInner>} vout
 */
ListUnconfirmedTransactionsByAddressRIBSD2.prototype['vout'] = undefined;
var _default = ListUnconfirmedTransactionsByAddressRIBSD2;
exports["default"] = _default;