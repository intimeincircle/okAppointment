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

import { HttpFile } from '../http/http';

export class ReqGetCalendar {
    'startTime': number;
    'endTime': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "number",
            "format": ""
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReqGetCalendar.attributeTypeMap;
    }

    public constructor() {
    }
}

