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

import { WeatherStation1 } from './WeatherStation1';
import { HttpFile } from '../http/http';

export class RetStock {
    'records'?: Array<WeatherStation1>;
    'code': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "records",
            "baseName": "records",
            "type": "Array<WeatherStation1>",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RetStock.attributeTypeMap;
    }

    public constructor() {
    }
}
