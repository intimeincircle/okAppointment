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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiDeleteApiYuelemeV1YuelemeScheduleRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteApiYuelemeV1YuelemeSchedule
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApideleteApiYuelemeV1YuelemeSchedule
     */
    id: number
}

export interface DefaultApiDeleteApiYuelemeV1YuelemeServiceItemIdRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApideleteApiYuelemeV1YuelemeServiceItemId
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApideleteApiYuelemeV1YuelemeServiceItemId
     */
    id: number
}

export interface DefaultApiGetApiYuelemeV1TapirHorseLoginUserRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1TapirHorseLoginUser
     */
    authorization: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeAddressMyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAddressMy
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAddressMy
     */
    pageNum?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAddressMy
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAddressMy
     */
    pageState?: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeAppointmentRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointment
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointment
     */
    id?: number
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointment
     */
    userId?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointment
     */
    tutorId?: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointment
     */
    serviceCardId?: number
    /**
     * 
     * @type ConstantAppointmentStatus
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointment
     */
    status?: ConstantAppointmentStatus
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointment
     */
    pageNum?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointment
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointment
     */
    pageState?: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeAppointmentItemIdRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentItemId
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentItemId
     */
    id: number
}

export interface DefaultApiGetApiYuelemeV1YuelemeAppointmentOrginaniserListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentOrginaniserList
     */
    authorization: string
    /**
     * 
     * @type ConstantAppointmentStatus
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentOrginaniserList
     */
    status?: ConstantAppointmentStatus
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentOrginaniserList
     */
    pageNum?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentOrginaniserList
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentOrginaniserList
     */
    pageState?: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeAppointmentServiceUserListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentServiceUserList
     */
    authorization: string
    /**
     * 
     * @type ConstantAppointmentStatus
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentServiceUserList
     */
    status?: ConstantAppointmentStatus
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentServiceUserList
     */
    pageNum?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentServiceUserList
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeAppointmentServiceUserList
     */
    pageState?: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeBalanceGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeBalanceGet
     */
    authorization: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeBalanceListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeBalanceList
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeBalanceList
     */
    pageNum?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeBalanceList
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeBalanceList
     */
    pageState?: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeCalendarIdRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeCalendarId
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeCalendarId
     */
    id: number
}

export interface DefaultApiGetApiYuelemeV1YuelemeCanlendarMyRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeCanlendarMy
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeCanlendarMy
     */
    pageNum?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeCanlendarMy
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeCanlendarMy
     */
    pageState?: string
}

export interface DefaultApiGetApiYuelemeV1YuelemePaymentRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemePayment
     */
    authorization: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeServiceItemIdRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceItemId
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceItemId
     */
    id: number
}

export interface DefaultApiGetApiYuelemeV1YuelemeServiceMyListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceMyList
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceMyList
     */
    pageNum?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceMyList
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceMyList
     */
    pageState?: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeServiceQuickRequest {
    /**
     * 
     * @type ReqGetQuickAppointment
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceQuick
     */
    reqGetQuickAppointment: ReqGetQuickAppointment
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceQuick
     */
    authorization: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeServiceSymbolSymbolNameRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceSymbolSymbolName
     */
    symbol: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceSymbolSymbolName
     */
    name: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeServiceUserNameListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceUserNameList
     */
    userName: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceUserNameList
     */
    pageNum?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceUserNameList
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceUserNameList
     */
    pageState?: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeServiceUsersUseridListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceUsersUseridList
     */
    userId: string
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceUsersUseridList
     */
    pageNum?: number
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceUsersUseridList
     */
    pageSize?: number
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeServiceUsersUseridList
     */
    pageState?: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeSettingScheduleRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeSettingSchedule
     */
    authorization: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeSymbolRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeSymbol
     */
    authorization: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeUserCalendarRequest {
    /**
     * 
     * @type ReqGetCalendar
     * @memberof DefaultApigetApiYuelemeV1YuelemeUserCalendar
     */
    reqGetCalendar: ReqGetCalendar
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeUserCalendar
     */
    authorization: string
}

export interface DefaultApiGetApiYuelemeV1YuelemeWithdrawGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiYuelemeV1YuelemeWithdrawGet
     */
    authorization: string
}

export interface DefaultApiPatchApiYuelemeV1TapirProfileRequest {
    /**
     * 
     * @type ReqPatchKunPartial
     * @memberof DefaultApipatchApiYuelemeV1TapirProfile
     */
    reqPatchKunPartial: ReqPatchKunPartial
    /**
     * 
     * @type string
     * @memberof DefaultApipatchApiYuelemeV1TapirProfile
     */
    authorization: string
}

export interface DefaultApiPatchApiYuelemeV1YuelemeAddressRequest {
    /**
     * 
     * @type ReqPatchAddress
     * @memberof DefaultApipatchApiYuelemeV1YuelemeAddress
     */
    reqPatchAddress: ReqPatchAddress
    /**
     * 
     * @type string
     * @memberof DefaultApipatchApiYuelemeV1YuelemeAddress
     */
    authorization: string
}

export interface DefaultApiPatchApiYuelemeV1YuelemeAppointmentRequest {
    /**
     * 
     * @type ReqPatchAppointment
     * @memberof DefaultApipatchApiYuelemeV1YuelemeAppointment
     */
    reqPatchAppointment: ReqPatchAppointment
    /**
     * 
     * @type string
     * @memberof DefaultApipatchApiYuelemeV1YuelemeAppointment
     */
    authorization: string
}

export interface DefaultApiPatchApiYuelemeV1YuelemeCalendarRequest {
    /**
     * 
     * @type ReqPatchSchedule
     * @memberof DefaultApipatchApiYuelemeV1YuelemeCalendar
     */
    reqPatchSchedule: ReqPatchSchedule
    /**
     * 
     * @type string
     * @memberof DefaultApipatchApiYuelemeV1YuelemeCalendar
     */
    authorization: string
}

export interface DefaultApiPatchApiYuelemeV1YuelemeServiceCardRequest {
    /**
     * 
     * @type ReqPatchServiceCard
     * @memberof DefaultApipatchApiYuelemeV1YuelemeServiceCard
     */
    reqPatchServiceCard: ReqPatchServiceCard
    /**
     * 
     * @type string
     * @memberof DefaultApipatchApiYuelemeV1YuelemeServiceCard
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1TapirLoginByPasswordRequest {
    /**
     * 
     * @type LoginTribeUser
     * @memberof DefaultApipostApiYuelemeV1TapirLoginByPassword
     */
    loginTribeUser: LoginTribeUser
}

export interface DefaultApiPostApiYuelemeV1TapirLoginByPhoneCheckRequest {
    /**
     * 
     * @type LoginPhoneConfirm
     * @memberof DefaultApipostApiYuelemeV1TapirLoginByPhoneCheck
     */
    loginPhoneConfirm: LoginPhoneConfirm
}

export interface DefaultApiPostApiYuelemeV1TapirLoginByPhoneSmsRequest {
    /**
     * 
     * @type LoginPhoneConfirmCheck
     * @memberof DefaultApipostApiYuelemeV1TapirLoginByPhoneSms
     */
    loginPhoneConfirmCheck: LoginPhoneConfirmCheck
}

export interface DefaultApiPostApiYuelemeV1YuelemeAddressRequest {
    /**
     * 
     * @type ReqStoreAddress
     * @memberof DefaultApipostApiYuelemeV1YuelemeAddress
     */
    reqStoreAddress: ReqStoreAddress
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeAddress
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeAppointmentRequest {
    /**
     * 
     * @type ReqStartAppointment
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointment
     */
    reqStartAppointment: ReqStartAppointment
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointment
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeAppointmentCancelRequest {
    /**
     * 
     * @type ReqCancelAppointment
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointmentCancel
     */
    reqCancelAppointment: ReqCancelAppointment
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointmentCancel
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeAppointmentConfirmRequest {
    /**
     * 
     * @type ReqConfirmAppointment
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointmentConfirm
     */
    reqConfirmAppointment: ReqConfirmAppointment
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointmentConfirm
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeAppointmentConfirmPaymentRequest {
    /**
     * 
     * @type ReqConfirmAppointment
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointmentConfirmPayment
     */
    reqConfirmAppointment: ReqConfirmAppointment
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointmentConfirmPayment
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeAppointmentItemChangeRequest {
    /**
     * 
     * @type ReqChangeAppointment
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointmentItemChange
     */
    reqChangeAppointment: ReqChangeAppointment
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointmentItemChange
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeAppointmentOrganizerConfirmRequest {
    /**
     * 
     * @type ReqCancelAppointment
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointmentOrganizerConfirm
     */
    reqCancelAppointment: ReqCancelAppointment
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeAppointmentOrganizerConfirm
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeCalendarCreateRequest {
    /**
     * 
     * @type ReqCreateSchedule
     * @memberof DefaultApipostApiYuelemeV1YuelemeCalendarCreate
     */
    reqCreateSchedule: ReqCreateSchedule
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeCalendarCreate
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeOrganizerStatusRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeOrganizerStatus
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeRequestAppointmentRequest {
    /**
     * 
     * @type ReqChange2Appointment
     * @memberof DefaultApipostApiYuelemeV1YuelemeRequestAppointment
     */
    reqChange2Appointment: ReqChange2Appointment
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeRequestAppointment
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeServiceCardRequest {
    /**
     * 
     * @type ReqYuelemeServiceCard
     * @memberof DefaultApipostApiYuelemeV1YuelemeServiceCard
     */
    reqYuelemeServiceCard: ReqYuelemeServiceCard
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeServiceCard
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeServiceQuickRequest {
    /**
     * 
     * @type ReqQuickAppointmentShare
     * @memberof DefaultApipostApiYuelemeV1YuelemeServiceQuick
     */
    reqQuickAppointmentShare: ReqQuickAppointmentShare
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeServiceQuick
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeSymbolRequest {
    /**
     * 
     * @type ReqCreateUserSymbol
     * @memberof DefaultApipostApiYuelemeV1YuelemeSymbol
     */
    reqCreateUserSymbol: ReqCreateUserSymbol
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeSymbol
     */
    authorization: string
}

export interface DefaultApiPostApiYuelemeV1YuelemeTimeAvailableOrganisorRequest {
    /**
     * 
     * @type ReqGetServiceTime
     * @memberof DefaultApipostApiYuelemeV1YuelemeTimeAvailableOrganisor
     */
    reqGetServiceTime: ReqGetServiceTime
}

export interface DefaultApiPostApiYuelemeV1YuelemeWithdrawCreateRequest {
    /**
     * 
     * @type AWithDraw
     * @memberof DefaultApipostApiYuelemeV1YuelemeWithdrawCreate
     */
    aWithDraw: AWithDraw
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiYuelemeV1YuelemeWithdrawCreate
     */
    authorization: string
}

export interface DefaultApiPutApiYuelemeV1YuelemeScheduleDefaultRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiputApiYuelemeV1YuelemeScheduleDefault
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApiputApiYuelemeV1YuelemeScheduleDefault
     */
    id: number
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteApiYuelemeV1YuelemeSchedule(param: DefaultApiDeleteApiYuelemeV1YuelemeScheduleRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.deleteApiYuelemeV1YuelemeSchedule(param.authorization, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteApiYuelemeV1YuelemeServiceItemId(param: DefaultApiDeleteApiYuelemeV1YuelemeServiceItemIdRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.deleteApiYuelemeV1YuelemeServiceItemId(param.authorization, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1TapirHorseLoginUser(param: DefaultApiGetApiYuelemeV1TapirHorseLoginUserRequest, options?: Configuration): Promise<OptionDataKunUser> {
        return this.api.getApiYuelemeV1TapirHorseLoginUser(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeAddressMy(param: DefaultApiGetApiYuelemeV1YuelemeAddressMyRequest, options?: Configuration): Promise<OptionDataYuelemeAddress> {
        return this.api.getApiYuelemeV1YuelemeAddressMy(param.authorization, param.pageNum, param.pageSize, param.pageState,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeAppointment(param: DefaultApiGetApiYuelemeV1YuelemeAppointmentRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkYuelemeAppointment> {
        return this.api.getApiYuelemeV1YuelemeAppointment(param.authorization, param.id, param.userId, param.tutorId, param.serviceCardId, param.status, param.pageNum, param.pageSize, param.pageState,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeAppointmentItemId(param: DefaultApiGetApiYuelemeV1YuelemeAppointmentItemIdRequest, options?: Configuration): Promise<OptionDataYuelemeAppointment> {
        return this.api.getApiYuelemeV1YuelemeAppointmentItemId(param.authorization, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeAppointmentOrginaniserList(param: DefaultApiGetApiYuelemeV1YuelemeAppointmentOrginaniserListRequest, options?: Configuration): Promise<NoSqlPagingListDataYuelemeAppointment> {
        return this.api.getApiYuelemeV1YuelemeAppointmentOrginaniserList(param.authorization, param.status, param.pageNum, param.pageSize, param.pageState,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeAppointmentServiceUserList(param: DefaultApiGetApiYuelemeV1YuelemeAppointmentServiceUserListRequest, options?: Configuration): Promise<NoSqlPagingListDataYuelemeAppointment> {
        return this.api.getApiYuelemeV1YuelemeAppointmentServiceUserList(param.authorization, param.status, param.pageNum, param.pageSize, param.pageState,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeBalanceGet(param: DefaultApiGetApiYuelemeV1YuelemeBalanceGetRequest, options?: Configuration): Promise<OptionDataUserBalance> {
        return this.api.getApiYuelemeV1YuelemeBalanceGet(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeBalanceList(param: DefaultApiGetApiYuelemeV1YuelemeBalanceListRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkBalanceHistory> {
        return this.api.getApiYuelemeV1YuelemeBalanceList(param.authorization, param.pageNum, param.pageSize, param.pageState,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeCalendarId(param: DefaultApiGetApiYuelemeV1YuelemeCalendarIdRequest, options?: Configuration): Promise<OptionDataScheduleCard> {
        return this.api.getApiYuelemeV1YuelemeCalendarId(param.authorization, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeCanlendarMy(param: DefaultApiGetApiYuelemeV1YuelemeCanlendarMyRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkScheduleCard> {
        return this.api.getApiYuelemeV1YuelemeCanlendarMy(param.authorization, param.pageNum, param.pageSize, param.pageState,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemePayment(param: DefaultApiGetApiYuelemeV1YuelemePaymentRequest, options?: Configuration): Promise<NoSqlPagingListDataPaymentHistory> {
        return this.api.getApiYuelemeV1YuelemePayment(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeServiceItemId(param: DefaultApiGetApiYuelemeV1YuelemeServiceItemIdRequest, options?: Configuration): Promise<OptionDataYuelemeServiceCard> {
        return this.api.getApiYuelemeV1YuelemeServiceItemId(param.authorization, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeServiceMyList(param: DefaultApiGetApiYuelemeV1YuelemeServiceMyListRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkYuelemeServiceCard> {
        return this.api.getApiYuelemeV1YuelemeServiceMyList(param.authorization, param.pageNum, param.pageSize, param.pageState,  options).toPromise();
    }

    /**
     * 查询某个预约
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeServiceQuick(param: DefaultApiGetApiYuelemeV1YuelemeServiceQuickRequest, options?: Configuration): Promise<OptionDataYuelemeAppointment> {
        return this.api.getApiYuelemeV1YuelemeServiceQuick(param.reqGetQuickAppointment, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeServiceSymbolSymbolName(param: DefaultApiGetApiYuelemeV1YuelemeServiceSymbolSymbolNameRequest, options?: Configuration): Promise<OptionDataYuelemeServiceCard> {
        return this.api.getApiYuelemeV1YuelemeServiceSymbolSymbolName(param.symbol, param.name,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeServiceUserNameList(param: DefaultApiGetApiYuelemeV1YuelemeServiceUserNameListRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkYuelemeServiceCard> {
        return this.api.getApiYuelemeV1YuelemeServiceUserNameList(param.userName, param.pageNum, param.pageSize, param.pageState,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeServiceUsersUseridList(param: DefaultApiGetApiYuelemeV1YuelemeServiceUsersUseridListRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkYuelemeServiceCard> {
        return this.api.getApiYuelemeV1YuelemeServiceUsersUseridList(param.userId, param.pageNum, param.pageSize, param.pageState,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeSettingSchedule(param: DefaultApiGetApiYuelemeV1YuelemeSettingScheduleRequest, options?: Configuration): Promise<NoSqlPagingListDataScheduleCard> {
        return this.api.getApiYuelemeV1YuelemeSettingSchedule(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeSymbol(param: DefaultApiGetApiYuelemeV1YuelemeSymbolRequest, options?: Configuration): Promise<OptionDataUserShortName> {
        return this.api.getApiYuelemeV1YuelemeSymbol(param.authorization,  options).toPromise();
    }

    /**
     * 获取用户空余时间
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeUserCalendar(param: DefaultApiGetApiYuelemeV1YuelemeUserCalendarRequest, options?: Configuration): Promise<NoSqlPagingListDataUserCalendarRecord> {
        return this.api.getApiYuelemeV1YuelemeUserCalendar(param.reqGetCalendar, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiYuelemeV1YuelemeWithdrawGet(param: DefaultApiGetApiYuelemeV1YuelemeWithdrawGetRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkWithdrawApplicaton> {
        return this.api.getApiYuelemeV1YuelemeWithdrawGet(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public patchApiYuelemeV1TapirProfile(param: DefaultApiPatchApiYuelemeV1TapirProfileRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.patchApiYuelemeV1TapirProfile(param.reqPatchKunPartial, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public patchApiYuelemeV1YuelemeAddress(param: DefaultApiPatchApiYuelemeV1YuelemeAddressRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.patchApiYuelemeV1YuelemeAddress(param.reqPatchAddress, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public patchApiYuelemeV1YuelemeAppointment(param: DefaultApiPatchApiYuelemeV1YuelemeAppointmentRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.patchApiYuelemeV1YuelemeAppointment(param.reqPatchAppointment, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public patchApiYuelemeV1YuelemeCalendar(param: DefaultApiPatchApiYuelemeV1YuelemeCalendarRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.patchApiYuelemeV1YuelemeCalendar(param.reqPatchSchedule, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public patchApiYuelemeV1YuelemeServiceCard(param: DefaultApiPatchApiYuelemeV1YuelemeServiceCardRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.patchApiYuelemeV1YuelemeServiceCard(param.reqPatchServiceCard, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1TapirLoginByPassword(param: DefaultApiPostApiYuelemeV1TapirLoginByPasswordRequest, options?: Configuration): Promise<OptionDataLong> {
        return this.api.postApiYuelemeV1TapirLoginByPassword(param.loginTribeUser,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1TapirLoginByPhoneCheck(param: DefaultApiPostApiYuelemeV1TapirLoginByPhoneCheckRequest, options?: Configuration): Promise<OptionDataALoginReply> {
        return this.api.postApiYuelemeV1TapirLoginByPhoneCheck(param.loginPhoneConfirm,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1TapirLoginByPhoneSms(param: DefaultApiPostApiYuelemeV1TapirLoginByPhoneSmsRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1TapirLoginByPhoneSms(param.loginPhoneConfirmCheck,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeAddress(param: DefaultApiPostApiYuelemeV1YuelemeAddressRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1YuelemeAddress(param.reqStoreAddress, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeAppointment(param: DefaultApiPostApiYuelemeV1YuelemeAppointmentRequest, options?: Configuration): Promise<OptionDataLong> {
        return this.api.postApiYuelemeV1YuelemeAppointment(param.reqStartAppointment, param.authorization,  options).toPromise();
    }

    /**
     * 申请取消某个预约
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeAppointmentCancel(param: DefaultApiPostApiYuelemeV1YuelemeAppointmentCancelRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1YuelemeAppointmentCancel(param.reqCancelAppointment, param.authorization,  options).toPromise();
    }

    /**
     * 确认某个预约
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeAppointmentConfirm(param: DefaultApiPostApiYuelemeV1YuelemeAppointmentConfirmRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1YuelemeAppointmentConfirm(param.reqConfirmAppointment, param.authorization,  options).toPromise();
    }

    /**
     * 支付某个预约
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeAppointmentConfirmPayment(param: DefaultApiPostApiYuelemeV1YuelemeAppointmentConfirmPaymentRequest, options?: Configuration): Promise<OptionDataWechatPaymentItem> {
        return this.api.postApiYuelemeV1YuelemeAppointmentConfirmPayment(param.reqConfirmAppointment, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeAppointmentItemChange(param: DefaultApiPostApiYuelemeV1YuelemeAppointmentItemChangeRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1YuelemeAppointmentItemChange(param.reqChangeAppointment, param.authorization,  options).toPromise();
    }

    /**
     * 确认取消某个预约
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeAppointmentOrganizerConfirm(param: DefaultApiPostApiYuelemeV1YuelemeAppointmentOrganizerConfirmRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1YuelemeAppointmentOrganizerConfirm(param.reqCancelAppointment, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeCalendarCreate(param: DefaultApiPostApiYuelemeV1YuelemeCalendarCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1YuelemeCalendarCreate(param.reqCreateSchedule, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeOrganizerStatus(param: DefaultApiPostApiYuelemeV1YuelemeOrganizerStatusRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1YuelemeOrganizerStatus(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeRequestAppointment(param: DefaultApiPostApiYuelemeV1YuelemeRequestAppointmentRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1YuelemeRequestAppointment(param.reqChange2Appointment, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeServiceCard(param: DefaultApiPostApiYuelemeV1YuelemeServiceCardRequest, options?: Configuration): Promise<OptionDataLong> {
        return this.api.postApiYuelemeV1YuelemeServiceCard(param.reqYuelemeServiceCard, param.authorization,  options).toPromise();
    }

    /**
     * 快速发起预约
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeServiceQuick(param: DefaultApiPostApiYuelemeV1YuelemeServiceQuickRequest, options?: Configuration): Promise<OptionDataLong> {
        return this.api.postApiYuelemeV1YuelemeServiceQuick(param.reqQuickAppointmentShare, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeSymbol(param: DefaultApiPostApiYuelemeV1YuelemeSymbolRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1YuelemeSymbol(param.reqCreateUserSymbol, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeTimeAvailableOrganisor(param: DefaultApiPostApiYuelemeV1YuelemeTimeAvailableOrganisorRequest, options?: Configuration): Promise<OptionDataRetGetServiceTime> {
        return this.api.postApiYuelemeV1YuelemeTimeAvailableOrganisor(param.reqGetServiceTime,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiYuelemeV1YuelemeWithdrawCreate(param: DefaultApiPostApiYuelemeV1YuelemeWithdrawCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiYuelemeV1YuelemeWithdrawCreate(param.aWithDraw, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public putApiYuelemeV1YuelemeScheduleDefault(param: DefaultApiPutApiYuelemeV1YuelemeScheduleDefaultRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.putApiYuelemeV1YuelemeScheduleDefault(param.authorization, param.id,  options).toPromise();
    }

}
