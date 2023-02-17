"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TransactionRequestApprovalDataItem model module.
 * @module model/TransactionRequestApprovalDataItem
 * @version 1.13.0
 */
var TransactionRequestApprovalDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionRequestApprovalDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/TransactionRequestApprovalDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param requiredApprovals {Number} The required number of approvals needed to approve the transaction.
   * @param requiredRejections {Number} The required number of rejections needed to reject the transaction.
   * @param currentApprovals {Number} The current number of approvals given for the transaction.
   * @param currentRejections {Number} The current number of rejections given for the transaction.
   */
  function TransactionRequestApprovalDataItem(blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections) {
    _classCallCheck(this, TransactionRequestApprovalDataItem);
    TransactionRequestApprovalDataItem.initialize(this, blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TransactionRequestApprovalDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['requiredApprovals'] = requiredApprovals;
      obj['requiredRejections'] = requiredRejections;
      obj['currentApprovals'] = currentApprovals;
      obj['currentRejections'] = currentRejections;
    }

    /**
     * Constructs a <code>TransactionRequestApprovalDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRequestApprovalDataItem} obj Optional instance to populate.
     * @return {module:model/TransactionRequestApprovalDataItem} The populated <code>TransactionRequestApprovalDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionRequestApprovalDataItem();
        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }
        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
        if (data.hasOwnProperty('requiredApprovals')) {
          obj['requiredApprovals'] = _ApiClient["default"].convertToType(data['requiredApprovals'], 'Number');
        }
        if (data.hasOwnProperty('requiredRejections')) {
          obj['requiredRejections'] = _ApiClient["default"].convertToType(data['requiredRejections'], 'Number');
        }
        if (data.hasOwnProperty('currentApprovals')) {
          obj['currentApprovals'] = _ApiClient["default"].convertToType(data['currentApprovals'], 'Number');
        }
        if (data.hasOwnProperty('currentRejections')) {
          obj['currentRejections'] = _ApiClient["default"].convertToType(data['currentRejections'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return TransactionRequestApprovalDataItem;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
TransactionRequestApprovalDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
TransactionRequestApprovalDataItem.prototype['network'] = undefined;

/**
 * The required number of approvals needed to approve the transaction.
 * @member {Number} requiredApprovals
 */
TransactionRequestApprovalDataItem.prototype['requiredApprovals'] = undefined;

/**
 * The required number of rejections needed to reject the transaction.
 * @member {Number} requiredRejections
 */
TransactionRequestApprovalDataItem.prototype['requiredRejections'] = undefined;

/**
 * The current number of approvals given for the transaction.
 * @member {Number} currentApprovals
 */
TransactionRequestApprovalDataItem.prototype['currentApprovals'] = undefined;

/**
 * The current number of rejections given for the transaction.
 * @member {Number} currentRejections
 */
TransactionRequestApprovalDataItem.prototype['currentRejections'] = undefined;
var _default = TransactionRequestApprovalDataItem;
exports["default"] = _default;