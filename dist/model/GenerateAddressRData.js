"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GenerateAddressRI = _interopRequireDefault(require("./GenerateAddressRI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GenerateAddressRData model module.
 * @module model/GenerateAddressRData
 * @version 1.3.0
 */
var GenerateAddressRData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateAddressRData</code>.
   * @alias module:model/GenerateAddressRData
   * @param item {module:model/GenerateAddressRI} 
   */
  function GenerateAddressRData(item) {
    _classCallCheck(this, GenerateAddressRData);

    GenerateAddressRData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GenerateAddressRData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>GenerateAddressRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateAddressRData} obj Optional instance to populate.
     * @return {module:model/GenerateAddressRData} The populated <code>GenerateAddressRData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateAddressRData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _GenerateAddressRI["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return GenerateAddressRData;
}();
/**
 * @member {module:model/GenerateAddressRI} item
 */


GenerateAddressRData.prototype['item'] = undefined;
var _default = GenerateAddressRData;
exports["default"] = _default;