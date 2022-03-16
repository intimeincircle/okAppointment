import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ALoginReply } from '../models/ALoginReply';
import { AWithDraw } from '../models/AWithDraw';
import { AppointmentEventLog } from '../models/AppointmentEventLog';
import { AppointmentTime } from '../models/AppointmentTime';
import { BalanceHistory } from '../models/BalanceHistory';
import { BucketImage } from '../models/BucketImage';
import { ConstIsTutor } from '../models/ConstIsTutor';
import { ConstServiceCardType } from '../models/ConstServiceCardType';
import { ConstantAppointmentAction } from '../models/ConstantAppointmentAction';
import { ConstantAppointmentStatus } from '../models/ConstantAppointmentStatus';
import { ConstantChargeType } from '../models/ConstantChargeType';
import { ConstantDeliveryType } from '../models/ConstantDeliveryType';
import { ConstantFillType } from '../models/ConstantFillType';
import { ConstantGenderStatus } from '../models/ConstantGenderStatus';
import { ConstantGetMoneyType } from '../models/ConstantGetMoneyType';
import { ConstantMSG } from '../models/ConstantMSG';
import { ConstantOnSelfStatus } from '../models/ConstantOnSelfStatus';
import { ConstantOrganizerRole } from '../models/ConstantOrganizerRole';
import { ConstantPaymentStatus } from '../models/ConstantPaymentStatus';
import { ConstantWithdrawStatus1 } from '../models/ConstantWithdrawStatus1';
import { ConstantYuelemeScheduleStatus } from '../models/ConstantYuelemeScheduleStatus';
import { DeliveryContent } from '../models/DeliveryContent';
import { FillInItem } from '../models/FillInItem';
import { FillInItemValue } from '../models/FillInItemValue';
import { KunUser } from '../models/KunUser';
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
import { PaymentHistory } from '../models/PaymentHistory';
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
import { RetGetServiceTime } from '../models/RetGetServiceTime';
import { RetMsg } from '../models/RetMsg';
import { RichFragement } from '../models/RichFragement';
import { ScheduleCard } from '../models/ScheduleCard';
import { UserBalance } from '../models/UserBalance';
import { UserCalendarRecord } from '../models/UserCalendarRecord';
import { UserShortName } from '../models/UserShortName';
import { WechatPaymentItem } from '../models/WechatPaymentItem';
import { WithdrawApplicaton } from '../models/WithdrawApplicaton';
import { YuelemeAddress } from '../models/YuelemeAddress';
import { YuelemeAppointment } from '../models/YuelemeAppointment';
import { YuelemeServiceCard } from '../models/YuelemeServiceCard';

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
     * @param authorization 
     * @param id 
     */
    public deleteApiYuelemeV1YuelemeSchedule(authorization: string, id: number, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.deleteApiYuelemeV1YuelemeSchedule(authorization, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApiYuelemeV1YuelemeSchedule(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param id 
     */
    public deleteApiYuelemeV1YuelemeServiceItemId(authorization: string, id: number, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.deleteApiYuelemeV1YuelemeServiceItemId(authorization, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApiYuelemeV1YuelemeServiceItemId(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1TapirHorseLoginUser(authorization: string, _options?: Configuration): Observable<OptionDataKunUser> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1TapirHorseLoginUser(authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1TapirHorseLoginUser(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeAddressMy(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Observable<OptionDataYuelemeAddress> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeAddressMy(authorization, pageNum, pageSize, pageState, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeAddressMy(rsp)));
            }));
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
    public getApiYuelemeV1YuelemeAppointment(authorization: string, id?: number, userId?: string, tutorId?: string, serviceCardId?: number, status?: ConstantAppointmentStatus, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkYuelemeAppointment> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeAppointment(authorization, id, userId, tutorId, serviceCardId, status, pageNum, pageSize, pageState, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeAppointment(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param id 
     */
    public getApiYuelemeV1YuelemeAppointmentItemId(authorization: string, id: number, _options?: Configuration): Observable<OptionDataYuelemeAppointment> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeAppointmentItemId(authorization, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeAppointmentItemId(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param status 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeAppointmentOrginaniserList(authorization: string, status?: ConstantAppointmentStatus, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Observable<NoSqlPagingListDataYuelemeAppointment> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeAppointmentOrginaniserList(authorization, status, pageNum, pageSize, pageState, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeAppointmentOrginaniserList(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param status 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeAppointmentServiceUserList(authorization: string, status?: ConstantAppointmentStatus, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Observable<NoSqlPagingListDataYuelemeAppointment> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeAppointmentServiceUserList(authorization, status, pageNum, pageSize, pageState, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeAppointmentServiceUserList(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeBalanceGet(authorization: string, _options?: Configuration): Observable<OptionDataUserBalance> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeBalanceGet(authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeBalanceGet(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeBalanceList(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkBalanceHistory> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeBalanceList(authorization, pageNum, pageSize, pageState, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeBalanceList(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param id 
     */
    public getApiYuelemeV1YuelemeCalendarId(authorization: string, id: number, _options?: Configuration): Observable<OptionDataScheduleCard> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeCalendarId(authorization, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeCalendarId(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeCanlendarMy(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkScheduleCard> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeCanlendarMy(authorization, pageNum, pageSize, pageState, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeCanlendarMy(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1YuelemePayment(authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataPaymentHistory> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemePayment(authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemePayment(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param id 
     */
    public getApiYuelemeV1YuelemeServiceItemId(authorization: string, id: number, _options?: Configuration): Observable<OptionDataYuelemeServiceCard> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeServiceItemId(authorization, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeServiceItemId(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeServiceMyList(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkYuelemeServiceCard> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeServiceMyList(authorization, pageNum, pageSize, pageState, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeServiceMyList(rsp)));
            }));
    }

    /**
     * 查询某个预约
     * @param reqGetQuickAppointment 
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeServiceQuick(reqGetQuickAppointment: ReqGetQuickAppointment, authorization: string, _options?: Configuration): Observable<OptionDataYuelemeAppointment> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeServiceQuick(reqGetQuickAppointment, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeServiceQuick(rsp)));
            }));
    }

    /**
     * @param symbol 
     * @param name 
     */
    public getApiYuelemeV1YuelemeServiceSymbolSymbolName(symbol: string, name: string, _options?: Configuration): Observable<OptionDataYuelemeServiceCard> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeServiceSymbolSymbolName(symbol, name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeServiceSymbolSymbolName(rsp)));
            }));
    }

    /**
     * @param userName 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeServiceUserNameList(userName: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkYuelemeServiceCard> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeServiceUserNameList(userName, pageNum, pageSize, pageState, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeServiceUserNameList(rsp)));
            }));
    }

    /**
     * @param userId 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeServiceUsersUseridList(userId: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkYuelemeServiceCard> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeServiceUsersUseridList(userId, pageNum, pageSize, pageState, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeServiceUsersUseridList(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeSettingSchedule(authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataScheduleCard> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeSettingSchedule(authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeSettingSchedule(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeSymbol(authorization: string, _options?: Configuration): Observable<OptionDataUserShortName> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeSymbol(authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeSymbol(rsp)));
            }));
    }

    /**
     * 获取用户空余时间
     * @param reqGetCalendar 
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeUserCalendar(reqGetCalendar: ReqGetCalendar, authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataUserCalendarRecord> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeUserCalendar(reqGetCalendar, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeUserCalendar(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeWithdrawGet(authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkWithdrawApplicaton> {
        const requestContextPromise = this.requestFactory.getApiYuelemeV1YuelemeWithdrawGet(authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiYuelemeV1YuelemeWithdrawGet(rsp)));
            }));
    }

    /**
     * @param reqPatchKunPartial 
     * @param authorization 
     */
    public patchApiYuelemeV1TapirProfile(reqPatchKunPartial: ReqPatchKunPartial, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.patchApiYuelemeV1TapirProfile(reqPatchKunPartial, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchApiYuelemeV1TapirProfile(rsp)));
            }));
    }

    /**
     * @param reqPatchAddress 
     * @param authorization 
     */
    public patchApiYuelemeV1YuelemeAddress(reqPatchAddress: ReqPatchAddress, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.patchApiYuelemeV1YuelemeAddress(reqPatchAddress, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchApiYuelemeV1YuelemeAddress(rsp)));
            }));
    }

    /**
     * @param reqPatchAppointment 
     * @param authorization 
     */
    public patchApiYuelemeV1YuelemeAppointment(reqPatchAppointment: ReqPatchAppointment, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.patchApiYuelemeV1YuelemeAppointment(reqPatchAppointment, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchApiYuelemeV1YuelemeAppointment(rsp)));
            }));
    }

    /**
     * @param reqPatchSchedule 
     * @param authorization 
     */
    public patchApiYuelemeV1YuelemeCalendar(reqPatchSchedule: ReqPatchSchedule, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.patchApiYuelemeV1YuelemeCalendar(reqPatchSchedule, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchApiYuelemeV1YuelemeCalendar(rsp)));
            }));
    }

    /**
     * @param reqPatchServiceCard 
     * @param authorization 
     */
    public patchApiYuelemeV1YuelemeServiceCard(reqPatchServiceCard: ReqPatchServiceCard, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.patchApiYuelemeV1YuelemeServiceCard(reqPatchServiceCard, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchApiYuelemeV1YuelemeServiceCard(rsp)));
            }));
    }

    /**
     * @param loginTribeUser 
     */
    public postApiYuelemeV1TapirLoginByPassword(loginTribeUser: LoginTribeUser, _options?: Configuration): Observable<OptionDataLong> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1TapirLoginByPassword(loginTribeUser, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1TapirLoginByPassword(rsp)));
            }));
    }

    /**
     * @param loginPhoneConfirm 
     */
    public postApiYuelemeV1TapirLoginByPhoneCheck(loginPhoneConfirm: LoginPhoneConfirm, _options?: Configuration): Observable<OptionDataALoginReply> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1TapirLoginByPhoneCheck(loginPhoneConfirm, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1TapirLoginByPhoneCheck(rsp)));
            }));
    }

    /**
     * @param loginPhoneConfirmCheck 
     */
    public postApiYuelemeV1TapirLoginByPhoneSms(loginPhoneConfirmCheck: LoginPhoneConfirmCheck, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1TapirLoginByPhoneSms(loginPhoneConfirmCheck, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1TapirLoginByPhoneSms(rsp)));
            }));
    }

    /**
     * @param reqStoreAddress 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAddress(reqStoreAddress: ReqStoreAddress, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeAddress(reqStoreAddress, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeAddress(rsp)));
            }));
    }

    /**
     * @param reqStartAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointment(reqStartAppointment: ReqStartAppointment, authorization: string, _options?: Configuration): Observable<OptionDataLong> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeAppointment(reqStartAppointment, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeAppointment(rsp)));
            }));
    }

    /**
     * 申请取消某个预约
     * @param reqCancelAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointmentCancel(reqCancelAppointment: ReqCancelAppointment, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeAppointmentCancel(reqCancelAppointment, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeAppointmentCancel(rsp)));
            }));
    }

    /**
     * 确认某个预约
     * @param reqConfirmAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointmentConfirm(reqConfirmAppointment: ReqConfirmAppointment, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeAppointmentConfirm(reqConfirmAppointment, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeAppointmentConfirm(rsp)));
            }));
    }

    /**
     * 支付某个预约
     * @param reqConfirmAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointmentConfirmPayment(reqConfirmAppointment: ReqConfirmAppointment, authorization: string, _options?: Configuration): Observable<OptionDataWechatPaymentItem> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeAppointmentConfirmPayment(reqConfirmAppointment, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeAppointmentConfirmPayment(rsp)));
            }));
    }

    /**
     * @param reqChangeAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointmentItemChange(reqChangeAppointment: ReqChangeAppointment, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeAppointmentItemChange(reqChangeAppointment, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeAppointmentItemChange(rsp)));
            }));
    }

    /**
     * 确认取消某个预约
     * @param reqCancelAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointmentOrganizerConfirm(reqCancelAppointment: ReqCancelAppointment, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeAppointmentOrganizerConfirm(reqCancelAppointment, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeAppointmentOrganizerConfirm(rsp)));
            }));
    }

    /**
     * @param reqCreateSchedule 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeCalendarCreate(reqCreateSchedule: ReqCreateSchedule, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeCalendarCreate(reqCreateSchedule, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeCalendarCreate(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeOrganizerStatus(authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeOrganizerStatus(authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeOrganizerStatus(rsp)));
            }));
    }

    /**
     * @param reqChange2Appointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeRequestAppointment(reqChange2Appointment: ReqChange2Appointment, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeRequestAppointment(reqChange2Appointment, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeRequestAppointment(rsp)));
            }));
    }

    /**
     * @param reqYuelemeServiceCard 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeServiceCard(reqYuelemeServiceCard: ReqYuelemeServiceCard, authorization: string, _options?: Configuration): Observable<OptionDataLong> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeServiceCard(reqYuelemeServiceCard, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeServiceCard(rsp)));
            }));
    }

    /**
     * 快速发起预约
     * @param reqQuickAppointmentShare 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeServiceQuick(reqQuickAppointmentShare: ReqQuickAppointmentShare, authorization: string, _options?: Configuration): Observable<OptionDataLong> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeServiceQuick(reqQuickAppointmentShare, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeServiceQuick(rsp)));
            }));
    }

    /**
     * @param reqCreateUserSymbol 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeSymbol(reqCreateUserSymbol: ReqCreateUserSymbol, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeSymbol(reqCreateUserSymbol, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeSymbol(rsp)));
            }));
    }

    /**
     * @param reqGetServiceTime 
     */
    public postApiYuelemeV1YuelemeTimeAvailableOrganisor(reqGetServiceTime: ReqGetServiceTime, _options?: Configuration): Observable<OptionDataRetGetServiceTime> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeTimeAvailableOrganisor(reqGetServiceTime, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeTimeAvailableOrganisor(rsp)));
            }));
    }

    /**
     * @param aWithDraw 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeWithdrawCreate(aWithDraw: AWithDraw, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiYuelemeV1YuelemeWithdrawCreate(aWithDraw, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiYuelemeV1YuelemeWithdrawCreate(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param id 
     */
    public putApiYuelemeV1YuelemeScheduleDefault(authorization: string, id: number, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.putApiYuelemeV1YuelemeScheduleDefault(authorization, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putApiYuelemeV1YuelemeScheduleDefault(rsp)));
            }));
    }

}
