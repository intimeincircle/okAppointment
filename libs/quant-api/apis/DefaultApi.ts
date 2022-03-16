// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ABoatEgg } from '../models/ABoatEgg';
import { FuturesPigInfoResponse } from '../models/FuturesPigInfoResponse';
import { IndexHistoryJoda } from '../models/IndexHistoryJoda';
import { PanMingChaoDieItem2 } from '../models/PanMingChaoDieItem2';
import { PigSymbol } from '../models/PigSymbol';
import { RespstockFinancialAnalysisIndicatorResponse } from '../models/RespstockFinancialAnalysisIndicatorResponse';
import { RetListWithEventStock } from '../models/RetListWithEventStock';
import { RetStock } from '../models/RetStock';
import { RetStockChaoDie } from '../models/RetStockChaoDie';
import { ReturnMsg } from '../models/ReturnMsg';
import { StockInfo } from '../models/StockInfo';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * 这是个api
     * @param code 
     * @param type 
     * @param period 
     */
    public async getQuantV2HistoryIndexDailyChaodieEvents(code: string, type: string, period: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2HistoryIndexDailyChaodieEvents", "code");
        }


        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2HistoryIndexDailyChaodieEvents", "type");
        }


        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2HistoryIndexDailyChaodieEvents", "period");
        }


        // Path Params
        const localVarPath = '/quant/v2/history/index/daily/chaodie-events';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 这是个api
     * @param code 
     * @param type 
     * @param period 
     */
    public async getQuantV2HistoryStockDaily(code: string, type: string, period: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2HistoryStockDaily", "code");
        }


        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2HistoryStockDaily", "type");
        }


        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2HistoryStockDaily", "period");
        }


        // Path Params
        const localVarPath = '/quant/v2/history/stock/daily';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 这是个api
     * @param code 
     * @param type 
     * @param period 
     */
    public async getQuantV2HistoryStockDailyChaodieEvents(code: string, type: string, period: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2HistoryStockDailyChaodieEvents", "code");
        }


        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2HistoryStockDailyChaodieEvents", "type");
        }


        // verify required parameter 'period' is not null or undefined
        if (period === null || period === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2HistoryStockDailyChaodieEvents", "period");
        }


        // Path Params
        const localVarPath = '/quant/v2/history/stock/daily/chaodie-events';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 鸡蛋api
     */
    public async getQuantV2QuantBoatEgg(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/quant/v2/quant/boat/egg';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 这是个api
     * @param symbol 
     */
    public async getQuantV2QuantBoatPig(symbol: PigSymbol, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2QuantBoatPig", "symbol");
        }


        // Path Params
        const localVarPath = '/quant/v2/quant/boat/pig';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (symbol !== undefined) {
            requestContext.setQueryParam("symbol", ObjectSerializer.serialize(symbol, "PigSymbol", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 这是个api
     * @param code 
     */
    public async getQuantV2SecurityDataCaiwu(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2SecurityDataCaiwu", "code");
        }


        // Path Params
        const localVarPath = '/quant/v2/security/data/caiwu';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 这是个api
     * @param code 
     */
    public async getQuantV2SecurityIndicatorChaodie(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2SecurityIndicatorChaodie", "code");
        }


        // Path Params
        const localVarPath = '/quant/v2/security/indicator/chaodie';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 这是个api
     * @param code 
     */
    public async getQuantV2SecurityIndicatorPanming(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2SecurityIndicatorPanming", "code");
        }


        // Path Params
        const localVarPath = '/quant/v2/security/indicator/panming';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 这是个api
     * @param code 
     */
    public async getQuantV2SecurityInfoStock(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("DefaultApi", "getQuantV2SecurityInfoStock", "code");
        }


        // Path Params
        const localVarPath = '/quant/v2/security/info/stock';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQuantV2HistoryIndexDailyChaodieEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQuantV2HistoryIndexDailyChaodieEvents(response: ResponseContext): Promise<Array<IndexHistoryJoda> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<IndexHistoryJoda> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<IndexHistoryJoda>", ""
            ) as Array<IndexHistoryJoda>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter code, Invalid value for: query parameter type, Invalid value for: query parameter period", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ReturnMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnMsg", ""
            ) as ReturnMsg;
            throw new ApiException<ReturnMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<IndexHistoryJoda> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<IndexHistoryJoda>", ""
            ) as Array<IndexHistoryJoda>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQuantV2HistoryStockDaily
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQuantV2HistoryStockDaily(response: ResponseContext): Promise<RetStock > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetStock = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetStock", ""
            ) as RetStock;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter code, Invalid value for: query parameter type, Invalid value for: query parameter period", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ReturnMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnMsg", ""
            ) as ReturnMsg;
            throw new ApiException<ReturnMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetStock = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetStock", ""
            ) as RetStock;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQuantV2HistoryStockDailyChaodieEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQuantV2HistoryStockDailyChaodieEvents(response: ResponseContext): Promise<RetListWithEventStock > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetListWithEventStock = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetListWithEventStock", ""
            ) as RetListWithEventStock;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter code, Invalid value for: query parameter type, Invalid value for: query parameter period", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ReturnMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnMsg", ""
            ) as ReturnMsg;
            throw new ApiException<ReturnMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetListWithEventStock = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetListWithEventStock", ""
            ) as RetListWithEventStock;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQuantV2QuantBoatEgg
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQuantV2QuantBoatEgg(response: ResponseContext): Promise<Array<ABoatEgg> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ABoatEgg> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ABoatEgg>", ""
            ) as Array<ABoatEgg>;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ReturnMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnMsg", ""
            ) as ReturnMsg;
            throw new ApiException<ReturnMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ABoatEgg> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ABoatEgg>", ""
            ) as Array<ABoatEgg>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQuantV2QuantBoatPig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQuantV2QuantBoatPig(response: ResponseContext): Promise<Array<FuturesPigInfoResponse> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<FuturesPigInfoResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FuturesPigInfoResponse>", ""
            ) as Array<FuturesPigInfoResponse>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter symbol", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ReturnMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnMsg", ""
            ) as ReturnMsg;
            throw new ApiException<ReturnMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<FuturesPigInfoResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FuturesPigInfoResponse>", ""
            ) as Array<FuturesPigInfoResponse>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQuantV2SecurityDataCaiwu
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQuantV2SecurityDataCaiwu(response: ResponseContext): Promise<Array<RespstockFinancialAnalysisIndicatorResponse> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RespstockFinancialAnalysisIndicatorResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RespstockFinancialAnalysisIndicatorResponse>", ""
            ) as Array<RespstockFinancialAnalysisIndicatorResponse>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter code", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ReturnMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnMsg", ""
            ) as ReturnMsg;
            throw new ApiException<ReturnMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RespstockFinancialAnalysisIndicatorResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RespstockFinancialAnalysisIndicatorResponse>", ""
            ) as Array<RespstockFinancialAnalysisIndicatorResponse>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQuantV2SecurityIndicatorChaodie
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQuantV2SecurityIndicatorChaodie(response: ResponseContext): Promise<RetStockChaoDie > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetStockChaoDie = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetStockChaoDie", ""
            ) as RetStockChaoDie;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter code", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ReturnMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnMsg", ""
            ) as ReturnMsg;
            throw new ApiException<ReturnMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetStockChaoDie = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetStockChaoDie", ""
            ) as RetStockChaoDie;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQuantV2SecurityIndicatorPanming
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQuantV2SecurityIndicatorPanming(response: ResponseContext): Promise<Array<PanMingChaoDieItem2> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PanMingChaoDieItem2> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PanMingChaoDieItem2>", ""
            ) as Array<PanMingChaoDieItem2>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter code", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ReturnMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnMsg", ""
            ) as ReturnMsg;
            throw new ApiException<ReturnMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PanMingChaoDieItem2> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PanMingChaoDieItem2>", ""
            ) as Array<PanMingChaoDieItem2>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQuantV2SecurityInfoStock
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQuantV2SecurityInfoStock(response: ResponseContext): Promise<StockInfo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StockInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StockInfo", ""
            ) as StockInfo;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter code", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: ReturnMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReturnMsg", ""
            ) as ReturnMsg;
            throw new ApiException<ReturnMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StockInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StockInfo", ""
            ) as StockInfo;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
