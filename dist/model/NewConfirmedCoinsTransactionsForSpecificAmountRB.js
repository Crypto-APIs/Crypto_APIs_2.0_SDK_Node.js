"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _NewConfirmedCoinsTransactionsForSpecificAmountRBData = _interopRequireDefault(require("./NewConfirmedCoinsTransactionsForSpecificAmountRBData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The NewConfirmedCoinsTransactionsForSpecificAmountRB model module.
 * @module model/NewConfirmedCoinsTransactionsForSpecificAmountRB
 * @version 1.12.0
 */
var NewConfirmedCoinsTransactionsForSpecificAmountRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedCoinsTransactionsForSpecificAmountRB</code>.
   * @alias module:model/NewConfirmedCoinsTransactionsForSpecificAmountRB
   * @param data {module:model/NewConfirmedCoinsTransactionsForSpecificAmountRBData} 
   */
  function NewConfirmedCoinsTransactionsForSpecificAmountRB(data) {
    _classCallCheck(this, NewConfirmedCoinsTransactionsForSpecificAmountRB);
    NewConfirmedCoinsTransactionsForSpecificAmountRB.initialize(this, data);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(NewConfirmedCoinsTransactionsForSpecificAmountRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }

    /**
     * Constructs a <code>NewConfirmedCoinsTransactionsForSpecificAmountRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedCoinsTransactionsForSpecificAmountRB} obj Optional instance to populate.
     * @return {module:model/NewConfirmedCoinsTransactionsForSpecificAmountRB} The populated <code>NewConfirmedCoinsTransactionsForSpecificAmountRB</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedCoinsTransactionsForSpecificAmountRB();
        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }
        if (data.hasOwnProperty('data')) {
          obj['data'] = _NewConfirmedCoinsTransactionsForSpecificAmountRBData["default"].constructFromObject(data['data']);
        }
      }
      return obj;
    }
  }]);
  return NewConfirmedCoinsTransactionsForSpecificAmountRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */
NewConfirmedCoinsTransactionsForSpecificAmountRB.prototype['context'] = undefined;

/**
 * @member {module:model/NewConfirmedCoinsTransactionsForSpecificAmountRBData} data
 */
NewConfirmedCoinsTransactionsForSpecificAmountRB.prototype['data'] = undefined;
var _default = NewConfirmedCoinsTransactionsForSpecificAmountRB;
exports["default"] = _default;