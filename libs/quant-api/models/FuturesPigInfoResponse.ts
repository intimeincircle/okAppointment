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

export class FuturesPigInfoResponse {
    'pDate': string;
    'pValue': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pDate",
            "baseName": "p_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "pValue",
            "baseName": "p_value",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return FuturesPigInfoResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

