import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ConstantMSG } from '../models/ConstantMSG';
import { NoSqlPagingListDataPiece } from '../models/NoSqlPagingListDataPiece';
import { NoSqlPagingListDataTheme } from '../models/NoSqlPagingListDataTheme';
import { Piece } from '../models/Piece';
import { PunchClockReq } from '../models/PunchClockReq';
import { RetMsg } from '../models/RetMsg';
import { Theme } from '../models/Theme';
import { UpdateMarkPiece } from '../models/UpdateMarkPiece';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiDeleteApiCircleV1CirclePieceRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApideleteApiCircleV1CirclePiece
     */
    id: number
}

export interface DefaultApiGetApiCircleV1CircleThemeCurrentRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiCircleV1CircleThemeCurrent
     */
    themeId?: number
}

export interface DefaultApiGetApiCircleV1CircleThemeListRequest {
}

export interface DefaultApiPostApiCircleV1CirclePieceCreateRequest {
    /**
     * 
     * @type Piece
     * @memberof DefaultApipostApiCircleV1CirclePieceCreate
     */
    piece: Piece
}

export interface DefaultApiPostApiCircleV1CirclePieceMarkRequest {
    /**
     * 
     * @type UpdateMarkPiece
     * @memberof DefaultApipostApiCircleV1CirclePieceMark
     */
    updateMarkPiece: UpdateMarkPiece
}

export interface DefaultApiPostApiCircleV1CircleThemeCreateRequest {
    /**
     * 
     * @type Theme
     * @memberof DefaultApipostApiCircleV1CircleThemeCreate
     */
    theme: Theme
}

export interface DefaultApiPostApiCircleV1PunchclockCheckRequest {
    /**
     * 
     * @type PunchClockReq
     * @memberof DefaultApipostApiCircleV1PunchclockCheck
     */
    punchClockReq: PunchClockReq
}

export interface DefaultApiPostApiCircleV1PunchclockCreateRequest {
    /**
     * 
     * @type PunchClockReq
     * @memberof DefaultApipostApiCircleV1PunchclockCreate
     */
    punchClockReq: PunchClockReq
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteApiCircleV1CirclePiece(param: DefaultApiDeleteApiCircleV1CirclePieceRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.deleteApiCircleV1CirclePiece(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiCircleV1CircleThemeCurrent(param: DefaultApiGetApiCircleV1CircleThemeCurrentRequest = {}, options?: Configuration): Promise<NoSqlPagingListDataPiece> {
        return this.api.getApiCircleV1CircleThemeCurrent(param.themeId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiCircleV1CircleThemeList(param: DefaultApiGetApiCircleV1CircleThemeListRequest = {}, options?: Configuration): Promise<NoSqlPagingListDataTheme> {
        return this.api.getApiCircleV1CircleThemeList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiCircleV1CirclePieceCreate(param: DefaultApiPostApiCircleV1CirclePieceCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiCircleV1CirclePieceCreate(param.piece,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiCircleV1CirclePieceMark(param: DefaultApiPostApiCircleV1CirclePieceMarkRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiCircleV1CirclePieceMark(param.updateMarkPiece,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiCircleV1CircleThemeCreate(param: DefaultApiPostApiCircleV1CircleThemeCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiCircleV1CircleThemeCreate(param.theme,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiCircleV1PunchclockCheck(param: DefaultApiPostApiCircleV1PunchclockCheckRequest, options?: Configuration): Promise<boolean> {
        return this.api.postApiCircleV1PunchclockCheck(param.punchClockReq,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiCircleV1PunchclockCreate(param: DefaultApiPostApiCircleV1PunchclockCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiCircleV1PunchclockCreate(param.punchClockReq,  options).toPromise();
    }

}
