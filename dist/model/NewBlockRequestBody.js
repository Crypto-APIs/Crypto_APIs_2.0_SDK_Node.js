"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NewBlockRequestBodyData = _interopRequireDefault(require("./NewBlockRequestBodyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewBlockRequestBody model module.
 * @module model/NewBlockRequestBody
 * @version 2.0.0
 */
var NewBlockRequestBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewBlockRequestBody</code>.
   * @alias module:model/NewBlockRequestBody
   * @param data {module:model/NewBlockRequestBodyData} 
   */
  function NewBlockRequestBody(data) {
    _classCallCheck(this, NewBlockRequestBody);

    NewBlockRequestBody.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewBlockRequestBody, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>NewBlockRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewBlockRequestBody} obj Optional instance to populate.
     * @return {module:model/NewBlockRequestBody} The populated <code>NewBlockRequestBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewBlockRequestBody();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _NewBlockRequestBodyData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return NewBlockRequestBody;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */


NewBlockRequestBody.prototype['context'] = undefined;
/**
 * @member {module:model/NewBlockRequestBodyData} data
 */

NewBlockRequestBody.prototype['data'] = undefined;
var _default = NewBlockRequestBody;
exports["default"] = _default;