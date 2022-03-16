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

import { ConstantGenderStatus } from '../models/ConstantGenderStatus';
import { HttpFile } from '../http/http';

export class KunUser {
    'channelId': number;
    'userId': string;
    'userName'?: string;
    'gender'?: ConstantGenderStatus;
    'password'?: string;
    'nickName'?: string;
    'email'?: string;
    'phone'?: string;
    'slogan'?: string;
    'thumbnail'?: string;
    'location'?: string;
    'verifiedRole'?: string;
    'locationName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelId",
            "baseName": "channelId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "ConstantGenderStatus",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "nickName",
            "baseName": "nickName",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
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
            "name": "slogan",
            "baseName": "slogan",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "verifiedRole",
            "baseName": "verifiedRole",
            "type": "string",
            "format": ""
        },
        {
            "name": "locationName",
            "baseName": "locationName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return KunUser.attributeTypeMap;
    }

    public constructor() {
    }
}



