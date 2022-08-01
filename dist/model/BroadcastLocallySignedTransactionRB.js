"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BroadcastLocallySignedTransactionRBData = _interopRequireDefault(require("./BroadcastLocallySignedTransactionRBData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The BroadcastLocallySignedTransactionRB model module.
 * @module model/BroadcastLocallySignedTransactionRB
 * @version 1.7.2
 */
var BroadcastLocallySignedTransactionRB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BroadcastLocallySignedTransactionRB</code>.
   * @alias module:model/BroadcastLocallySignedTransactionRB
   * @param data {module:model/BroadcastLocallySignedTransactionRBData} 
   */
  function BroadcastLocallySignedTransactionRB(data) {
    _classCallCheck(this, BroadcastLocallySignedTransactionRB);

    BroadcastLocallySignedTransactionRB.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BroadcastLocallySignedTransactionRB, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>BroadcastLocallySignedTransactionRB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BroadcastLocallySignedTransactionRB} obj Optional instance to populate.
     * @return {module:model/BroadcastLocallySignedTransactionRB} The populated <code>BroadcastLocallySignedTransactionRB</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BroadcastLocallySignedTransactionRB();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _BroadcastLocallySignedTransactionRBData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return BroadcastLocallySignedTransactionRB;
}();
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */


BroadcastLocallySignedTransactionRB.prototype['context'] = undefined;
/**
 * @member {module:model/BroadcastLocallySignedTransactionRBData} data
 */

BroadcastLocallySignedTransactionRB.prototype['data'] = undefined;
var _default = BroadcastLocallySignedTransactionRB;
exports["default"] = _default;