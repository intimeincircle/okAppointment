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

import { ConstantCommentType } from './ConstantCommentType';
import { ConstantCommentUserType } from './ConstantCommentUserType';
import { HttpFile } from '../http/http';

export class KunCommentWithDate {
    'parentComment'?: KunCommentWithDate;
    'postId': string;
    'channelId': number;
    'commentId': string;
    'createAt': number;
    'content': string;
    'commentUserId': string;
    'commentUserName': string;
    'commentUserAvatarOpt'?: string;
    'isAuthor': boolean;
    'isDeleted': boolean;
    'isIllegal': boolean;
    'niceLookCount': number;
    'commentUserType'?: ConstantCommentUserType;
    'images'?: Array<string>;
    'commentType': ConstantCommentType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "parentComment",
            "baseName": "parentComment",
            "type": "KunCommentWithDate",
            "format": ""
        },
        {
            "name": "postId",
            "baseName": "postId",
            "type": "string",
            "format": ""
        },
        {
            "name": "channelId",
            "baseName": "channelId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "commentId",
            "baseName": "commentId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createAt",
            "baseName": "createAt",
            "type": "number",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "commentUserId",
            "baseName": "commentUserId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "commentUserName",
            "baseName": "commentUserName",
            "type": "string",
            "format": ""
        },
        {
            "name": "commentUserAvatarOpt",
            "baseName": "commentUserAvatarOpt",
            "type": "string",
            "format": ""
        },
        {
            "name": "isAuthor",
            "baseName": "isAuthor",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isIllegal",
            "baseName": "isIllegal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "niceLookCount",
            "baseName": "niceLookCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "commentUserType",
            "baseName": "commentUserType",
            "type": "ConstantCommentUserType",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "commentType",
            "baseName": "commentType",
            "type": "ConstantCommentType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return KunCommentWithDate.attributeTypeMap;
    }

    public constructor() {
    }
}
