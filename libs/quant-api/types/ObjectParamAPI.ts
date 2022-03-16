import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ABoatEgg } from '../models/ABoatEgg';
import { EventStock } from '../models/EventStock';
import { FuturesPigInfoResponse } from '../models/FuturesPigInfoResponse';
import { IndexDailyPriceJodata } from '../models/IndexDailyPriceJodata';
import { IndexHistoryJoda } from '../models/IndexHistoryJoda';
import { PanMingChaoDieItem2 } from '../models/PanMingChaoDieItem2';
import { PigSymbol } from '../models/PigSymbol';
import { RespstockFinancialAnalysisIndicatorResponse } from '../models/RespstockFinancialAnalysisIndicatorResponse';
import { RetListWithEventStock } from '../models/RetListWithEventStock';
import { RetStock } from '../models/RetStock';
import { RetStockChaoDie } from '../models/RetStockChaoDie';
import { ReturnMsg } from '../models/ReturnMsg';
import { StockChaoDieJoda } from '../models/StockChaoDieJoda';
import { StockInfo } from '../models/StockInfo';
import { StockNote } from '../models/StockNote';
import { WeatherStation1 } from '../models/WeatherStation1';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetQuantV2HistoryIndexDailyChaodieEventsRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2HistoryIndexDailyChaodieEvents
     */
    code: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2HistoryIndexDailyChaodieEvents
     */
    type: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2HistoryIndexDailyChaodieEvents
     */
    period: string
}

export interface DefaultApiGetQuantV2HistoryStockDailyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2HistoryStockDaily
     */
    code: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2HistoryStockDaily
     */
    type: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2HistoryStockDaily
     */
    period: string
}

export interface DefaultApiGetQuantV2HistoryStockDailyChaodieEventsRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2HistoryStockDailyChaodieEvents
     */
    code: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2HistoryStockDailyChaodieEvents
     */
    type: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2HistoryStockDailyChaodieEvents
     */
    period: string
}

export interface DefaultApiGetQuantV2QuantBoatEggRequest {
}

export interface DefaultApiGetQuantV2QuantBoatPigRequest {
    /**
     * 
     * @type PigSymbol
     * @memberof DefaultApigetQuantV2QuantBoatPig
     */
    symbol: PigSymbol
}

export interface DefaultApiGetQuantV2SecurityDataCaiwuRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2SecurityDataCaiwu
     */
    code: string
}

export interface DefaultApiGetQuantV2SecurityIndicatorChaodieRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2SecurityIndicatorChaodie
     */
    code: string
}

export interface DefaultApiGetQuantV2SecurityIndicatorPanmingRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2SecurityIndicatorPanming
     */
    code: string
}

export interface DefaultApiGetQuantV2SecurityInfoStockRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetQuantV2SecurityInfoStock
     */
    code: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * 这是个api
     * @param param the request object
     */
    public getQuantV2HistoryIndexDailyChaodieEvents(param: DefaultApiGetQuantV2HistoryIndexDailyChaodieEventsRequest, options?: Configuration): Promise<Array<IndexHistoryJoda>> {
        return this.api.getQuantV2HistoryIndexDailyChaodieEvents(param.code, param.type, param.period,  options).toPromise();
    }

    /**
     * 这是个api
     * @param param the request object
     */
    public getQuantV2HistoryStockDaily(param: DefaultApiGetQuantV2HistoryStockDailyRequest, options?: Configuration): Promise<RetStock> {
        return this.api.getQuantV2HistoryStockDaily(param.code, param.type, param.period,  options).toPromise();
    }

    /**
     * 这是个api
     * @param param the request object
     */
    public getQuantV2HistoryStockDailyChaodieEvents(param: DefaultApiGetQuantV2HistoryStockDailyChaodieEventsRequest, options?: Configuration): Promise<RetListWithEventStock> {
        return this.api.getQuantV2HistoryStockDailyChaodieEvents(param.code, param.type, param.period,  options).toPromise();
    }

    /**
     * 鸡蛋api
     * @param param the request object
     */
    public getQuantV2QuantBoatEgg(param: DefaultApiGetQuantV2QuantBoatEggRequest = {}, options?: Configuration): Promise<Array<ABoatEgg>> {
        return this.api.getQuantV2QuantBoatEgg( options).toPromise();
    }

    /**
     * 这是个api
     * @param param the request object
     */
    public getQuantV2QuantBoatPig(param: DefaultApiGetQuantV2QuantBoatPigRequest, options?: Configuration): Promise<Array<FuturesPigInfoResponse>> {
        return this.api.getQuantV2QuantBoatPig(param.symbol,  options).toPromise();
    }

    /**
     * 这是个api
     * @param param the request object
     */
    public getQuantV2SecurityDataCaiwu(param: DefaultApiGetQuantV2SecurityDataCaiwuRequest, options?: Configuration): Promise<Array<RespstockFinancialAnalysisIndicatorResponse>> {
        return this.api.getQuantV2SecurityDataCaiwu(param.code,  options).toPromise();
    }

    /**
     * 这是个api
     * @param param the request object
     */
    public getQuantV2SecurityIndicatorChaodie(param: DefaultApiGetQuantV2SecurityIndicatorChaodieRequest, options?: Configuration): Promise<RetStockChaoDie> {
        return this.api.getQuantV2SecurityIndicatorChaodie(param.code,  options).toPromise();
    }

    /**
     * 这是个api
     * @param param the request object
     */
    public getQuantV2SecurityIndicatorPanming(param: DefaultApiGetQuantV2SecurityIndicatorPanmingRequest, options?: Configuration): Promise<Array<PanMingChaoDieItem2>> {
        return this.api.getQuantV2SecurityIndicatorPanming(param.code,  options).toPromise();
    }

    /**
     * 这是个api
     * @param param the request object
     */
    public getQuantV2SecurityInfoStock(param: DefaultApiGetQuantV2SecurityInfoStockRequest, options?: Configuration): Promise<StockInfo> {
        return this.api.getQuantV2SecurityInfoStock(param.code,  options).toPromise();
    }

}
