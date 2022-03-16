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
export class PromiseDefaultApi {
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
   */
  public getApiMeditationV1TapirHorseLearningCurrent(
    _options?: Configuration
  ): Promise<NoSqlPagingListDataCourseItemDaka> {
    const result =
      this.api.getApiMeditationV1TapirHorseLearningCurrent(_options);
    return result.toPromise();
  }

  /**
   */
  public getApiMeditationV1TapirHorseLearningLzzCurrent(
    _options?: Configuration
  ): Promise<NoSqlPagingListDataCourseItemDaka> {
    const result =
      this.api.getApiMeditationV1TapirHorseLearningLzzCurrent(_options);
    return result.toPromise();
  }
}
