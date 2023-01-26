/**
 * CryptoAPIs
 * Crypto APIs is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2021-03-20
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AddTokensToExistingFromAddress400Response from '../model/AddTokensToExistingFromAddress400Response';
import AddTokensToExistingFromAddress401Response from '../model/AddTokensToExistingFromAddress401Response';
import AddTokensToExistingFromAddress403Response from '../model/AddTokensToExistingFromAddress403Response';
import AddTokensToExistingFromAddressR from '../model/AddTokensToExistingFromAddressR';
import AddTokensToExistingFromAddressRB from '../model/AddTokensToExistingFromAddressRB';
import ConvertBitcoinCashAddress402Response from '../model/ConvertBitcoinCashAddress402Response';
import ConvertBitcoinCashAddress409Response from '../model/ConvertBitcoinCashAddress409Response';
import ConvertBitcoinCashAddress415Response from '../model/ConvertBitcoinCashAddress415Response';
import ConvertBitcoinCashAddress422Response from '../model/ConvertBitcoinCashAddress422Response';
import ConvertBitcoinCashAddress429Response from '../model/ConvertBitcoinCashAddress429Response';
import ConvertBitcoinCashAddress500Response from '../model/ConvertBitcoinCashAddress500Response';
import CreateAutomaticTokensForwarding400Response from '../model/CreateAutomaticTokensForwarding400Response';
import CreateAutomaticTokensForwarding401Response from '../model/CreateAutomaticTokensForwarding401Response';
import CreateAutomaticTokensForwarding403Response from '../model/CreateAutomaticTokensForwarding403Response';
import CreateAutomaticTokensForwardingR from '../model/CreateAutomaticTokensForwardingR';
import CreateAutomaticTokensForwardingRB from '../model/CreateAutomaticTokensForwardingRB';
import DeleteAutomaticTokensForwarding400Response from '../model/DeleteAutomaticTokensForwarding400Response';
import DeleteAutomaticTokensForwarding401Response from '../model/DeleteAutomaticTokensForwarding401Response';
import DeleteAutomaticTokensForwarding403Response from '../model/DeleteAutomaticTokensForwarding403Response';
import DeleteAutomaticTokensForwardingR from '../model/DeleteAutomaticTokensForwardingR';
import GetFeeAddressDetails400Response from '../model/GetFeeAddressDetails400Response';
import GetFeeAddressDetails401Response from '../model/GetFeeAddressDetails401Response';
import GetFeeAddressDetails403Response from '../model/GetFeeAddressDetails403Response';
import GetFeeAddressDetailsR from '../model/GetFeeAddressDetailsR';
import GetXRPRippleTransactionDetailsByTransactionID404Response from '../model/GetXRPRippleTransactionDetailsByTransactionID404Response';
import ListTokensForwardingAutomations400Response from '../model/ListTokensForwardingAutomations400Response';
import ListTokensForwardingAutomations401Response from '../model/ListTokensForwardingAutomations401Response';
import ListTokensForwardingAutomations403Response from '../model/ListTokensForwardingAutomations403Response';
import ListTokensForwardingAutomationsR from '../model/ListTokensForwardingAutomationsR';

/**
* AutomaticTokensForwarding service.
* @module api/AutomaticTokensForwardingApi
* @version 1.12.0
*/
export default class AutomaticTokensForwardingApi {

    /**
    * Constructs a new AutomaticTokensForwardingApi. 
    * @alias module:api/AutomaticTokensForwardingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add Tokens To Existing fromAddress
     * Through this endpoint customers can add **Automatic Tokens forwardings** to an already existing `fromAddress`. Unlike the \"Create Automatic Tokens Forwarding\" endpoint, where the `fromAddress` is generated each time, with this endpoint customers can add an automation from another token to one and the same `fromAddress`.    The `fromAddress` can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation. The  `toAddress` is essentially the main address and destination for the automatic tokens forwarding.    There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the tokens once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    For this automatic forwarding the customer can set a callback subscription.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/AddTokensToExistingFromAddressRB} opts.addTokensToExistingFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddTokensToExistingFromAddressR} and HTTP response
     */
    addTokensToExistingFromAddressWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      let postBody = opts['addTokensToExistingFromAddressRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling addTokensToExistingFromAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling addTokensToExistingFromAddress");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AddTokensToExistingFromAddressR;
      return this.apiClient.callApi(
        '/blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations/add-token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add Tokens To Existing fromAddress
     * Through this endpoint customers can add **Automatic Tokens forwardings** to an already existing `fromAddress`. Unlike the \"Create Automatic Tokens Forwarding\" endpoint, where the `fromAddress` is generated each time, with this endpoint customers can add an automation from another token to one and the same `fromAddress`.    The `fromAddress` can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation. The  `toAddress` is essentially the main address and destination for the automatic tokens forwarding.    There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the tokens once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    For this automatic forwarding the customer can set a callback subscription.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/AddTokensToExistingFromAddressRB} opts.addTokensToExistingFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddTokensToExistingFromAddressR}
     */
    addTokensToExistingFromAddress(blockchain, network, opts) {
      return this.addTokensToExistingFromAddressWithHttpInfo(blockchain, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create Automatic Tokens Forwarding
     * Through this endpoint customers can set up an automatic forwarding function specifically for tokens (**not** coins). They can have a `toAddress` which is essentially the main address and the destination for the automatic tokens forwarding.     There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the tokens once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    The response of this endpoint contains an attribute `fromAddress` which can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation.    For this automatic forwarding the customer can set a callback subscription.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}    {note}This endpoint generates a new `fromAddress` each time.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateAutomaticTokensForwardingRB} opts.createAutomaticTokensForwardingRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateAutomaticTokensForwardingR} and HTTP response
     */
    createAutomaticTokensForwardingWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      let postBody = opts['createAutomaticTokensForwardingRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling createAutomaticTokensForwarding");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling createAutomaticTokensForwarding");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateAutomaticTokensForwardingR;
      return this.apiClient.callApi(
        '/blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Automatic Tokens Forwarding
     * Through this endpoint customers can set up an automatic forwarding function specifically for tokens (**not** coins). They can have a `toAddress` which is essentially the main address and the destination for the automatic tokens forwarding.     There is also a `minimumTransferAmount` which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, `feePriority` can be also set,  which defines how quickly to move the tokens once they are received. The higher priority, the larger the fee will be. It can be \"SLOW\", \"STANDARD\" or \"FAST\".    The response of this endpoint contains an attribute `fromAddress` which can be used as a deposit address. Any funds received by this address will be automatically forwarded to `toAddress` based on what the customer has set for the automation.    For this automatic forwarding the customer can set a callback subscription.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}    {note}This endpoint generates a new `fromAddress` each time.{/note}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/CreateAutomaticTokensForwardingRB} opts.createAutomaticTokensForwardingRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateAutomaticTokensForwardingR}
     */
    createAutomaticTokensForwarding(blockchain, network, opts) {
      return this.createAutomaticTokensForwardingWithHttpInfo(blockchain, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Automatic Tokens Forwarding
     * Through this endpoint customers can delete a forwarding function they have set for **tokens** (**not** coins).    By setting a `fromAddress` and a `toAddress`, and specifying the amount, tokens can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteAutomaticTokensForwardingR} and HTTP response
     */
    deleteAutomaticTokensForwardingWithHttpInfo(blockchain, network, referenceId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deleteAutomaticTokensForwarding");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling deleteAutomaticTokensForwarding");
      }
      // verify the required parameter 'referenceId' is set
      if (referenceId === undefined || referenceId === null) {
        throw new Error("Missing the required parameter 'referenceId' when calling deleteAutomaticTokensForwarding");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network,
        'referenceId': referenceId
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteAutomaticTokensForwardingR;
      return this.apiClient.callApi(
        '/blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations/{referenceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Automatic Tokens Forwarding
     * Through this endpoint customers can delete a forwarding function they have set for **tokens** (**not** coins).    By setting a `fromAddress` and a `toAddress`, and specifying the amount, tokens can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} referenceId Represents a unique ID used to reference the specific callback subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteAutomaticTokensForwardingR}
     */
    deleteAutomaticTokensForwarding(blockchain, network, referenceId, opts) {
      return this.deleteAutomaticTokensForwardingWithHttpInfo(blockchain, network, referenceId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Fee Address Details
     * Through this endpoint customers can obtain details about a fee address. Only one fee address per currency per network for a user's account can be set no matter how many tokens or subscriptions they have or want to automatically forward.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetFeeAddressDetailsR} and HTTP response
     */
    getFeeAddressDetailsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getFeeAddressDetails");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getFeeAddressDetails");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetFeeAddressDetailsR;
      return this.apiClient.callApi(
        '/blockchain-automations/{blockchain}/{network}/tokens-forwarding/fee-addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Fee Address Details
     * Through this endpoint customers can obtain details about a fee address. Only one fee address per currency per network for a user's account can be set no matter how many tokens or subscriptions they have or want to automatically forward.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetFeeAddressDetailsR}
     */
    getFeeAddressDetails(blockchain, network, opts) {
      return this.getFeeAddressDetailsWithHttpInfo(blockchain, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Tokens Forwarding Automations
     * Through this endpoint customers can list all of their **tokens** forwarding automations (**not** coins).    Customers can set up automatic forwarding functions for tokens by setting a `fromAddress` and a `toAddress`, and specifying the amount that can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".     {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTokensForwardingAutomationsR} and HTTP response
     */
    listTokensForwardingAutomationsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listTokensForwardingAutomations");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listTokensForwardingAutomations");
      }

      let pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      let queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListTokensForwardingAutomationsR;
      return this.apiClient.callApi(
        '/blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Tokens Forwarding Automations
     * Through this endpoint customers can list all of their **tokens** forwarding automations (**not** coins).    Customers can set up automatic forwarding functions for tokens by setting a `fromAddress` and a `toAddress`, and specifying the amount that can be transferred between addresses.     A `feePriority` will be returned which represents the fee priority of the automation whether it is \"SLOW\", \"STANDARD\" OR \"FAST\".     {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all transactions until it is deleted. There is no need to do that for every transaction.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTokensForwardingAutomationsR}
     */
    listTokensForwardingAutomations(blockchain, network, opts) {
      return this.listTokensForwardingAutomationsWithHttpInfo(blockchain, network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
