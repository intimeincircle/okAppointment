import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

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
     * @param authorization 
     * @param id 
     */
    public deleteApiYuelemeV1YuelemeSchedule(authorization: string, id: number, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.deleteApiYuelemeV1YuelemeSchedule(authorization, id, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param id 
     */
    public deleteApiYuelemeV1YuelemeServiceItemId(authorization: string, id: number, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.deleteApiYuelemeV1YuelemeServiceItemId(authorization, id, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1TapirHorseLoginUser(authorization: string, _options?: Configuration): Promise<OptionDataKunUser> {
        const result = this.api.getApiYuelemeV1TapirHorseLoginUser(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeAddressMy(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<OptionDataYuelemeAddress> {
        const result = this.api.getApiYuelemeV1YuelemeAddressMy(authorization, pageNum, pageSize, pageState, _options);
        return result.toPromise();
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
    public getApiYuelemeV1YuelemeAppointment(authorization: string, id?: number, userId?: string, tutorId?: string, serviceCardId?: number, status?: ConstantAppointmentStatus, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkYuelemeAppointment> {
        const result = this.api.getApiYuelemeV1YuelemeAppointment(authorization, id, userId, tutorId, serviceCardId, status, pageNum, pageSize, pageState, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param id 
     */
    public getApiYuelemeV1YuelemeAppointmentItemId(authorization: string, id: number, _options?: Configuration): Promise<OptionDataYuelemeAppointment> {
        const result = this.api.getApiYuelemeV1YuelemeAppointmentItemId(authorization, id, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param status 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeAppointmentOrginaniserList(authorization: string, status?: ConstantAppointmentStatus, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<NoSqlPagingListDataYuelemeAppointment> {
        const result = this.api.getApiYuelemeV1YuelemeAppointmentOrginaniserList(authorization, status, pageNum, pageSize, pageState, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param status 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeAppointmentServiceUserList(authorization: string, status?: ConstantAppointmentStatus, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<NoSqlPagingListDataYuelemeAppointment> {
        const result = this.api.getApiYuelemeV1YuelemeAppointmentServiceUserList(authorization, status, pageNum, pageSize, pageState, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeBalanceGet(authorization: string, _options?: Configuration): Promise<OptionDataUserBalance> {
        const result = this.api.getApiYuelemeV1YuelemeBalanceGet(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeBalanceList(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkBalanceHistory> {
        const result = this.api.getApiYuelemeV1YuelemeBalanceList(authorization, pageNum, pageSize, pageState, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param id 
     */
    public getApiYuelemeV1YuelemeCalendarId(authorization: string, id: number, _options?: Configuration): Promise<OptionDataScheduleCard> {
        const result = this.api.getApiYuelemeV1YuelemeCalendarId(authorization, id, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeCanlendarMy(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkScheduleCard> {
        const result = this.api.getApiYuelemeV1YuelemeCanlendarMy(authorization, pageNum, pageSize, pageState, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1YuelemePayment(authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataPaymentHistory> {
        const result = this.api.getApiYuelemeV1YuelemePayment(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param id 
     */
    public getApiYuelemeV1YuelemeServiceItemId(authorization: string, id: number, _options?: Configuration): Promise<OptionDataYuelemeServiceCard> {
        const result = this.api.getApiYuelemeV1YuelemeServiceItemId(authorization, id, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeServiceMyList(authorization: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkYuelemeServiceCard> {
        const result = this.api.getApiYuelemeV1YuelemeServiceMyList(authorization, pageNum, pageSize, pageState, _options);
        return result.toPromise();
    }

    /**
     * 查询某个预约
     * @param reqGetQuickAppointment 
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeServiceQuick(reqGetQuickAppointment: ReqGetQuickAppointment, authorization: string, _options?: Configuration): Promise<OptionDataYuelemeAppointment> {
        const result = this.api.getApiYuelemeV1YuelemeServiceQuick(reqGetQuickAppointment, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param symbol 
     * @param name 
     */
    public getApiYuelemeV1YuelemeServiceSymbolSymbolName(symbol: string, name: string, _options?: Configuration): Promise<OptionDataYuelemeServiceCard> {
        const result = this.api.getApiYuelemeV1YuelemeServiceSymbolSymbolName(symbol, name, _options);
        return result.toPromise();
    }

    /**
     * @param userName 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeServiceUserNameList(userName: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkYuelemeServiceCard> {
        const result = this.api.getApiYuelemeV1YuelemeServiceUserNameList(userName, pageNum, pageSize, pageState, _options);
        return result.toPromise();
    }

    /**
     * @param userId 
     * @param pageNum 
     * @param pageSize 
     * @param pageState 
     */
    public getApiYuelemeV1YuelemeServiceUsersUseridList(userId: string, pageNum?: number, pageSize?: number, pageState?: string, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkYuelemeServiceCard> {
        const result = this.api.getApiYuelemeV1YuelemeServiceUsersUseridList(userId, pageNum, pageSize, pageState, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeSettingSchedule(authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataScheduleCard> {
        const result = this.api.getApiYuelemeV1YuelemeSettingSchedule(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeSymbol(authorization: string, _options?: Configuration): Promise<OptionDataUserShortName> {
        const result = this.api.getApiYuelemeV1YuelemeSymbol(authorization, _options);
        return result.toPromise();
    }

    /**
     * 获取用户空余时间
     * @param reqGetCalendar 
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeUserCalendar(reqGetCalendar: ReqGetCalendar, authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataUserCalendarRecord> {
        const result = this.api.getApiYuelemeV1YuelemeUserCalendar(reqGetCalendar, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiYuelemeV1YuelemeWithdrawGet(authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkWithdrawApplicaton> {
        const result = this.api.getApiYuelemeV1YuelemeWithdrawGet(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqPatchKunPartial 
     * @param authorization 
     */
    public patchApiYuelemeV1TapirProfile(reqPatchKunPartial: ReqPatchKunPartial, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.patchApiYuelemeV1TapirProfile(reqPatchKunPartial, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqPatchAddress 
     * @param authorization 
     */
    public patchApiYuelemeV1YuelemeAddress(reqPatchAddress: ReqPatchAddress, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.patchApiYuelemeV1YuelemeAddress(reqPatchAddress, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqPatchAppointment 
     * @param authorization 
     */
    public patchApiYuelemeV1YuelemeAppointment(reqPatchAppointment: ReqPatchAppointment, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.patchApiYuelemeV1YuelemeAppointment(reqPatchAppointment, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqPatchSchedule 
     * @param authorization 
     */
    public patchApiYuelemeV1YuelemeCalendar(reqPatchSchedule: ReqPatchSchedule, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.patchApiYuelemeV1YuelemeCalendar(reqPatchSchedule, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqPatchServiceCard 
     * @param authorization 
     */
    public patchApiYuelemeV1YuelemeServiceCard(reqPatchServiceCard: ReqPatchServiceCard, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.patchApiYuelemeV1YuelemeServiceCard(reqPatchServiceCard, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param loginTribeUser 
     */
    public postApiYuelemeV1TapirLoginByPassword(loginTribeUser: LoginTribeUser, _options?: Configuration): Promise<OptionDataLong> {
        const result = this.api.postApiYuelemeV1TapirLoginByPassword(loginTribeUser, _options);
        return result.toPromise();
    }

    /**
     * @param loginPhoneConfirm 
     */
    public postApiYuelemeV1TapirLoginByPhoneCheck(loginPhoneConfirm: LoginPhoneConfirm, _options?: Configuration): Promise<OptionDataALoginReply> {
        const result = this.api.postApiYuelemeV1TapirLoginByPhoneCheck(loginPhoneConfirm, _options);
        return result.toPromise();
    }

    /**
     * @param loginPhoneConfirmCheck 
     */
    public postApiYuelemeV1TapirLoginByPhoneSms(loginPhoneConfirmCheck: LoginPhoneConfirmCheck, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1TapirLoginByPhoneSms(loginPhoneConfirmCheck, _options);
        return result.toPromise();
    }

    /**
     * @param reqStoreAddress 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAddress(reqStoreAddress: ReqStoreAddress, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1YuelemeAddress(reqStoreAddress, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqStartAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointment(reqStartAppointment: ReqStartAppointment, authorization: string, _options?: Configuration): Promise<OptionDataLong> {
        const result = this.api.postApiYuelemeV1YuelemeAppointment(reqStartAppointment, authorization, _options);
        return result.toPromise();
    }

    /**
     * 申请取消某个预约
     * @param reqCancelAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointmentCancel(reqCancelAppointment: ReqCancelAppointment, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1YuelemeAppointmentCancel(reqCancelAppointment, authorization, _options);
        return result.toPromise();
    }

    /**
     * 确认某个预约
     * @param reqConfirmAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointmentConfirm(reqConfirmAppointment: ReqConfirmAppointment, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1YuelemeAppointmentConfirm(reqConfirmAppointment, authorization, _options);
        return result.toPromise();
    }

    /**
     * 支付某个预约
     * @param reqConfirmAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointmentConfirmPayment(reqConfirmAppointment: ReqConfirmAppointment, authorization: string, _options?: Configuration): Promise<OptionDataWechatPaymentItem> {
        const result = this.api.postApiYuelemeV1YuelemeAppointmentConfirmPayment(reqConfirmAppointment, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqChangeAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointmentItemChange(reqChangeAppointment: ReqChangeAppointment, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1YuelemeAppointmentItemChange(reqChangeAppointment, authorization, _options);
        return result.toPromise();
    }

    /**
     * 确认取消某个预约
     * @param reqCancelAppointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeAppointmentOrganizerConfirm(reqCancelAppointment: ReqCancelAppointment, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1YuelemeAppointmentOrganizerConfirm(reqCancelAppointment, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreateSchedule 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeCalendarCreate(reqCreateSchedule: ReqCreateSchedule, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1YuelemeCalendarCreate(reqCreateSchedule, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeOrganizerStatus(authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1YuelemeOrganizerStatus(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqChange2Appointment 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeRequestAppointment(reqChange2Appointment: ReqChange2Appointment, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1YuelemeRequestAppointment(reqChange2Appointment, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqYuelemeServiceCard 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeServiceCard(reqYuelemeServiceCard: ReqYuelemeServiceCard, authorization: string, _options?: Configuration): Promise<OptionDataLong> {
        const result = this.api.postApiYuelemeV1YuelemeServiceCard(reqYuelemeServiceCard, authorization, _options);
        return result.toPromise();
    }

    /**
     * 快速发起预约
     * @param reqQuickAppointmentShare 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeServiceQuick(reqQuickAppointmentShare: ReqQuickAppointmentShare, authorization: string, _options?: Configuration): Promise<OptionDataLong> {
        const result = this.api.postApiYuelemeV1YuelemeServiceQuick(reqQuickAppointmentShare, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreateUserSymbol 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeSymbol(reqCreateUserSymbol: ReqCreateUserSymbol, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1YuelemeSymbol(reqCreateUserSymbol, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqGetServiceTime 
     */
    public postApiYuelemeV1YuelemeTimeAvailableOrganisor(reqGetServiceTime: ReqGetServiceTime, _options?: Configuration): Promise<OptionDataRetGetServiceTime> {
        const result = this.api.postApiYuelemeV1YuelemeTimeAvailableOrganisor(reqGetServiceTime, _options);
        return result.toPromise();
    }

    /**
     * @param aWithDraw 
     * @param authorization 
     */
    public postApiYuelemeV1YuelemeWithdrawCreate(aWithDraw: AWithDraw, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiYuelemeV1YuelemeWithdrawCreate(aWithDraw, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param id 
     */
    public putApiYuelemeV1YuelemeScheduleDefault(authorization: string, id: number, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.putApiYuelemeV1YuelemeScheduleDefault(authorization, id, _options);
        return result.toPromise();
    }


}



