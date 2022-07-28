"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrepareAUTXOBasedTransactionFromXPubRBData = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromXPubRBData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PrepareAUTXOBasedTransactionFromXPubRB model module.
 * @module model/PrepareAUTXOBasedTransactionFromXPubRB
 * @version 1.7.0
 */
var PrepareAUTXOBasedTransactionFromXPubRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromXPubRB</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromXPubRB
   * @param data {module:model/PrepareAUTXOBasedTransactionFromXPubRBData} 
   */
  function PrepareAUTXOBasedTransactionFromXPubRB(data) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromXPubRB);

    PrepareAUTXOBasedTransactionFromXPubRB.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAUTXOBasedTransactionFromXPubRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromXPubRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromXPubRB} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromXPubRB} The populated <code>PrepareAUTXOBasedTransactionFromXPubRB</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromXPubRB();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _PrepareAUTXOBasedTransactionFromXPubRBData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return PrepareAUTXOBasedTransactionFromXPubRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */


PrepareAUTXOBasedTransactionFromXPubRB.prototype['context'] = undefined;
/**
 * @member {module:model/PrepareAUTXOBasedTransactionFromXPubRBData} data
 */

PrepareAUTXOBasedTransactionFromXPubRB.prototype['data'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromXPubRB;
exports["default"] = _default;