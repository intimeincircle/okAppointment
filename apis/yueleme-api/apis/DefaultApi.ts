// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AWithDraw } from '../models/AWithDraw';
import { ConstantAppointmentStatus } from '../models/ConstantAppointmentStatus';
import { LoginPhoneConfirm } from '../models/LoginPhoneConfirm';
import { LoginPhoneConfirmCheck } from '../models/LoginPhoneConfirmCheck';
import { LoginTribeUser } from '../models/LoginTribeUser';
import { NoSqlPagingListDataPageMarkBalanceHistory } from '../models/NoSqlPagingListDataPageMarkBalanceHistory';
import { NoSqlPagingListDataPageMarkScheduleCard } from '../models/NoSqlPagingListDataPageMarkScheduleCard';
import { NoSqlPagingListDataPageMarkWithdrawApplicaton } from '../models/NoSqlPagingListDataPageMarkWithdrawApplicaton';
import { NoSqlPagingListDataPageMarkYuelemeAppointment } from '../models/NoSqlPagingListDataPageMarkYuelemeAppointment';
import { NoSqlPagingListDataPageMarkYuelemeServiceCard } from '../models/NoSqlPagingListDataPageMarkYuelemeServiceCard';
import { NoSqlPagingListDataPaymentHistory } from '../models/NoSqlPagingListDataPaymentHistory';
import { NoSqlPagingListDataScheduleCard } from '../models/NoSqlPagingListDataScheduleCard';
import { NoSqlPagingListDataUserCalendarRecord } from '../models/NoSqlPagingListDataUserCalendarRecord';
import { NoSqlPagingListDataYuelemeAppointment } from '../models/NoSqlPagingListDataYuelemeAppointment';
import { OptionDataALoginReply } from '../models/OptionDataALoginReply';
import { OptionDataKunUser } from '../models/OptionDataKunUser';
import { OptionDataLong } from '../models/OptionDataLong';
import { OptionDataRetGetServiceTime } from '../models/OptionDataRetGetServiceTime';
import { OptionDataScheduleCard } from '../models/OptionDataScheduleCard';
import { OptionDataUserBalance } from '../models/OptionDataUserBalance';
import { OptionDataUserShortName } from '../models/OptionDataUserShortName';
import { OptionDataWechatPaymentItem } from '../models/OptionDataWechatPaymentItem';
import { OptionDataYuelemeAddress } from '../models/OptionDataYuelemeAddress';
import { OptionDataYuelemeAppointment } from '../models/OptionDataYuelemeAppointment';
import { OptionDataYuelemeServiceCard } from '../models/OptionDataYuelemeServiceCard';
import { ReqCancelAppointment } from '../models/ReqCancelAppointment';
import { ReqChange2Appointment } from '../models/ReqChange2Appointment';
import { ReqChangeAppointment } from '../models/ReqChangeAppointment';
import { ReqConfirmAppointment } from '../models/ReqConfirmAppointment';
import { ReqCreateSchedule } from '../models/ReqCreateSchedule';
import { ReqCreateUserSymbol } from '../models/ReqCreateUserSymbol';
import { ReqGetCalendar } from '../models/ReqGetCalendar';
import { ReqGetQuickAppointment } from '../models/ReqGetQuickAppointment';
import { ReqGetServiceTime } from '../models/ReqGetServiceTime';
import { ReqPatchAddress } from '../models/ReqPatchAddress';
import { ReqPatchAppointment } from '../models/ReqPatchAppointment';
import { ReqPatchKunPartial } from '../models/ReqPatchKunPartial';
import { ReqPatchSchedule } from '../models/ReqPatchSchedule';
import { ReqPatchServiceCard } from '../models/ReqPatchServiceCard';
import { ReqQuickAppointmentShare } from '../models/ReqQuickAppointmentShare';
import { ReqStartAppointment } from '../models/ReqStartAppointment';
import { ReqStoreAddress } from '../models/ReqStoreAddress';
import { ReqYuelemeServiceCard } from '../models/ReqYuelemeServiceCard';
import { RetMsg } from '../models/RetMsg';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param authorization 
     * @param id 
     */
    public async deleteApiYuelemeV1YuelemeSchedule(authorization: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "deleteApiYuelemeV1YuelemeSchedule", "authorization");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DefaultApi", "deleteApiYuelemeV1YuelemeSchedule", "id");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/schedule';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "number", "int64"));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param id 
     */
    public async deleteApiYuelemeV1YuelemeServiceItemId(authorization: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "deleteApiYuelemeV1YuelemeServiceItemId", "authorization");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DefaultApi", "deleteApiYuelemeV1YuelemeServiceItemId", "id");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/service/item/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiYuelemeV1TapirHorseLoginUser(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1TapirHorseLoginUser", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/tapir/horse/login/user';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public async getApiYuelemeV1YuelemeAddressMy(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeAddressMy", "authorization");
        }





        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/address/my';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageState !== undefined) {
            requestContext.setQueryParam("pageState", ObjectSerializer.serialize(pageState, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param id 
     * @param userId 
     * @param tutorId 
     * @param serviceCardId 
     * @param status 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public async getApiYuelemeV1YuelemeAppointment(authorization: string, id?: number, userId?: string, tutorId?: string, serviceCardId?: number, status?: ConstantAppointmentStatus, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeAppointment", "authorization");
        }










        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "number", "int64"));
        }

        // Query Params
        if (userId !== undefined) {
            requestContext.setQueryParam("userId", ObjectSerializer.serialize(userId, "string", ""));
        }

        // Query Params
        if (tutorId !== undefined) {
            requestContext.setQueryParam("tutorId", ObjectSerializer.serialize(tutorId, "string", ""));
        }

        // Query Params
        if (serviceCardId !== undefined) {
            requestContext.setQueryParam("serviceCardId", ObjectSerializer.serialize(serviceCardId, "number", "int64"));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "ConstantAppointmentStatus", ""));
        }

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageState !== undefined) {
            requestContext.setQueryParam("pageState", ObjectSerializer.serialize(pageState, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param id 
     */
    public async getApiYuelemeV1YuelemeAppointmentItemId(authorization: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeAppointmentItemId", "authorization");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeAppointmentItemId", "id");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment/item/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param status 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public async getApiYuelemeV1YuelemeAppointmentOrginaniserList(authorization: string, status?: ConstantAppointmentStatus, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeAppointmentOrginaniserList", "authorization");
        }






        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment/orginaniser/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "ConstantAppointmentStatus", ""));
        }

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageState !== undefined) {
            requestContext.setQueryParam("pageState", ObjectSerializer.serialize(pageState, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param status 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public async getApiYuelemeV1YuelemeAppointmentServiceUserList(authorization: string, status?: ConstantAppointmentStatus, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeAppointmentServiceUserList", "authorization");
        }






        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment/service-user/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "ConstantAppointmentStatus", ""));
        }

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageState !== undefined) {
            requestContext.setQueryParam("pageState", ObjectSerializer.serialize(pageState, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiYuelemeV1YuelemeBalanceGet(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeBalanceGet", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/balance/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public async getApiYuelemeV1YuelemeBalanceList(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeBalanceList", "authorization");
        }





        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/balance/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageState !== undefined) {
            requestContext.setQueryParam("pageState", ObjectSerializer.serialize(pageState, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param id 
     */
    public async getApiYuelemeV1YuelemeCalendarId(authorization: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeCalendarId", "authorization");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeCalendarId", "id");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/calendar/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public async getApiYuelemeV1YuelemeCanlendarMy(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeCanlendarMy", "authorization");
        }





        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/canlendar/my';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageState !== undefined) {
            requestContext.setQueryParam("pageState", ObjectSerializer.serialize(pageState, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiYuelemeV1YuelemePayment(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemePayment", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/payment';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param id 
     */
    public async getApiYuelemeV1YuelemeServiceItemId(authorization: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeServiceItemId", "authorization");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeServiceItemId", "id");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/service/item/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public async getApiYuelemeV1YuelemeServiceMyList(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeServiceMyList", "authorization");
        }





        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/service/my/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageState !== undefined) {
            requestContext.setQueryParam("pageState", ObjectSerializer.serialize(pageState, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 查询某个预约
     * @param reqGetQuickAppointment 
     * @param authorization 
     */
    public async getApiYuelemeV1YuelemeServiceQuick(reqGetQuickAppointment: ReqGetQuickAppointment, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqGetQuickAppointment' is not null or undefined
        if (reqGetQuickAppointment === null || reqGetQuickAppointment === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeServiceQuick", "reqGetQuickAppointment");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeServiceQuick", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/service/quick';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqGetQuickAppointment, "ReqGetQuickAppointment", ""),
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
     * @param symbol 
     * @param name 
     */
    public async getApiYuelemeV1YuelemeServiceSymbolSymbolName(symbol: string, name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'symbol' is not null or undefined
        if (symbol === null || symbol === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeServiceSymbolSymbolName", "symbol");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeServiceSymbolSymbolName", "name");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/service/symbol/{symbol}/{name}'
            .replace('{' + 'symbol' + '}', encodeURIComponent(String(symbol)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

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
     * @param userName 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public async getApiYuelemeV1YuelemeServiceUserNameList(userName: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userName' is not null or undefined
        if (userName === null || userName === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeServiceUserNameList", "userName");
        }





        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/service/{user_name}/list'
            .replace('{' + 'user_name' + '}', encodeURIComponent(String(userName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageState !== undefined) {
            requestContext.setQueryParam("pageState", ObjectSerializer.serialize(pageState, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param userId 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public async getApiYuelemeV1YuelemeServiceUsersUseridList(userId: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeServiceUsersUseridList", "userId");
        }





        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/service/users/{userId}/list'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageState !== undefined) {
            requestContext.setQueryParam("pageState", ObjectSerializer.serialize(pageState, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiYuelemeV1YuelemeSettingSchedule(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeSettingSchedule", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/setting/schedule';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiYuelemeV1YuelemeSymbol(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeSymbol", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/symbol';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 获取用户空余时间
     * @param reqGetCalendar 
     * @param authorization 
     */
    public async getApiYuelemeV1YuelemeUserCalendar(reqGetCalendar: ReqGetCalendar, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqGetCalendar' is not null or undefined
        if (reqGetCalendar === null || reqGetCalendar === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeUserCalendar", "reqGetCalendar");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeUserCalendar", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/user/calendar';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqGetCalendar, "ReqGetCalendar", ""),
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
     * @param authorization 
     */
    public async getApiYuelemeV1YuelemeWithdrawGet(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiYuelemeV1YuelemeWithdrawGet", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/withdraw/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqPatchKunPartial 
     * @param authorization 
     */
    public async patchApiYuelemeV1TapirProfile(reqPatchKunPartial: ReqPatchKunPartial, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqPatchKunPartial' is not null or undefined
        if (reqPatchKunPartial === null || reqPatchKunPartial === undefined) {
            throw new RequiredError("DefaultApi", "patchApiYuelemeV1TapirProfile", "reqPatchKunPartial");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "patchApiYuelemeV1TapirProfile", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/tapir/profile';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqPatchKunPartial, "ReqPatchKunPartial", ""),
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
     * @param reqPatchAddress 
     * @param authorization 
     */
    public async patchApiYuelemeV1YuelemeAddress(reqPatchAddress: ReqPatchAddress, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqPatchAddress' is not null or undefined
        if (reqPatchAddress === null || reqPatchAddress === undefined) {
            throw new RequiredError("DefaultApi", "patchApiYuelemeV1YuelemeAddress", "reqPatchAddress");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "patchApiYuelemeV1YuelemeAddress", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/address';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqPatchAddress, "ReqPatchAddress", ""),
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
     * @param reqPatchAppointment 
     * @param authorization 
     */
    public async patchApiYuelemeV1YuelemeAppointment(reqPatchAppointment: ReqPatchAppointment, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqPatchAppointment' is not null or undefined
        if (reqPatchAppointment === null || reqPatchAppointment === undefined) {
            throw new RequiredError("DefaultApi", "patchApiYuelemeV1YuelemeAppointment", "reqPatchAppointment");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "patchApiYuelemeV1YuelemeAppointment", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqPatchAppointment, "ReqPatchAppointment", ""),
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
     * @param reqPatchSchedule 
     * @param authorization 
     */
    public async patchApiYuelemeV1YuelemeCalendar(reqPatchSchedule: ReqPatchSchedule, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqPatchSchedule' is not null or undefined
        if (reqPatchSchedule === null || reqPatchSchedule === undefined) {
            throw new RequiredError("DefaultApi", "patchApiYuelemeV1YuelemeCalendar", "reqPatchSchedule");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "patchApiYuelemeV1YuelemeCalendar", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/calendar';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqPatchSchedule, "ReqPatchSchedule", ""),
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
     * @param reqPatchServiceCard 
     * @param authorization 
     */
    public async patchApiYuelemeV1YuelemeServiceCard(reqPatchServiceCard: ReqPatchServiceCard, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqPatchServiceCard' is not null or undefined
        if (reqPatchServiceCard === null || reqPatchServiceCard === undefined) {
            throw new RequiredError("DefaultApi", "patchApiYuelemeV1YuelemeServiceCard", "reqPatchServiceCard");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "patchApiYuelemeV1YuelemeServiceCard", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/service-card';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqPatchServiceCard, "ReqPatchServiceCard", ""),
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
     * @param loginTribeUser 
     */
    public async postApiYuelemeV1TapirLoginByPassword(loginTribeUser: LoginTribeUser, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'loginTribeUser' is not null or undefined
        if (loginTribeUser === null || loginTribeUser === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1TapirLoginByPassword", "loginTribeUser");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/tapir/login/by-password';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loginTribeUser, "LoginTribeUser", ""),
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
     * @param loginPhoneConfirm 
     */
    public async postApiYuelemeV1TapirLoginByPhoneCheck(loginPhoneConfirm: LoginPhoneConfirm, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'loginPhoneConfirm' is not null or undefined
        if (loginPhoneConfirm === null || loginPhoneConfirm === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1TapirLoginByPhoneCheck", "loginPhoneConfirm");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/tapir/login/by-phone/check';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loginPhoneConfirm, "LoginPhoneConfirm", ""),
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
     * @param loginPhoneConfirmCheck 
     */
    public async postApiYuelemeV1TapirLoginByPhoneSms(loginPhoneConfirmCheck: LoginPhoneConfirmCheck, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'loginPhoneConfirmCheck' is not null or undefined
        if (loginPhoneConfirmCheck === null || loginPhoneConfirmCheck === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1TapirLoginByPhoneSms", "loginPhoneConfirmCheck");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/tapir/login/by-phone/sms';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(loginPhoneConfirmCheck, "LoginPhoneConfirmCheck", ""),
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
     * @param reqStoreAddress 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeAddress(reqStoreAddress: ReqStoreAddress, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqStoreAddress' is not null or undefined
        if (reqStoreAddress === null || reqStoreAddress === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAddress", "reqStoreAddress");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAddress", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/address';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqStoreAddress, "ReqStoreAddress", ""),
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
     * @param reqStartAppointment 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeAppointment(reqStartAppointment: ReqStartAppointment, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqStartAppointment' is not null or undefined
        if (reqStartAppointment === null || reqStartAppointment === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointment", "reqStartAppointment");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointment", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqStartAppointment, "ReqStartAppointment", ""),
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
     * 申请取消某个预约
     * @param reqCancelAppointment 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeAppointmentCancel(reqCancelAppointment: ReqCancelAppointment, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCancelAppointment' is not null or undefined
        if (reqCancelAppointment === null || reqCancelAppointment === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointmentCancel", "reqCancelAppointment");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointmentCancel", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment/cancel';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCancelAppointment, "ReqCancelAppointment", ""),
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
     * 确认某个预约
     * @param reqConfirmAppointment 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeAppointmentConfirm(reqConfirmAppointment: ReqConfirmAppointment, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqConfirmAppointment' is not null or undefined
        if (reqConfirmAppointment === null || reqConfirmAppointment === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointmentConfirm", "reqConfirmAppointment");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointmentConfirm", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment/confirm';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqConfirmAppointment, "ReqConfirmAppointment", ""),
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
     * 支付某个预约
     * @param reqConfirmAppointment 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeAppointmentConfirmPayment(reqConfirmAppointment: ReqConfirmAppointment, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqConfirmAppointment' is not null or undefined
        if (reqConfirmAppointment === null || reqConfirmAppointment === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointmentConfirmPayment", "reqConfirmAppointment");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointmentConfirmPayment", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment/confirm-payment';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqConfirmAppointment, "ReqConfirmAppointment", ""),
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
     * @param reqChangeAppointment 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeAppointmentItemChange(reqChangeAppointment: ReqChangeAppointment, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqChangeAppointment' is not null or undefined
        if (reqChangeAppointment === null || reqChangeAppointment === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointmentItemChange", "reqChangeAppointment");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointmentItemChange", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment/item/change';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqChangeAppointment, "ReqChangeAppointment", ""),
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
     * 确认取消某个预约
     * @param reqCancelAppointment 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeAppointmentOrganizerConfirm(reqCancelAppointment: ReqCancelAppointment, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCancelAppointment' is not null or undefined
        if (reqCancelAppointment === null || reqCancelAppointment === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointmentOrganizerConfirm", "reqCancelAppointment");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeAppointmentOrganizerConfirm", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/appointment/organizer/confirm';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCancelAppointment, "ReqCancelAppointment", ""),
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
     * @param reqCreateSchedule 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeCalendarCreate(reqCreateSchedule: ReqCreateSchedule, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateSchedule' is not null or undefined
        if (reqCreateSchedule === null || reqCreateSchedule === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeCalendarCreate", "reqCreateSchedule");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeCalendarCreate", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/calendar/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateSchedule, "ReqCreateSchedule", ""),
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
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeOrganizerStatus(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeOrganizerStatus", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/organizer/status';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqChange2Appointment 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeRequestAppointment(reqChange2Appointment: ReqChange2Appointment, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqChange2Appointment' is not null or undefined
        if (reqChange2Appointment === null || reqChange2Appointment === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeRequestAppointment", "reqChange2Appointment");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeRequestAppointment", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/request/appointment';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqChange2Appointment, "ReqChange2Appointment", ""),
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
     * @param reqYuelemeServiceCard 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeServiceCard(reqYuelemeServiceCard: ReqYuelemeServiceCard, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqYuelemeServiceCard' is not null or undefined
        if (reqYuelemeServiceCard === null || reqYuelemeServiceCard === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeServiceCard", "reqYuelemeServiceCard");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeServiceCard", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/service-card';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqYuelemeServiceCard, "ReqYuelemeServiceCard", ""),
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
     * 快速发起预约
     * @param reqQuickAppointmentShare 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeServiceQuick(reqQuickAppointmentShare: ReqQuickAppointmentShare, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqQuickAppointmentShare' is not null or undefined
        if (reqQuickAppointmentShare === null || reqQuickAppointmentShare === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeServiceQuick", "reqQuickAppointmentShare");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeServiceQuick", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/service/quick';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqQuickAppointmentShare, "ReqQuickAppointmentShare", ""),
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
     * @param reqCreateUserSymbol 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeSymbol(reqCreateUserSymbol: ReqCreateUserSymbol, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateUserSymbol' is not null or undefined
        if (reqCreateUserSymbol === null || reqCreateUserSymbol === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeSymbol", "reqCreateUserSymbol");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeSymbol", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/symbol';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateUserSymbol, "ReqCreateUserSymbol", ""),
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
     * @param reqGetServiceTime 
     */
    public async postApiYuelemeV1YuelemeTimeAvailableOrganisor(reqGetServiceTime: ReqGetServiceTime, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqGetServiceTime' is not null or undefined
        if (reqGetServiceTime === null || reqGetServiceTime === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeTimeAvailableOrganisor", "reqGetServiceTime");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/time/available/organisor';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqGetServiceTime, "ReqGetServiceTime", ""),
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
     * @param aWithDraw 
     * @param authorization 
     */
    public async postApiYuelemeV1YuelemeWithdrawCreate(aWithDraw: AWithDraw, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'aWithDraw' is not null or undefined
        if (aWithDraw === null || aWithDraw === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeWithdrawCreate", "aWithDraw");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiYuelemeV1YuelemeWithdrawCreate", "authorization");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/withdraw/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(aWithDraw, "AWithDraw", ""),
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
     * @param authorization 
     * @param id 
     */
    public async putApiYuelemeV1YuelemeScheduleDefault(authorization: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "putApiYuelemeV1YuelemeScheduleDefault", "authorization");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DefaultApi", "putApiYuelemeV1YuelemeScheduleDefault", "id");
        }


        // Path Params
        const localVarPath = '/api-yueleme/v1/yueleme/schedule/default';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "number", "int64"));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
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
     * @params response Response returned by the server for a request to deleteApiYuelemeV1YuelemeSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteApiYuelemeV1YuelemeSchedule(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: query parameter id", body, response.headers);
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
     * @params response Response returned by the server for a request to deleteApiYuelemeV1YuelemeServiceItemId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteApiYuelemeV1YuelemeServiceItemId(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: path parameter id", body, response.headers);
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
     * @params response Response returned by the server for a request to getApiYuelemeV1TapirHorseLoginUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1TapirHorseLoginUser(response: ResponseContext): Promise<OptionDataKunUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataKunUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunUser", ""
            ) as OptionDataKunUser;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization", body, response.headers);
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
            const body: OptionDataKunUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunUser", ""
            ) as OptionDataKunUser;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeAddressMy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeAddressMy(response: ResponseContext): Promise<OptionDataYuelemeAddress > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataYuelemeAddress = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataYuelemeAddress", ""
            ) as OptionDataYuelemeAddress;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: query parameter pageNum, Invalid value for: query parameter pageSize, Invalid value for: query parameter pageState", body, response.headers);
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
            const body: OptionDataYuelemeAddress = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataYuelemeAddress", ""
            ) as OptionDataYuelemeAddress;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeAppointment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeAppointment(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkYuelemeAppointment > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkYuelemeAppointment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkYuelemeAppointment", ""
            ) as NoSqlPagingListDataPageMarkYuelemeAppointment;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: query parameter id, Invalid value for: query parameter userId, Invalid value for: query parameter tutorId, Invalid value for: query parameter serviceCardId, Invalid value for: query parameter status, Invalid value for: query parameter pageNum, Invalid value for: query parameter pageSize, Invalid value for: query parameter pageState", body, response.headers);
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
            const body: NoSqlPagingListDataPageMarkYuelemeAppointment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkYuelemeAppointment", ""
            ) as NoSqlPagingListDataPageMarkYuelemeAppointment;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeAppointmentItemId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeAppointmentItemId(response: ResponseContext): Promise<OptionDataYuelemeAppointment > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataYuelemeAppointment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataYuelemeAppointment", ""
            ) as OptionDataYuelemeAppointment;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: path parameter id", body, response.headers);
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
            const body: OptionDataYuelemeAppointment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataYuelemeAppointment", ""
            ) as OptionDataYuelemeAppointment;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeAppointmentOrginaniserList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeAppointmentOrginaniserList(response: ResponseContext): Promise<NoSqlPagingListDataYuelemeAppointment > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataYuelemeAppointment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataYuelemeAppointment", ""
            ) as NoSqlPagingListDataYuelemeAppointment;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: query parameter status, Invalid value for: query parameter pageNum, Invalid value for: query parameter pageSize, Invalid value for: query parameter pageState", body, response.headers);
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
            const body: NoSqlPagingListDataYuelemeAppointment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataYuelemeAppointment", ""
            ) as NoSqlPagingListDataYuelemeAppointment;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeAppointmentServiceUserList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeAppointmentServiceUserList(response: ResponseContext): Promise<NoSqlPagingListDataYuelemeAppointment > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataYuelemeAppointment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataYuelemeAppointment", ""
            ) as NoSqlPagingListDataYuelemeAppointment;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: query parameter status, Invalid value for: query parameter pageNum, Invalid value for: query parameter pageSize, Invalid value for: query parameter pageState", body, response.headers);
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
            const body: NoSqlPagingListDataYuelemeAppointment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataYuelemeAppointment", ""
            ) as NoSqlPagingListDataYuelemeAppointment;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeBalanceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeBalanceGet(response: ResponseContext): Promise<OptionDataUserBalance > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataUserBalance = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataUserBalance", ""
            ) as OptionDataUserBalance;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization", body, response.headers);
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
            const body: OptionDataUserBalance = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataUserBalance", ""
            ) as OptionDataUserBalance;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeBalanceList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeBalanceList(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkBalanceHistory > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkBalanceHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkBalanceHistory", ""
            ) as NoSqlPagingListDataPageMarkBalanceHistory;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: query parameter pageNum, Invalid value for: query parameter pageSize, Invalid value for: query parameter pageState", body, response.headers);
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
            const body: NoSqlPagingListDataPageMarkBalanceHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkBalanceHistory", ""
            ) as NoSqlPagingListDataPageMarkBalanceHistory;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeCalendarId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeCalendarId(response: ResponseContext): Promise<OptionDataScheduleCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataScheduleCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataScheduleCard", ""
            ) as OptionDataScheduleCard;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: path parameter id", body, response.headers);
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
            const body: OptionDataScheduleCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataScheduleCard", ""
            ) as OptionDataScheduleCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeCanlendarMy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeCanlendarMy(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkScheduleCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkScheduleCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkScheduleCard", ""
            ) as NoSqlPagingListDataPageMarkScheduleCard;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: query parameter pageNum, Invalid value for: query parameter pageSize, Invalid value for: query parameter pageState", body, response.headers);
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
            const body: NoSqlPagingListDataPageMarkScheduleCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkScheduleCard", ""
            ) as NoSqlPagingListDataPageMarkScheduleCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemePayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemePayment(response: ResponseContext): Promise<NoSqlPagingListDataPaymentHistory > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPaymentHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPaymentHistory", ""
            ) as NoSqlPagingListDataPaymentHistory;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization", body, response.headers);
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
            const body: NoSqlPagingListDataPaymentHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPaymentHistory", ""
            ) as NoSqlPagingListDataPaymentHistory;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeServiceItemId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeServiceItemId(response: ResponseContext): Promise<OptionDataYuelemeServiceCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataYuelemeServiceCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataYuelemeServiceCard", ""
            ) as OptionDataYuelemeServiceCard;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: path parameter id", body, response.headers);
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
            const body: OptionDataYuelemeServiceCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataYuelemeServiceCard", ""
            ) as OptionDataYuelemeServiceCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeServiceMyList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeServiceMyList(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkYuelemeServiceCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkYuelemeServiceCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkYuelemeServiceCard", ""
            ) as NoSqlPagingListDataPageMarkYuelemeServiceCard;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: query parameter pageNum, Invalid value for: query parameter pageSize, Invalid value for: query parameter pageState", body, response.headers);
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
            const body: NoSqlPagingListDataPageMarkYuelemeServiceCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkYuelemeServiceCard", ""
            ) as NoSqlPagingListDataPageMarkYuelemeServiceCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeServiceQuick
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeServiceQuick(response: ResponseContext): Promise<OptionDataYuelemeAppointment > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataYuelemeAppointment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataYuelemeAppointment", ""
            ) as OptionDataYuelemeAppointment;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
            const body: OptionDataYuelemeAppointment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataYuelemeAppointment", ""
            ) as OptionDataYuelemeAppointment;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeServiceSymbolSymbolName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeServiceSymbolSymbolName(response: ResponseContext): Promise<OptionDataYuelemeServiceCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataYuelemeServiceCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataYuelemeServiceCard", ""
            ) as OptionDataYuelemeServiceCard;
            return body;
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
            const body: OptionDataYuelemeServiceCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataYuelemeServiceCard", ""
            ) as OptionDataYuelemeServiceCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeServiceUserNameList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeServiceUserNameList(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkYuelemeServiceCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkYuelemeServiceCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkYuelemeServiceCard", ""
            ) as NoSqlPagingListDataPageMarkYuelemeServiceCard;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter pageNum, Invalid value for: query parameter pageSize, Invalid value for: query parameter pageState", body, response.headers);
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
            const body: NoSqlPagingListDataPageMarkYuelemeServiceCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkYuelemeServiceCard", ""
            ) as NoSqlPagingListDataPageMarkYuelemeServiceCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeServiceUsersUseridList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeServiceUsersUseridList(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkYuelemeServiceCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkYuelemeServiceCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkYuelemeServiceCard", ""
            ) as NoSqlPagingListDataPageMarkYuelemeServiceCard;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter pageNum, Invalid value for: query parameter pageSize, Invalid value for: query parameter pageState", body, response.headers);
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
            const body: NoSqlPagingListDataPageMarkYuelemeServiceCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkYuelemeServiceCard", ""
            ) as NoSqlPagingListDataPageMarkYuelemeServiceCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeSettingSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeSettingSchedule(response: ResponseContext): Promise<NoSqlPagingListDataScheduleCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataScheduleCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataScheduleCard", ""
            ) as NoSqlPagingListDataScheduleCard;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization", body, response.headers);
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
            const body: NoSqlPagingListDataScheduleCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataScheduleCard", ""
            ) as NoSqlPagingListDataScheduleCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeSymbol
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeSymbol(response: ResponseContext): Promise<OptionDataUserShortName > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataUserShortName = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataUserShortName", ""
            ) as OptionDataUserShortName;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization", body, response.headers);
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
            const body: OptionDataUserShortName = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataUserShortName", ""
            ) as OptionDataUserShortName;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeUserCalendar
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeUserCalendar(response: ResponseContext): Promise<NoSqlPagingListDataUserCalendarRecord > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataUserCalendarRecord = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataUserCalendarRecord", ""
            ) as NoSqlPagingListDataUserCalendarRecord;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
            const body: NoSqlPagingListDataUserCalendarRecord = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataUserCalendarRecord", ""
            ) as NoSqlPagingListDataUserCalendarRecord;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiYuelemeV1YuelemeWithdrawGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiYuelemeV1YuelemeWithdrawGet(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkWithdrawApplicaton > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkWithdrawApplicaton = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkWithdrawApplicaton", ""
            ) as NoSqlPagingListDataPageMarkWithdrawApplicaton;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization", body, response.headers);
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
            const body: NoSqlPagingListDataPageMarkWithdrawApplicaton = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkWithdrawApplicaton", ""
            ) as NoSqlPagingListDataPageMarkWithdrawApplicaton;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchApiYuelemeV1TapirProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchApiYuelemeV1TapirProfile(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to patchApiYuelemeV1YuelemeAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchApiYuelemeV1YuelemeAddress(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to patchApiYuelemeV1YuelemeAppointment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchApiYuelemeV1YuelemeAppointment(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to patchApiYuelemeV1YuelemeCalendar
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchApiYuelemeV1YuelemeCalendar(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to patchApiYuelemeV1YuelemeServiceCard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchApiYuelemeV1YuelemeServiceCard(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to postApiYuelemeV1TapirLoginByPassword
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1TapirLoginByPassword(response: ResponseContext): Promise<OptionDataLong > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataLong = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataLong", ""
            ) as OptionDataLong;
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
            const body: OptionDataLong = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataLong", ""
            ) as OptionDataLong;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiYuelemeV1TapirLoginByPhoneCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1TapirLoginByPhoneCheck(response: ResponseContext): Promise<OptionDataALoginReply > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataALoginReply = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataALoginReply", ""
            ) as OptionDataALoginReply;
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
            const body: OptionDataALoginReply = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataALoginReply", ""
            ) as OptionDataALoginReply;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiYuelemeV1TapirLoginByPhoneSms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1TapirLoginByPhoneSms(response: ResponseContext): Promise<RetMsg > {
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
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeAddress(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeAppointment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeAppointment(response: ResponseContext): Promise<OptionDataLong > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataLong = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataLong", ""
            ) as OptionDataLong;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
            const body: OptionDataLong = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataLong", ""
            ) as OptionDataLong;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeAppointmentCancel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeAppointmentCancel(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeAppointmentConfirm
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeAppointmentConfirm(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeAppointmentConfirmPayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeAppointmentConfirmPayment(response: ResponseContext): Promise<OptionDataWechatPaymentItem > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataWechatPaymentItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataWechatPaymentItem", ""
            ) as OptionDataWechatPaymentItem;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
            const body: OptionDataWechatPaymentItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataWechatPaymentItem", ""
            ) as OptionDataWechatPaymentItem;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeAppointmentItemChange
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeAppointmentItemChange(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeAppointmentOrganizerConfirm
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeAppointmentOrganizerConfirm(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeCalendarCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeCalendarCreate(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeOrganizerStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeOrganizerStatus(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization", body, response.headers);
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
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeRequestAppointment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeRequestAppointment(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeServiceCard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeServiceCard(response: ResponseContext): Promise<OptionDataLong > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataLong = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataLong", ""
            ) as OptionDataLong;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
            const body: OptionDataLong = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataLong", ""
            ) as OptionDataLong;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeServiceQuick
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeServiceQuick(response: ResponseContext): Promise<OptionDataLong > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataLong = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataLong", ""
            ) as OptionDataLong;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
            const body: OptionDataLong = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataLong", ""
            ) as OptionDataLong;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeSymbol
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeSymbol(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeTimeAvailableOrganisor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeTimeAvailableOrganisor(response: ResponseContext): Promise<OptionDataRetGetServiceTime > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataRetGetServiceTime = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataRetGetServiceTime", ""
            ) as OptionDataRetGetServiceTime;
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
            const body: OptionDataRetGetServiceTime = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataRetGetServiceTime", ""
            ) as OptionDataRetGetServiceTime;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiYuelemeV1YuelemeWithdrawCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiYuelemeV1YuelemeWithdrawCreate(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
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
     * @params response Response returned by the server for a request to putApiYuelemeV1YuelemeScheduleDefault
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putApiYuelemeV1YuelemeScheduleDefault(response: ResponseContext): Promise<RetMsg > {
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
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: header Authorization, Invalid value for: query parameter id", body, response.headers);
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
