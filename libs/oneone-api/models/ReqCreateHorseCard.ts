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

import { ConstantPostType } from './ConstantPostType';
import { HttpFile } from '../http/http';

export class ReqCreateHorseCard {
    'seriesId': string;
    'title': string;
    'richHtml'?: string;
    'delta'?: string;
    'content'?: string;
    'link'?: string;
    'imageNames'?: Array<string>;
    'videoName'?: string;
    'file'?: string;
    'audioName'?: string;
    'tags'?: Array<string>;
    'postType'?: ConstantPostType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "seriesId",
            "baseName": "seriesId",
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
        },
        {
            "name": "delta",
            "baseName": "delta",
            "type": "string",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
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
            "name": "imageNames",
            "baseName": "imageNames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "videoName",
            "baseName": "videoName",
            "type": "string",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "string",
            "format": ""
        },
        {
            "name": "audioName",
            "baseName": "audioName",
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
            "name": "postType",
            "baseName": "postType",
            "type": "ConstantPostType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReqCreateHorseCard.attributeTypeMap;
    }

    public constructor() {
    }
}

