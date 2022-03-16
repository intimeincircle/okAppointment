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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     */
    public deleteApiCircleV1CirclePiece(id: number, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.deleteApiCircleV1CirclePiece(id, _options);
        return result.toPromise();
    }

    /**
     * @param themeId 
     */
    public getApiCircleV1CircleThemeCurrent(themeId?: number, _options?: Configuration): Promise<NoSqlPagingListDataPiece> {
        const result = this.api.getApiCircleV1CircleThemeCurrent(themeId, _options);
        return result.toPromise();
    }

    /**
     */
    public getApiCircleV1CircleThemeList(_options?: Configuration): Promise<NoSqlPagingListDataTheme> {
        const result = this.api.getApiCircleV1CircleThemeList(_options);
        return result.toPromise();
    }

    /**
     * @param piece 
     */
    public postApiCircleV1CirclePieceCreate(piece: Piece, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiCircleV1CirclePieceCreate(piece, _options);
        return result.toPromise();
    }

    /**
     * @param updateMarkPiece 
     */
    public postApiCircleV1CirclePieceMark(updateMarkPiece: UpdateMarkPiece, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiCircleV1CirclePieceMark(updateMarkPiece, _options);
        return result.toPromise();
    }

    /**
     * @param theme 
     */
    public postApiCircleV1CircleThemeCreate(theme: Theme, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiCircleV1CircleThemeCreate(theme, _options);
        return result.toPromise();
    }

    /**
     * @param punchClockReq 
     */
    public postApiCircleV1PunchclockCheck(punchClockReq: PunchClockReq, _options?: Configuration): Promise<boolean> {
        const result = this.api.postApiCircleV1PunchclockCheck(punchClockReq, _options);
        return result.toPromise();
    }

    /**
     * @param punchClockReq 
     */
    public postApiCircleV1PunchclockCreate(punchClockReq: PunchClockReq, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiCircleV1PunchclockCreate(punchClockReq, _options);
        return result.toPromise();
    }


}



