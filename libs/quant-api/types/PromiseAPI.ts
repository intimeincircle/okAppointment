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
     * 这是个api
     * @param code 
     * @param type 
     * @param period 
     */
    public getQuantV2HistoryIndexDailyChaodieEvents(code: string, type: string, period: string, _options?: Configuration): Promise<Array<IndexHistoryJoda>> {
        const result = this.api.getQuantV2HistoryIndexDailyChaodieEvents(code, type, period, _options);
        return result.toPromise();
    }

    /**
     * 这是个api
     * @param code 
     * @param type 
     * @param period 
     */
    public getQuantV2HistoryStockDaily(code: string, type: string, period: string, _options?: Configuration): Promise<RetStock> {
        const result = this.api.getQuantV2HistoryStockDaily(code, type, period, _options);
        return result.toPromise();
    }

    /**
     * 这是个api
     * @param code 
     * @param type 
     * @param period 
     */
    public getQuantV2HistoryStockDailyChaodieEvents(code: string, type: string, period: string, _options?: Configuration): Promise<RetListWithEventStock> {
        const result = this.api.getQuantV2HistoryStockDailyChaodieEvents(code, type, period, _options);
        return result.toPromise();
    }

    /**
     * 鸡蛋api
     */
    public getQuantV2QuantBoatEgg(_options?: Configuration): Promise<Array<ABoatEgg>> {
        const result = this.api.getQuantV2QuantBoatEgg(_options);
        return result.toPromise();
    }

    /**
     * 这是个api
     * @param symbol 
     */
    public getQuantV2QuantBoatPig(symbol: PigSymbol, _options?: Configuration): Promise<Array<FuturesPigInfoResponse>> {
        const result = this.api.getQuantV2QuantBoatPig(symbol, _options);
        return result.toPromise();
    }

    /**
     * 这是个api
     * @param code 
     */
    public getQuantV2SecurityDataCaiwu(code: string, _options?: Configuration): Promise<Array<RespstockFinancialAnalysisIndicatorResponse>> {
        const result = this.api.getQuantV2SecurityDataCaiwu(code, _options);
        return result.toPromise();
    }

    /**
     * 这是个api
     * @param code 
     */
    public getQuantV2SecurityIndicatorChaodie(code: string, _options?: Configuration): Promise<RetStockChaoDie> {
        const result = this.api.getQuantV2SecurityIndicatorChaodie(code, _options);
        return result.toPromise();
    }

    /**
     * 这是个api
     * @param code 
     */
    public getQuantV2SecurityIndicatorPanming(code: string, _options?: Configuration): Promise<Array<PanMingChaoDieItem2>> {
        const result = this.api.getQuantV2SecurityIndicatorPanming(code, _options);
        return result.toPromise();
    }

    /**
     * 这是个api
     * @param code 
     */
    public getQuantV2SecurityInfoStock(code: string, _options?: Configuration): Promise<StockInfo> {
        const result = this.api.getQuantV2SecurityInfoStock(code, _options);
        return result.toPromise();
    }


}



