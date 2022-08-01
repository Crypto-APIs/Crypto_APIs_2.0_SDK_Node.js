"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListLatestMinedBlocksRIBSXTotalCoins = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSXTotalCoins"));

var _ListLatestMinedBlocksRIBSXTotalFees = _interopRequireDefault(require("./ListLatestMinedBlocksRIBSXTotalFees"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListLatestMinedBlocksRIBSX model module.
 * @module model/ListLatestMinedBlocksRIBSX
 * @version 1.7.2
 */
var ListLatestMinedBlocksRIBSX = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListLatestMinedBlocksRIBSX</code>.
   * XRP
   * @alias module:model/ListLatestMinedBlocksRIBSX
   * @param totalFees {module:model/ListLatestMinedBlocksRIBSXTotalFees} 
   */
  function ListLatestMinedBlocksRIBSX(totalFees) {
    _classCallCheck(this, ListLatestMinedBlocksRIBSX);

    ListLatestMinedBlocksRIBSX.initialize(this, totalFees);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListLatestMinedBlocksRIBSX, null, [{
    key: "initialize",
    value: function initialize(obj, totalFees) {
      obj['totalFees'] = totalFees;
    }
    /**
     * Constructs a <code>ListLatestMinedBlocksRIBSX</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListLatestMinedBlocksRIBSX} obj Optional instance to populate.
     * @return {module:model/ListLatestMinedBlocksRIBSX} The populated <code>ListLatestMinedBlocksRIBSX</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListLatestMinedBlocksRIBSX();

        if (data.hasOwnProperty('totalCoins')) {
          obj['totalCoins'] = _ListLatestMinedBlocksRIBSXTotalCoins["default"].constructFromObject(data['totalCoins']);
        }

        if (data.hasOwnProperty('totalFees')) {
          obj['totalFees'] = _ListLatestMinedBlocksRIBSXTotalFees["default"].constructFromObject(data['totalFees']);
        }
      }

      return obj;
    }
  }]);

  return ListLatestMinedBlocksRIBSX;
}();
/**
 * @member {module:model/ListLatestMinedBlocksRIBSXTotalCoins} totalCoins
 */


ListLatestMinedBlocksRIBSX.prototype['totalCoins'] = undefined;
/**
 * @member {module:model/ListLatestMinedBlocksRIBSXTotalFees} totalFees
 */

ListLatestMinedBlocksRIBSX.prototype['totalFees'] = undefined;
var _default = ListLatestMinedBlocksRIBSX;
exports["default"] = _default;