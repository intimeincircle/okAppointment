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

import { EnumeratumIConstantSymbolType } from './EnumeratumIConstantSymbolType';
import { HttpFile } from '../http/http';

export class KunSymbolContent {
    'channelId': number;
    'symbol': string;
    'id': string;
    'userId'?: string;
    'userNickName'?: string;
    'userAvatar'?: string;
    'itemId'?: string;
    'videoUrl'?: string;
    'text'?: string;
    'link'?: string;
    'symbolType': EnumeratumIConstantSymbolType;
    'url'?: string;
    'sk'?: string;
    'imageUrl'?: string;
    'audioUrl'?: string;
    'source'?: string;
    'tags'?: Array<string>;
    'question'?: string;
    'answer'?: string;
    'explain'?: string;
    'title'?: string;
    'richHtml'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelId",
            "baseName": "channelId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userNickName",
            "baseName": "userNickName",
            "type": "string",
            "format": ""
        },
        {
            "name": "userAvatar",
            "baseName": "userAvatar",
            "type": "string",
            "format": ""
        },
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string",
            "format": ""
        },
        {
            "name": "videoUrl",
            "baseName": "videoUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbolType",
            "baseName": "symbolType",
            "type": "EnumeratumIConstantSymbolType",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "sk",
            "baseName": "sk",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageUrl",
            "baseName": "imageUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "audioUrl",
            "baseName": "audioUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "question",
            "baseName": "question",
            "type": "string",
            "format": ""
        },
        {
            "name": "answer",
            "baseName": "answer",
            "type": "string",
            "format": ""
        },
        {
            "name": "explain",
            "baseName": "explain",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "richHtml",
            "baseName": "richHtml",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return KunSymbolContent.attributeTypeMap;
    }

    public constructor() {
    }
}

