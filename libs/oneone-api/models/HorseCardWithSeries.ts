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

import { HorseCardReturn } from './HorseCardReturn';
import { HorseSeriesReturn } from './HorseSeriesReturn';
import { HttpFile } from '../http/http';

export class HorseCardWithSeries {
    'card': HorseCardReturn;
    'series': HorseSeriesReturn;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "card",
            "baseName": "card",
            "type": "HorseCardReturn",
            "format": ""
        },
        {
            "name": "series",
            "baseName": "series",
            "type": "HorseSeriesReturn",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HorseCardWithSeries.attributeTypeMap;
    }

    public constructor() {
    }
}

