// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import { Configuration } from '../configuration';
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile,
} from '../http/http';
import { ObjectSerializer } from '../models/ObjectSerializer';
import { ApiException } from './exception';
import { canConsumeForm, isCodeInRange } from '../util';
import { SecurityAuthentication } from '../auth/auth';

import { NoSqlPagingListDataCourseItemDaka } from '../models/NoSqlPagingListDataCourseItemDaka';
import { RetMsg } from '../models/RetMsg';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {
  /**
   */
  public async getApiMeditationV1TapirHorseLearningCurrent(
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api-meditation/v1/tapir/horse/learning/current';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   */
  public async getApiMeditationV1TapirHorseLearningLzzCurrent(
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = '/api-meditation/v1/tapir/horse/learning/lzz/current';

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET
    );
    requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class DefaultApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getApiMeditationV1TapirHorseLearningCurrent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApiMeditationV1TapirHorseLearningCurrent(
    response: ResponseContext
  ): Promise<NoSqlPagingListDataCourseItemDaka> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: NoSqlPagingListDataCourseItemDaka =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          'NoSqlPagingListDataCourseItemDaka',
          ''
        ) as NoSqlPagingListDataCourseItemDaka;
      return body;
    }
    if (isCodeInRange('0', response.httpStatusCode)) {
      const body: RetMsg = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'RetMsg',
        ''
      ) as RetMsg;
      throw new ApiException<RetMsg>(
        response.httpStatusCode,
        '',
        body,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: NoSqlPagingListDataCourseItemDaka =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          'NoSqlPagingListDataCourseItemDaka',
          ''
        ) as NoSqlPagingListDataCourseItemDaka;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getApiMeditationV1TapirHorseLearningLzzCurrent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getApiMeditationV1TapirHorseLearningLzzCurrent(
    response: ResponseContext
  ): Promise<NoSqlPagingListDataCourseItemDaka> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers['content-type']
    );
    if (isCodeInRange('200', response.httpStatusCode)) {
      const body: NoSqlPagingListDataCourseItemDaka =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          'NoSqlPagingListDataCourseItemDaka',
          ''
        ) as NoSqlPagingListDataCourseItemDaka;
      return body;
    }
    if (isCodeInRange('0', response.httpStatusCode)) {
      const body: RetMsg = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        'RetMsg',
        ''
      ) as RetMsg;
      throw new ApiException<RetMsg>(
        response.httpStatusCode,
        '',
        body,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: NoSqlPagingListDataCourseItemDaka =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          'NoSqlPagingListDataCourseItemDaka',
          ''
        ) as NoSqlPagingListDataCourseItemDaka;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      'Unknown API Status Code!',
      await response.getBodyAsAny(),
      response.headers
    );
  }
}
