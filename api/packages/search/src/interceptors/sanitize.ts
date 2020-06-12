
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';

import { sanitizeSearchParam } from '../utils'

@Injectable()
export default class SanitizeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const request = context.switchToHttp().getRequest();
    request.params.name = sanitizeSearchParam(request.params.name);

    return next.handle();
  }
}
