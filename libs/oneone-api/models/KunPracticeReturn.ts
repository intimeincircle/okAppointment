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

import { ConstantAppraiseType } from './ConstantAppraiseType';
import { ConstantExerciseType } from './ConstantExerciseType';
import { ConstantSeriesType } from './ConstantSeriesType';
import { HttpFile } from '../http/http';

export class KunPracticeReturn {
    'createAt': number;
    'channelId': number;
    'postId': string;
    'seriesId': string;
    'exerciseId': string;
    'practiceId': string;
    'practiceUserId': string;
    'appraiseType'?: ConstantAppraiseType;
    'practiceUserName'?: string;
    'practiceUserAvatar'?: string;
    'exerciseType': ConstantExerciseType;
    'title': string;
    'answer': string;
    'seriesName'?: string;
    'seriesType'?: ConstantSeriesType;
    'postTitle'?: string;
    'score'?: number;
    'likeCount'?: number;
    'commentCount'?: number;
    'video'?: string;
    'audio'?: string;
    'images'?: Array<string>;
    'richHtml'?: string;
    'answers'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createAt",
            "baseName": "createAt",
            "type": "number",
            "format": ""
        },
        {
            "name": "channelId",
            "baseName": "channelId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "postId",
            "baseName": "postId",
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
            "name": "exerciseId",
            "baseName": "exerciseId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "practiceId",
            "baseName": "practiceId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "practiceUserId",
            "baseName": "practiceUserId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "appraiseType",
            "baseName": "appraiseType",
            "type": "ConstantAppraiseType",
            "format": ""
        },
        {
            "name": "practiceUserName",
            "baseName": "practiceUserName",
            "type": "string",
            "format": ""
        },
        {
            "name": "practiceUserAvatar",
            "baseName": "practiceUserAvatar",
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
            "name": "title",
            "baseName": "title",
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
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number",
            "format": "double"
        },
        {
            "name": "likeCount",
            "baseName": "likeCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "commentCount",
            "baseName": "commentCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "video",
            "baseName": "video",
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
            "name": "images",
            "baseName": "images",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "richHtml",
            "baseName": "richHtml",
            "type": "string",
            "format": ""
        },
        {
            "name": "answers",
            "baseName": "answers",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return KunPracticeReturn.attributeTypeMap;
    }

    public constructor() {
    }
}

