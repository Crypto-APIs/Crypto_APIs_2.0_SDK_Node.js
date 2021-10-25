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
 * The GenerateAddressRIAddresses model module.
 * @module model/GenerateAddressRIAddresses
 * @version 1.3.0
 */
var GenerateAddressRIAddresses = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateAddressRIAddresses</code>.
   * @alias module:model/GenerateAddressRIAddresses
   * @param address {String} Represents the specific address that will be generated.
   * @param format {String} Defines the form of transaction that is used. Keep in mind that we support more than one type of formats for example: p2pkh p2sh p2wpkh etc. and they are generated simultaneously in the response of the Generate Address endpoint, depending on the blockchain and network that has been chosen. For more information about supported formats - please check \"What we support\" section
   */
  function GenerateAddressRIAddresses(address, format) {
    _classCallCheck(this, GenerateAddressRIAddresses);

    GenerateAddressRIAddresses.initialize(this, address, format);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GenerateAddressRIAddresses, null, [{
    key: "initialize",
    value: function initialize(obj, address, format) {
      obj['address'] = address;
      obj['format'] = format;
    }
    /**
     * Constructs a <code>GenerateAddressRIAddresses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateAddressRIAddresses} obj Optional instance to populate.
     * @return {module:model/GenerateAddressRIAddresses} The populated <code>GenerateAddressRIAddresses</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateAddressRIAddresses();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GenerateAddressRIAddresses;
}();
/**
 * Represents the specific address that will be generated.
 * @member {String} address
 */


GenerateAddressRIAddresses.prototype['address'] = undefined;
/**
 * Defines the form of transaction that is used. Keep in mind that we support more than one type of formats for example: p2pkh p2sh p2wpkh etc. and they are generated simultaneously in the response of the Generate Address endpoint, depending on the blockchain and network that has been chosen. For more information about supported formats - please check \"What we support\" section
 * @member {String} format
 */

GenerateAddressRIAddresses.prototype['format'] = undefined;
var _default = GenerateAddressRIAddresses;
exports["default"] = _default;