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

import { EnumeratumChatGroupType } from './EnumeratumChatGroupType';
import { HttpFile } from '../http/http';

export class KunChatGroup {
    'channelId': number;
    'groupId': string;
    'groupType': EnumeratumChatGroupType;
    'isActive': boolean;
    'groupName'?: string;
    'groupNotice'?: string;
    'members'?: Array<string>;
    'user1'?: string;
    'user2'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelId",
            "baseName": "channelId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "groupType",
            "baseName": "groupType",
            "type": "EnumeratumChatGroupType",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupNotice",
            "baseName": "groupNotice",
            "type": "string",
            "format": ""
        },
        {
            "name": "members",
            "baseName": "members",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "user1",
            "baseName": "user1",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "user2",
            "baseName": "user2",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return KunChatGroup.attributeTypeMap;
    }

    public constructor() {
    }
}
