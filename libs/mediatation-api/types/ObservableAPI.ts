import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration } from '../configuration';
import { Observable, of, from } from '../rxjsStub';
import { mergeMap, map } from '../rxjsStub';
import { ConstantMSG } from '../models/ConstantMSG';
import { CourseItemDaka } from '../models/CourseItemDaka';
import { NoSqlPagingListDataCourseItemDaka } from '../models/NoSqlPagingListDataCourseItemDaka';
import { RetMsg } from '../models/RetMsg';

import {
  DefaultApiRequestFactory,
  DefaultApiResponseProcessor,
} from '../apis/DefaultApi';
export class ObservableDefaultApi {
  private requestFactory: DefaultApiRequestFactory;
  private responseProcessor: DefaultApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DefaultApiRequestFactory,
    responseProcessor?: DefaultApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DefaultApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DefaultApiResponseProcessor();
  }

  /**
   */
  public getApiMeditationV1TapirHorseLearningCurrent(
    _options?: Configuration
  ): Observable<NoSqlPagingListDataCourseItemDaka> {
    const requestContextPromise =
      this.requestFactory.getApiMeditationV1TapirHorseLearningCurrent(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getApiMeditationV1TapirHorseLearningCurrent(
                rsp
              )
            )
          );
        })
      );
  }

  /**
   */
  public getApiMeditationV1TapirHorseLearningLzzCurrent(
    _options?: Configuration
  ): Observable<NoSqlPagingListDataCourseItemDaka> {
    const requestContextPromise =
      this.requestFactory.getApiMeditationV1TapirHorseLearningLzzCurrent(
        _options
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (let middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getApiMeditationV1TapirHorseLearningLzzCurrent(
                rsp
              )
            )
          );
        })
      );
  }
}
