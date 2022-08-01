"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSDVinInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSDVinInner"));

var _GetTransactionDetailsByTransactionIDRIBSDVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSDVoutInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetTransactionDetailsByTransactionIDRIBSD model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSD
 * @version 1.7.2
 */
var GetTransactionDetailsByTransactionIDRIBSD = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSD</code>.
   * Dogecoin
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBSD
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} Represents the transaction outputs.
   */
  function GetTransactionDetailsByTransactionIDRIBSD(locktime, size, version, vin, vout) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBSD);

    GetTransactionDetailsByTransactionIDRIBSD.initialize(this, locktime, size, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDRIBSD, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSD} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSD} The populated <code>GetTransactionDetailsByTransactionIDRIBSD</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBSD();

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_GetTransactionDetailsByTransactionIDRIBSDVinInner["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDRIBSDVoutInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetTransactionDetailsByTransactionIDRIBSD;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


GetTransactionDetailsByTransactionIDRIBSD.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

GetTransactionDetailsByTransactionIDRIBSD.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

GetTransactionDetailsByTransactionIDRIBSD.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVinInner>} vin
 */

GetTransactionDetailsByTransactionIDRIBSD.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} vout
 */

GetTransactionDetailsByTransactionIDRIBSD.prototype['vout'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRIBSD;
exports["default"] = _default;