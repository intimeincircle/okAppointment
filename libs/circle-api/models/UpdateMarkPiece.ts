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

export class UpdateMarkPiece {
    'id': number;
    'themeId': number;
    'delta': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "themeId",
            "baseName": "themeId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "delta",
            "baseName": "delta",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateMarkPiece.attributeTypeMap;
    }

    public constructor() {
    }
}

