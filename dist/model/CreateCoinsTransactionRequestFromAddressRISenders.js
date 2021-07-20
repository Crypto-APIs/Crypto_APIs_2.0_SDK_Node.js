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
 * The CreateCoinsTransactionRequestFromAddressRISenders model module.
 * @module model/CreateCoinsTransactionRequestFromAddressRISenders
 * @version 1.1.0
 */
var CreateCoinsTransactionRequestFromAddressRISenders = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromAddressRISenders</code>.
   * Defines details about the source, i.e. the sender.
   * @alias module:model/CreateCoinsTransactionRequestFromAddressRISenders
   * @param address {String} Defines the sender's public address.
   */
  function CreateCoinsTransactionRequestFromAddressRISenders(address) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromAddressRISenders);

    CreateCoinsTransactionRequestFromAddressRISenders.initialize(this, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionRequestFromAddressRISenders, null, [{
    key: "initialize",
    value: function initialize(obj, address) {
      obj['address'] = address;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromAddressRISenders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromAddressRISenders} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromAddressRISenders} The populated <code>CreateCoinsTransactionRequestFromAddressRISenders</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromAddressRISenders();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateCoinsTransactionRequestFromAddressRISenders;
}();
/**
 * Defines the sender's public address.
 * @member {String} address
 */


CreateCoinsTransactionRequestFromAddressRISenders.prototype['address'] = undefined;
var _default = CreateCoinsTransactionRequestFromAddressRISenders;
exports["default"] = _default;