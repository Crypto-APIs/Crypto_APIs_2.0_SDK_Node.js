"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateTokensTransactionRequestFromAddressRIRecipients = _interopRequireDefault(require("./CreateTokensTransactionRequestFromAddressRIRecipients"));

var _CreateTokensTransactionRequestFromAddressRISenders = _interopRequireDefault(require("./CreateTokensTransactionRequestFromAddressRISenders"));

var _CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData = _interopRequireDefault(require("./CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTokensTransactionRequestFromAddressRI model module.
 * @module model/CreateTokensTransactionRequestFromAddressRI
 * @version 1.1.0
 */
var CreateTokensTransactionRequestFromAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTokensTransactionRequestFromAddressRI</code>.
   * @alias module:model/CreateTokensTransactionRequestFromAddressRI
   * @param feePriority {module:model/CreateTokensTransactionRequestFromAddressRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   * @param recipients {Array.<module:model/CreateTokensTransactionRequestFromAddressRIRecipients>} Defines the destination for the transaction, i.e. the recipient(s).
   * @param senders {module:model/CreateTokensTransactionRequestFromAddressRISenders} 
   * @param tokenTypeSpecificData {module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData} 
   */
  function CreateTokensTransactionRequestFromAddressRI(feePriority, recipients, senders, tokenTypeSpecificData) {
    _classCallCheck(this, CreateTokensTransactionRequestFromAddressRI);

    CreateTokensTransactionRequestFromAddressRI.initialize(this, feePriority, recipients, senders, tokenTypeSpecificData);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTokensTransactionRequestFromAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, feePriority, recipients, senders, tokenTypeSpecificData) {
      obj['feePriority'] = feePriority;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['tokenTypeSpecificData'] = tokenTypeSpecificData;
    }
    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRI} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRI} The populated <code>CreateTokensTransactionRequestFromAddressRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTokensTransactionRequestFromAddressRI();

        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_CreateTokensTransactionRequestFromAddressRIRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _CreateTokensTransactionRequestFromAddressRISenders["default"].constructFromObject(data['senders']);
        }

        if (data.hasOwnProperty('tokenTypeSpecificData')) {
          obj['tokenTypeSpecificData'] = _CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData["default"].constructFromObject(data['tokenTypeSpecificData']);
        }
      }

      return obj;
    }
  }]);

  return CreateTokensTransactionRequestFromAddressRI;
}();
/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateTokensTransactionRequestFromAddressRI.FeePriorityEnum} feePriority
 */


CreateTokensTransactionRequestFromAddressRI.prototype['feePriority'] = undefined;
/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateTokensTransactionRequestFromAddressRIRecipients>} recipients
 */

CreateTokensTransactionRequestFromAddressRI.prototype['recipients'] = undefined;
/**
 * @member {module:model/CreateTokensTransactionRequestFromAddressRISenders} senders
 */

CreateTokensTransactionRequestFromAddressRI.prototype['senders'] = undefined;
/**
 * @member {module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData} tokenTypeSpecificData
 */

CreateTokensTransactionRequestFromAddressRI.prototype['tokenTypeSpecificData'] = undefined;
/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */

CreateTokensTransactionRequestFromAddressRI['FeePriorityEnum'] = {
  /**
   * value: "slow"
   * @const
   */
  "slow": "slow",

  /**
   * value: "standard"
   * @const
   */
  "standard": "standard",

  /**
   * value: "fast"
   * @const
   */
  "fast": "fast"
};
var _default = CreateTokensTransactionRequestFromAddressRI;
exports["default"] = _default;