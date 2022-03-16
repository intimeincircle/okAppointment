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

import { ConstantExerciseType } from './ConstantExerciseType';
import { ConstantSeriesType } from './ConstantSeriesType';
import { HttpFile } from '../http/http';

export class ReqCreatePractice {
    'postId': string;
    'exerciseType': ConstantExerciseType;
    'exerciseId': string;
    'title': string;
    'answers'?: Array<string>;
    'answer': string;
    'seriesId': string;
    'richHtml'?: string;
    'audio'?: string;
    'video'?: string;
    'images'?: Array<string>;
    'seriesName'?: string;
    'seriesType'?: ConstantSeriesType;
    'postTitle'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "postId",
            "baseName": "postId",
            "type": "string",
            "format": ""
        },
        {
            "name": "exerciseType",
            "baseName": "exerciseType",
            "type": "ConstantExerciseType",
            "format": ""
        },
        {
            "name": "exerciseId",
            "baseName": "exerciseId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "answers",
            "baseName": "answers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "answer",
            "baseName": "answer",
            "type": "string",
            "format": ""
        },
        {
            "name": "seriesId",
            "baseName": "seriesId",
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
            "name": "audio",
            "baseName": "audio",
            "type": "string",
            "format": ""
        },
        {
            "name": "video",
            "baseName": "video",
            "type": "string",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "seriesName",
            "baseName": "seriesName",
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
            "name": "postTitle",
            "baseName": "postTitle",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReqCreatePractice.attributeTypeMap;
    }

    public constructor() {
    }
}
