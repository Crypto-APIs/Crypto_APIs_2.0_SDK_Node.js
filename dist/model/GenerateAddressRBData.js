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
 * The GenerateAddressRBData model module.
 * @module model/GenerateAddressRBData
 * @version 1.3.0
 */
var GenerateAddressRBData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateAddressRBData</code>.
   * @alias module:model/GenerateAddressRBData
   * @param item {Object} 
   */
  function GenerateAddressRBData(item) {
    _classCallCheck(this, GenerateAddressRBData);

    GenerateAddressRBData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GenerateAddressRBData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GenerateAddressRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateAddressRBData} obj Optional instance to populate.
     * @return {module:model/GenerateAddressRBData} The populated <code>GenerateAddressRBData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateAddressRBData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _ApiClient["default"].convertToType(data['item'], Object);
        }
      }

      return obj;
    }
  }]);

  return GenerateAddressRBData;
}();
/**
 * @member {Object} item
 */


GenerateAddressRBData.prototype['item'] = undefined;
var _default = GenerateAddressRBData;
exports["default"] = _default;