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

import { ConstantSeriesType } from './ConstantSeriesType';
import { HttpFile } from '../http/http';

export class ReqCreateSeries {
    'categoryId'?: number;
    'secondCategoryId'?: number;
    'title': string;
    'seriesType': ConstantSeriesType;
    'description'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "categoryId",
            "baseName": "categoryId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "secondCategoryId",
            "baseName": "secondCategoryId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "seriesType",
            "baseName": "seriesType",
            "type": "ConstantSeriesType",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReqCreateSeries.attributeTypeMap;
    }

    public constructor() {
    }
}
