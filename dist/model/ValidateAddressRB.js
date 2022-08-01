"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ValidateAddressRBData = _interopRequireDefault(require("./ValidateAddressRBData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ValidateAddressRB model module.
 * @module model/ValidateAddressRB
 * @version 1.7.2
 */
var ValidateAddressRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidateAddressRB</code>.
   * @alias module:model/ValidateAddressRB
   * @param data {module:model/ValidateAddressRBData} 
   */
  function ValidateAddressRB(data) {
    _classCallCheck(this, ValidateAddressRB);

    ValidateAddressRB.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidateAddressRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>ValidateAddressRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateAddressRB} obj Optional instance to populate.
     * @return {module:model/ValidateAddressRB} The populated <code>ValidateAddressRB</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidateAddressRB();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ValidateAddressRBData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return ValidateAddressRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */


ValidateAddressRB.prototype['context'] = undefined;
/**
 * @member {module:model/ValidateAddressRBData} data
 */

ValidateAddressRB.prototype['data'] = undefined;
var _default = ValidateAddressRB;
exports["default"] = _default;