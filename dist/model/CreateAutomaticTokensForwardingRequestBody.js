"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticTokensForwardingRequestBodyData = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRequestBodyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAutomaticTokensForwardingRequestBody model module.
 * @module model/CreateAutomaticTokensForwardingRequestBody
 * @version 2.0.0
 */
var CreateAutomaticTokensForwardingRequestBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingRequestBody</code>.
   * @alias module:model/CreateAutomaticTokensForwardingRequestBody
   * @param data {module:model/CreateAutomaticTokensForwardingRequestBodyData} 
   */
  function CreateAutomaticTokensForwardingRequestBody(data) {
    _classCallCheck(this, CreateAutomaticTokensForwardingRequestBody);

    CreateAutomaticTokensForwardingRequestBody.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingRequestBody, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRequestBody} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRequestBody} The populated <code>CreateAutomaticTokensForwardingRequestBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingRequestBody();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _CreateAutomaticTokensForwardingRequestBodyData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return CreateAutomaticTokensForwardingRequestBody;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */


CreateAutomaticTokensForwardingRequestBody.prototype['context'] = undefined;
/**
 * @member {module:model/CreateAutomaticTokensForwardingRequestBodyData} data
 */

CreateAutomaticTokensForwardingRequestBody.prototype['data'] = undefined;
var _default = CreateAutomaticTokensForwardingRequestBody;
exports["default"] = _default;