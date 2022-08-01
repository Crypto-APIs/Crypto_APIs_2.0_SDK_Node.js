"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NewConfirmedCoinsTransactionsAndEachConfirmationRBData = _interopRequireDefault(require("./NewConfirmedCoinsTransactionsAndEachConfirmationRBData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The NewConfirmedCoinsTransactionsAndEachConfirmationRB model module.
 * @module model/NewConfirmedCoinsTransactionsAndEachConfirmationRB
 * @version 1.7.2
 */
var NewConfirmedCoinsTransactionsAndEachConfirmationRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedCoinsTransactionsAndEachConfirmationRB</code>.
   * @alias module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRB
   * @param data {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRBData} 
   */
  function NewConfirmedCoinsTransactionsAndEachConfirmationRB(data) {
    _classCallCheck(this, NewConfirmedCoinsTransactionsAndEachConfirmationRB);

    NewConfirmedCoinsTransactionsAndEachConfirmationRB.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedCoinsTransactionsAndEachConfirmationRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>NewConfirmedCoinsTransactionsAndEachConfirmationRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRB} obj Optional instance to populate.
     * @return {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRB} The populated <code>NewConfirmedCoinsTransactionsAndEachConfirmationRB</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedCoinsTransactionsAndEachConfirmationRB();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _NewConfirmedCoinsTransactionsAndEachConfirmationRBData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedCoinsTransactionsAndEachConfirmationRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */


NewConfirmedCoinsTransactionsAndEachConfirmationRB.prototype['context'] = undefined;
/**
 * @member {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRBData} data
 */

NewConfirmedCoinsTransactionsAndEachConfirmationRB.prototype['data'] = undefined;
var _default = NewConfirmedCoinsTransactionsAndEachConfirmationRB;
exports["default"] = _default;