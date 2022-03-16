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

import { StockNote } from './StockNote';
import { WeatherStation1 } from './WeatherStation1';
import { HttpFile } from '../http/http';

export class EventStock {
    'date': number;
    'info': WeatherStation1;
    'chaodie'?: number;
    'event'?: StockNote;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "number",
            "format": ""
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "WeatherStation1",
            "format": ""
        },
        {
            "name": "chaodie",
            "baseName": "chaodie",
            "type": "number",
            "format": "double"
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "StockNote",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventStock.attributeTypeMap;
    }

    public constructor() {
    }
}

