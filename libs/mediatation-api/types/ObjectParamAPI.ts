import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration } from '../configuration';

import { ConstantMSG } from '../models/ConstantMSG';
import { CourseItemDaka } from '../models/CourseItemDaka';
import { NoSqlPagingListDataCourseItemDaka } from '../models/NoSqlPagingListDataCourseItemDaka';
import { RetMsg } from '../models/RetMsg';

import { ObservableDefaultApi } from './ObservableAPI';
import {
  DefaultApiRequestFactory,
  DefaultApiResponseProcessor,
} from '../apis/DefaultApi';

export interface DefaultApiGetApiMeditationV1TapirHorseLearningCurrentRequest {}

export interface DefaultApiGetApiMeditationV1TapirHorseLearningLzzCurrentRequest {}

export class ObjectDefaultApi {
  private api: ObservableDefaultApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: DefaultApiRequestFactory,
    responseProcessor?: DefaultApiResponseProcessor
  ) {
    this.api = new ObservableDefaultApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * @param param the request object
   */
  public getApiMeditationV1TapirHorseLearningCurrent(
    param: DefaultApiGetApiMeditationV1TapirHorseLearningCurrentRequest = {},
    options?: Configuration
  ): Promise<NoSqlPagingListDataCourseItemDaka> {
    return this.api
      .getApiMeditationV1TapirHorseLearningCurrent(options)
      .toPromise();
  }

  /**
   * @param param the request object
   */
  public getApiMeditationV1TapirHorseLearningLzzCurrent(
    param: DefaultApiGetApiMeditationV1TapirHorseLearningLzzCurrentRequest = {},
    options?: Configuration
  ): Promise<NoSqlPagingListDataCourseItemDaka> {
    return this.api
      .getApiMeditationV1TapirHorseLearningLzzCurrent(options)
      .toPromise();
  }
}
