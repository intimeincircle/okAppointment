/**
 * title
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BucketImage } from '../models/BucketImage';
import { ConstServiceCardType } from '../models/ConstServiceCardType';
import { ConstantChargeType } from '../models/ConstantChargeType';
import { ConstantDeliveryType } from '../models/ConstantDeliveryType';
import { FillInItem } from '../models/FillInItem';
import { RichFragement } from '../models/RichFragement';
import { HttpFile } from '../http/http';

export class ReqYuelemeServiceCard {
    'deliveryType'?: ConstantDeliveryType;
    'urlName': string;
    'name': string;
    'scheduleId': number;
    'duration'?: string;
    'needConfirmed': boolean;
    'faq'?: string;
    'locationNeeded'?: boolean;
    'locationId'?: number;
    'onLineEnabled'?: boolean;
    'onLinePlatform'?: string;
    'avatar'?: BucketImage;
    'images'?: Array<BucketImage>;
    'description'?: RichFragement;
    'scheduledMsgAfterAppointment'?: string;
    'limitedFutureBookingDays'?: number;
    'limitedBookFrequency'?: number;
    'symbol': string;
    'fillInList'?: Array<FillInItem>;
    'chargeType': ConstantChargeType;
    'price'?: number;
    'refundTimeLimit'?: number;
    'serviceCardType'?: ConstServiceCardType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deliveryType",
            "baseName": "deliveryType",
            "type": "ConstantDeliveryType",
            "format": ""
        },
        {
            "name": "urlName",
            "baseName": "urlName",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "scheduleId",
            "baseName": "scheduleId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string",
            "format": ""
        },
        {
            "name": "needConfirmed",
            "baseName": "needConfirmed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "faq",
            "baseName": "faq",
            "type": "string",
            "format": ""
        },
        {
            "name": "locationNeeded",
            "baseName": "locationNeeded",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "locationId",
            "baseName": "locationId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "onLineEnabled",
            "baseName": "onLineEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "onLinePlatform",
            "baseName": "onLinePlatform",
            "type": "string",
            "format": ""
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "BucketImage",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<BucketImage>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "RichFragement",
            "format": ""
        },
        {
            "name": "scheduledMsgAfterAppointment",
            "baseName": "scheduledMsgAfterAppointment",
            "type": "string",
            "format": ""
        },
        {
            "name": "limitedFutureBookingDays",
            "baseName": "limitedFutureBookingDays",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "limitedBookFrequency",
            "baseName": "limitedBookFrequency",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "fillInList",
            "baseName": "fillInList",
            "type": "Array<FillInItem>",
            "format": ""
        },
        {
            "name": "chargeType",
            "baseName": "chargeType",
            "type": "ConstantChargeType",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "refundTimeLimit",
            "baseName": "refundTimeLimit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "serviceCardType",
            "baseName": "serviceCardType",
            "type": "ConstServiceCardType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReqYuelemeServiceCard.attributeTypeMap;
    }

    public constructor() {
    }
}



