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

export class IndexDailyPriceJodata {
    'date': number;
    'close': number;
    'volume': number;
    'open': number;
    'high': number;
    'low': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "number",
            "format": ""
        },
        {
            "name": "close",
            "baseName": "close",
            "type": "number",
            "format": "double"
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "number",
            "format": "double"
        },
        {
            "name": "open",
            "baseName": "open",
            "type": "number",
            "format": "double"
        },
        {
            "name": "high",
            "baseName": "high",
            "type": "number",
            "format": "double"
        },
        {
            "name": "low",
            "baseName": "low",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return IndexDailyPriceJodata.attributeTypeMap;
    }

    public constructor() {
    }
}

