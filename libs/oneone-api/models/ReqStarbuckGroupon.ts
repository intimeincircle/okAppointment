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

import { EnumeratumStarbuckItem } from './EnumeratumStarbuckItem';
import { HttpFile } from '../http/http';

export class ReqStarbuckGroupon {
    'userName': string;
    'phone': string;
    'item': EnumeratumStarbuckItem;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "EnumeratumStarbuckItem",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReqStarbuckGroupon.attributeTypeMap;
    }

    public constructor() {
    }
}
