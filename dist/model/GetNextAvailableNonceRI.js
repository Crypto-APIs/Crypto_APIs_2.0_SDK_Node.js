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
 * The GetNextAvailableNonceRI model module.
 * @module model/GetNextAvailableNonceRI
 * @version 1.7.2
 */
var GetNextAvailableNonceRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetNextAvailableNonceRI</code>.
   * @alias module:model/GetNextAvailableNonceRI
   * @param nextAvailableNonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   */
  function GetNextAvailableNonceRI(nextAvailableNonce) {
    _classCallCheck(this, GetNextAvailableNonceRI);

    GetNextAvailableNonceRI.initialize(this, nextAvailableNonce);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetNextAvailableNonceRI, null, [{
    key: "initialize",
    value: function initialize(obj, nextAvailableNonce) {
      obj['nextAvailableNonce'] = nextAvailableNonce;
    }
    /**
     * Constructs a <code>GetNextAvailableNonceRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetNextAvailableNonceRI} obj Optional instance to populate.
     * @return {module:model/GetNextAvailableNonceRI} The populated <code>GetNextAvailableNonceRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetNextAvailableNonceRI();

        if (data.hasOwnProperty('nextAvailableNonce')) {
          obj['nextAvailableNonce'] = _ApiClient["default"].convertToType(data['nextAvailableNonce'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetNextAvailableNonceRI;
}();
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nextAvailableNonce
 */


GetNextAvailableNonceRI.prototype['nextAvailableNonce'] = undefined;
var _default = GetNextAvailableNonceRI;
exports["default"] = _default;