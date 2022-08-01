"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDFromCallbackRIBSLVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSLVoutInner"));

var _GetTransactionDetailsByTransactionIDRIBSLVinInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSLVinInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSL model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL
 * @version 1.7.2
 */
var GetTransactionDetailsByTransactionIDFromCallbackRIBSL = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSL</code>.
   * Litecoin
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSLVoutInner>} Represents the transaction outputs.
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRIBSL(locktime, size, vSize, version, vin, vout) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRIBSL);

    GetTransactionDetailsByTransactionIDFromCallbackRIBSL.initialize(this, locktime, size, vSize, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRIBSL, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['vSize'] = vSize;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSL</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSL();

        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('vSize')) {
          obj['vSize'] = _ApiClient["default"].convertToType(data['vSize'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_GetTransactionDetailsByTransactionIDRIBSLVinInner["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDFromCallbackRIBSLVoutInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetTransactionDetailsByTransactionIDFromCallbackRIBSL;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


GetTransactionDetailsByTransactionIDFromCallbackRIBSL.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSL.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSL.prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSL.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVinInner>} vin
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSL.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSLVoutInner>} vout
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSL.prototype['vout'] = undefined;
var _default = GetTransactionDetailsByTransactionIDFromCallbackRIBSL;
exports["default"] = _default;