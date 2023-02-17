"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionRequestDetailsRIRecipientsInner = _interopRequireDefault(require("./GetTransactionRequestDetailsRIRecipientsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetTransactionRequestDetailsRI model module.
 * @module model/GetTransactionRequestDetailsRI
 * @version 1.13.0
 */
var GetTransactionRequestDetailsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionRequestDetailsRI</code>.
   * @alias module:model/GetTransactionRequestDetailsRI
   * @param additionalDetails {String} Defines an optional note for additional details.
   * @param blockchain {module:model/GetTransactionRequestDetailsRI.BlockchainEnum} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param feePriority {module:model/GetTransactionRequestDetailsRI.FeePriorityEnum} Defines the priority for the fee, if it is \"slow\", \"standard\" or \"fast\".
   * @param network {module:model/GetTransactionRequestDetailsRI.NetworkEnum} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param recipients {Array.<module:model/GetTransactionRequestDetailsRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param totalTransactionAmount {String} Defines the total transaction amount.
   * @param transactionRequestStatus {module:model/GetTransactionRequestDetailsRI.TransactionRequestStatusEnum} Defines the status of the transaction request, e.g. pending.
   * @param transactionType {module:model/GetTransactionRequestDetailsRI.TransactionTypeEnum} Defines the transaction type, if it is for coins or tokens.
   * @param unit {String} Defines the unit of the amount.
   * @param walletId {String} Defines the unique ID of the Wallet.
   */
  function GetTransactionRequestDetailsRI(additionalDetails, blockchain, feePriority, network, recipients, totalTransactionAmount, transactionRequestStatus, transactionType, unit, walletId) {
    _classCallCheck(this, GetTransactionRequestDetailsRI);
    GetTransactionRequestDetailsRI.initialize(this, additionalDetails, blockchain, feePriority, network, recipients, totalTransactionAmount, transactionRequestStatus, transactionType, unit, walletId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionRequestDetailsRI, null, [{
    key: "initialize",
    value: function initialize(obj, additionalDetails, blockchain, feePriority, network, recipients, totalTransactionAmount, transactionRequestStatus, transactionType, unit, walletId) {
      obj['additionalDetails'] = additionalDetails;
      obj['blockchain'] = blockchain;
      obj['feePriority'] = feePriority;
      obj['network'] = network;
      obj['recipients'] = recipients;
      obj['totalTransactionAmount'] = totalTransactionAmount;
      obj['transactionRequestStatus'] = transactionRequestStatus;
      obj['transactionType'] = transactionType;
      obj['unit'] = unit;
      obj['walletId'] = walletId;
    }

    /**
     * Constructs a <code>GetTransactionRequestDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionRequestDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetTransactionRequestDetailsRI} The populated <code>GetTransactionRequestDetailsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionRequestDetailsRI();
        if (data.hasOwnProperty('additionalDetails')) {
          obj['additionalDetails'] = _ApiClient["default"].convertToType(data['additionalDetails'], 'String');
        }
        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }
        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }
        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_GetTransactionRequestDetailsRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('totalTransactionAmount')) {
          obj['totalTransactionAmount'] = _ApiClient["default"].convertToType(data['totalTransactionAmount'], 'String');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
        if (data.hasOwnProperty('transactionRequestStatus')) {
          obj['transactionRequestStatus'] = _ApiClient["default"].convertToType(data['transactionRequestStatus'], 'String');
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('walletId')) {
          obj['walletId'] = _ApiClient["default"].convertToType(data['walletId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetTransactionRequestDetailsRI;
}();
/**
 * Defines an optional note for additional details.
 * @member {String} additionalDetails
 */
GetTransactionRequestDetailsRI.prototype['additionalDetails'] = undefined;

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {module:model/GetTransactionRequestDetailsRI.BlockchainEnum} blockchain
 */
GetTransactionRequestDetailsRI.prototype['blockchain'] = undefined;

/**
 * Defines the priority for the fee, if it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/GetTransactionRequestDetailsRI.FeePriorityEnum} feePriority
 */
GetTransactionRequestDetailsRI.prototype['feePriority'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
 * @member {module:model/GetTransactionRequestDetailsRI.NetworkEnum} network
 */
GetTransactionRequestDetailsRI.prototype['network'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionRequestDetailsRIRecipientsInner>} recipients
 */
GetTransactionRequestDetailsRI.prototype['recipients'] = undefined;

/**
 * Defines the total transaction amount.
 * @member {String} totalTransactionAmount
 */
GetTransactionRequestDetailsRI.prototype['totalTransactionAmount'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
 * @member {String} transactionId
 */
GetTransactionRequestDetailsRI.prototype['transactionId'] = undefined;

/**
 * Defines the status of the transaction request, e.g. pending.
 * @member {module:model/GetTransactionRequestDetailsRI.TransactionRequestStatusEnum} transactionRequestStatus
 */
GetTransactionRequestDetailsRI.prototype['transactionRequestStatus'] = undefined;

/**
 * Defines the transaction type, if it is for coins or tokens.
 * @member {module:model/GetTransactionRequestDetailsRI.TransactionTypeEnum} transactionType
 */
GetTransactionRequestDetailsRI.prototype['transactionType'] = undefined;

/**
 * Defines the unit of the amount.
 * @member {String} unit
 */
GetTransactionRequestDetailsRI.prototype['unit'] = undefined;

/**
 * Defines the unique ID of the Wallet.
 * @member {String} walletId
 */
GetTransactionRequestDetailsRI.prototype['walletId'] = undefined;

/**
 * Allowed values for the <code>blockchain</code> property.
 * @enum {String}
 * @readonly
 */
GetTransactionRequestDetailsRI['BlockchainEnum'] = {
  /**
   * value: "bitcoin"
   * @const
   */
  "bitcoin": "bitcoin",
  /**
   * value: "bitcoin-cash"
   * @const
   */
  "bitcoin-cash": "bitcoin-cash",
  /**
   * value: "litecoin"
   * @const
   */
  "litecoin": "litecoin",
  /**
   * value: "dogecoin"
   * @const
   */
  "dogecoin": "dogecoin",
  /**
   * value: "dash"
   * @const
   */
  "dash": "dash",
  /**
   * value: "ethereum"
   * @const
   */
  "ethereum": "ethereum",
  /**
   * value: "ethereum-classic"
   * @const
   */
  "ethereum-classic": "ethereum-classic",
  /**
   * value: "xrp"
   * @const
   */
  "xrp": "xrp",
  /**
   * value: "zcash"
   * @const
   */
  "zcash": "zcash"
};

/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
GetTransactionRequestDetailsRI['FeePriorityEnum'] = {
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

/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */
GetTransactionRequestDetailsRI['NetworkEnum'] = {
  /**
   * value: "mainnet"
   * @const
   */
  "mainnet": "mainnet",
  /**
   * value: "testnet"
   * @const
   */
  "testnet": "testnet",
  /**
   * value: "ropsten"
   * @const
   */
  "ropsten": "ropsten",
  /**
   * value: "mordor"
   * @const
   */
  "mordor": "mordor"
};

/**
 * Allowed values for the <code>transactionRequestStatus</code> property.
 * @enum {String}
 * @readonly
 */
GetTransactionRequestDetailsRI['TransactionRequestStatusEnum'] = {
  /**
   * value: "created"
   * @const
   */
  "created": "created",
  /**
   * value: "await-approval"
   * @const
   */
  "await-approval": "await-approval",
  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",
  /**
   * value: "prepared"
   * @const
   */
  "prepared": "prepared",
  /**
   * value: "signed"
   * @const
   */
  "signed": "signed",
  /**
   * value: "broadcasted"
   * @const
   */
  "broadcasted": "broadcasted",
  /**
   * value: "success"
   * @const
   */
  "success": "success",
  /**
   * value: "failed"
   * @const
   */
  "failed": "failed",
  /**
   * value: "rejected"
   * @const
   */
  "rejected": "rejected",
  /**
   * value: "mined"
   * @const
   */
  "mined": "mined"
};

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
GetTransactionRequestDetailsRI['TransactionTypeEnum'] = {
  /**
   * value: "coin"
   * @const
   */
  "coin": "coin",
  /**
   * value: "token"
   * @const
   */
  "token": "token"
};
var _default = GetTransactionRequestDetailsRI;
exports["default"] = _default;