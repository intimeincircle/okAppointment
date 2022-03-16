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

import { DeliveryContent } from '../models/DeliveryContent';
import { FillInItemValue } from '../models/FillInItemValue';
import { HttpFile } from '../http/http';

export class ReqPatchAppointment {
    'id': number;
    'fromTime'?: number;
    'endTime'?: number;
    'note'?: string;
    'fillInItem'?: Array<FillInItemValue>;
    'deliveryContent'?: DeliveryContent;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "fromTime",
            "baseName": "fromTime",
            "type": "number",
            "format": ""
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "number",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string",
            "format": ""
        },
        {
            "name": "fillInItem",
            "baseName": "fillInItem",
            "type": "Array<FillInItemValue>",
            "format": ""
        },
        {
            "name": "deliveryContent",
            "baseName": "deliveryContent",
            "type": "DeliveryContent",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReqPatchAppointment.attributeTypeMap;
    }

    public constructor() {
    }
}

