"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _NewConfirmedTokensTransactionsAndEachConfirmationRBData = _interopRequireDefault(require("./NewConfirmedTokensTransactionsAndEachConfirmationRBData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The NewConfirmedTokensTransactionsAndEachConfirmationRB model module.
 * @module model/NewConfirmedTokensTransactionsAndEachConfirmationRB
 * @version 1.13.0
 */
var NewConfirmedTokensTransactionsAndEachConfirmationRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedTokensTransactionsAndEachConfirmationRB</code>.
   * @alias module:model/NewConfirmedTokensTransactionsAndEachConfirmationRB
   * @param data {module:model/NewConfirmedTokensTransactionsAndEachConfirmationRBData} 
   */
  function NewConfirmedTokensTransactionsAndEachConfirmationRB(data) {
    _classCallCheck(this, NewConfirmedTokensTransactionsAndEachConfirmationRB);
    NewConfirmedTokensTransactionsAndEachConfirmationRB.initialize(this, data);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(NewConfirmedTokensTransactionsAndEachConfirmationRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }

    /**
     * Constructs a <code>NewConfirmedTokensTransactionsAndEachConfirmationRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedTokensTransactionsAndEachConfirmationRB} obj Optional instance to populate.
     * @return {module:model/NewConfirmedTokensTransactionsAndEachConfirmationRB} The populated <code>NewConfirmedTokensTransactionsAndEachConfirmationRB</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedTokensTransactionsAndEachConfirmationRB();
        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }
        if (data.hasOwnProperty('data')) {
          obj['data'] = _NewConfirmedTokensTransactionsAndEachConfirmationRBData["default"].constructFromObject(data['data']);
        }
      }
      return obj;
    }
  }]);
  return NewConfirmedTokensTransactionsAndEachConfirmationRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
NewConfirmedTokensTransactionsAndEachConfirmationRB.prototype['context'] = undefined;

/**
 * @member {module:model/NewConfirmedTokensTransactionsAndEachConfirmationRBData} data
 */
NewConfirmedTokensTransactionsAndEachConfirmationRB.prototype['data'] = undefined;
var _default = NewConfirmedTokensTransactionsAndEachConfirmationRB;
exports["default"] = _default;