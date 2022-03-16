import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * 这是个api
     * @param code 
     * @param type 
     * @param period 
     */
    public getQuantV2HistoryIndexDailyChaodieEvents(code: string, type: string, period: string, _options?: Configuration): Observable<Array<IndexHistoryJoda>> {
        const requestContextPromise = this.requestFactory.getQuantV2HistoryIndexDailyChaodieEvents(code, type, period, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQuantV2HistoryIndexDailyChaodieEvents(rsp)));
            }));
    }

    /**
     * 这是个api
     * @param code 
     * @param type 
     * @param period 
     */
    public getQuantV2HistoryStockDaily(code: string, type: string, period: string, _options?: Configuration): Observable<RetStock> {
        const requestContextPromise = this.requestFactory.getQuantV2HistoryStockDaily(code, type, period, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQuantV2HistoryStockDaily(rsp)));
            }));
    }

    /**
     * 这是个api
     * @param code 
     * @param type 
     * @param period 
     */
    public getQuantV2HistoryStockDailyChaodieEvents(code: string, type: string, period: string, _options?: Configuration): Observable<RetListWithEventStock> {
        const requestContextPromise = this.requestFactory.getQuantV2HistoryStockDailyChaodieEvents(code, type, period, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQuantV2HistoryStockDailyChaodieEvents(rsp)));
            }));
    }

    /**
     * 鸡蛋api
     */
    public getQuantV2QuantBoatEgg(_options?: Configuration): Observable<Array<ABoatEgg>> {
        const requestContextPromise = this.requestFactory.getQuantV2QuantBoatEgg(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQuantV2QuantBoatEgg(rsp)));
            }));
    }

    /**
     * 这是个api
     * @param symbol 
     */
    public getQuantV2QuantBoatPig(symbol: PigSymbol, _options?: Configuration): Observable<Array<FuturesPigInfoResponse>> {
        const requestContextPromise = this.requestFactory.getQuantV2QuantBoatPig(symbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQuantV2QuantBoatPig(rsp)));
            }));
    }

    /**
     * 这是个api
     * @param code 
     */
    public getQuantV2SecurityDataCaiwu(code: string, _options?: Configuration): Observable<Array<RespstockFinancialAnalysisIndicatorResponse>> {
        const requestContextPromise = this.requestFactory.getQuantV2SecurityDataCaiwu(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQuantV2SecurityDataCaiwu(rsp)));
            }));
    }

    /**
     * 这是个api
     * @param code 
     */
    public getQuantV2SecurityIndicatorChaodie(code: string, _options?: Configuration): Observable<RetStockChaoDie> {
        const requestContextPromise = this.requestFactory.getQuantV2SecurityIndicatorChaodie(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQuantV2SecurityIndicatorChaodie(rsp)));
            }));
    }

    /**
     * 这是个api
     * @param code 
     */
    public getQuantV2SecurityIndicatorPanming(code: string, _options?: Configuration): Observable<Array<PanMingChaoDieItem2>> {
        const requestContextPromise = this.requestFactory.getQuantV2SecurityIndicatorPanming(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQuantV2SecurityIndicatorPanming(rsp)));
            }));
    }

    /**
     * 这是个api
     * @param code 
     */
    public getQuantV2SecurityInfoStock(code: string, _options?: Configuration): Observable<StockInfo> {
        const requestContextPromise = this.requestFactory.getQuantV2SecurityInfoStock(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQuantV2SecurityInfoStock(rsp)));
            }));
    }

}
