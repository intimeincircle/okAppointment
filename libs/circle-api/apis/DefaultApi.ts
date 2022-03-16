// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { NoSqlPagingListDataPiece } from '../models/NoSqlPagingListDataPiece';
import { NoSqlPagingListDataTheme } from '../models/NoSqlPagingListDataTheme';
import { Piece } from '../models/Piece';
import { PunchClockReq } from '../models/PunchClockReq';
import { RetMsg } from '../models/RetMsg';
import { Theme } from '../models/Theme';
import { UpdateMarkPiece } from '../models/UpdateMarkPiece';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param id 
     */
    public async deleteApiCircleV1CirclePiece(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DefaultApi", "deleteApiCircleV1CirclePiece", "id");
        }


        // Path Params
        const localVarPath = '/api/circle/v1/circle/piece';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param themeId 
     */
    public async getApiCircleV1CircleThemeCurrent(themeId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/circle/v1/circle/theme/current';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (themeId !== undefined) {
            requestContext.setQueryParam("themeId", ObjectSerializer.serialize(themeId, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async getApiCircleV1CircleThemeList(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/circle/v1/circle/theme/list';

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
     * @param piece 
     */
    public async postApiCircleV1CirclePieceCreate(piece: Piece, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'piece' is not null or undefined
        if (piece === null || piece === undefined) {
            throw new RequiredError("DefaultApi", "postApiCircleV1CirclePieceCreate", "piece");
        }


        // Path Params
        const localVarPath = '/api/circle/v1/circle/piece/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(piece, "Piece", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param updateMarkPiece 
     */
    public async postApiCircleV1CirclePieceMark(updateMarkPiece: UpdateMarkPiece, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'updateMarkPiece' is not null or undefined
        if (updateMarkPiece === null || updateMarkPiece === undefined) {
            throw new RequiredError("DefaultApi", "postApiCircleV1CirclePieceMark", "updateMarkPiece");
        }


        // Path Params
        const localVarPath = '/api/circle/v1/circle/piece/mark';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateMarkPiece, "UpdateMarkPiece", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param theme 
     */
    public async postApiCircleV1CircleThemeCreate(theme: Theme, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'theme' is not null or undefined
        if (theme === null || theme === undefined) {
            throw new RequiredError("DefaultApi", "postApiCircleV1CircleThemeCreate", "theme");
        }


        // Path Params
        const localVarPath = '/api/circle/v1/circle/theme/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(theme, "Theme", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param punchClockReq 
     */
    public async postApiCircleV1PunchclockCheck(punchClockReq: PunchClockReq, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'punchClockReq' is not null or undefined
        if (punchClockReq === null || punchClockReq === undefined) {
            throw new RequiredError("DefaultApi", "postApiCircleV1PunchclockCheck", "punchClockReq");
        }


        // Path Params
        const localVarPath = '/api/circle/v1/punchclock/check';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(punchClockReq, "PunchClockReq", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param punchClockReq 
     */
    public async postApiCircleV1PunchclockCreate(punchClockReq: PunchClockReq, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'punchClockReq' is not null or undefined
        if (punchClockReq === null || punchClockReq === undefined) {
            throw new RequiredError("DefaultApi", "postApiCircleV1PunchclockCreate", "punchClockReq");
        }


        // Path Params
        const localVarPath = '/api/circle/v1/punchclock/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(punchClockReq, "PunchClockReq", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
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
     * @params response Response returned by the server for a request to deleteApiCircleV1CirclePiece
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteApiCircleV1CirclePiece(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter id", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiCircleV1CircleThemeCurrent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiCircleV1CircleThemeCurrent(response: ResponseContext): Promise<NoSqlPagingListDataPiece > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPiece = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPiece", ""
            ) as NoSqlPagingListDataPiece;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter themeId", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataPiece = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPiece", ""
            ) as NoSqlPagingListDataPiece;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiCircleV1CircleThemeList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiCircleV1CircleThemeList(response: ResponseContext): Promise<NoSqlPagingListDataTheme > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataTheme = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataTheme", ""
            ) as NoSqlPagingListDataTheme;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataTheme = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataTheme", ""
            ) as NoSqlPagingListDataTheme;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiCircleV1CirclePieceCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiCircleV1CirclePieceCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiCircleV1CirclePieceMark
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiCircleV1CirclePieceMark(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiCircleV1CircleThemeCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiCircleV1CircleThemeCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiCircleV1PunchclockCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiCircleV1PunchclockCheck(response: ResponseContext): Promise<boolean > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiCircleV1PunchclockCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiCircleV1PunchclockCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
