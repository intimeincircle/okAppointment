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

export class AglosticCaigouItemSignedAndStarkbuckItem {
    'orderId': string;
    'id': string;
    'phone': string;
    'skuName': string;
    'skuCode': string;
    'skuId'?: string;
    'productName': string;
    'productId': string;
    'buyerId': string;
    'cost': string;
    'creatAt': string;
    'sign': string;
    'item': EnumeratumStarbuckItem;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "orderId",
            "baseName": "orderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "skuName",
            "baseName": "skuName",
            "type": "string",
            "format": ""
        },
        {
            "name": "skuCode",
            "baseName": "skuCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "skuId",
            "baseName": "skuId",
            "type": "string",
            "format": ""
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string",
            "format": ""
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string",
            "format": ""
        },
        {
            "name": "buyerId",
            "baseName": "buyerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "string",
            "format": ""
        },
        {
            "name": "creatAt",
            "baseName": "creatAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "sign",
            "baseName": "sign",
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
        return AglosticCaigouItemSignedAndStarkbuckItem.attributeTypeMap;
    }

    public constructor() {
    }
}

