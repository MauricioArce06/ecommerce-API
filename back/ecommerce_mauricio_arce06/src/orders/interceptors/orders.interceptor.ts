import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class OrdersInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        // Si los datos existen y tienen la propiedad orderDetail
        if (data && data.orderDetail) {
          // Mapear cada elemento dentro de orderDetail
          data.orderDetail = data.orderDetail.map((detail) => {
            // Si product_id existe y es un array, mapearlo
            if (detail.product_id && Array.isArray(detail.product_id)) {
              detail.product_id = detail.product_id.map((product) => ({
                name: product.name,
              }));
            }
            return detail;
          });
        }
        return data; // Retornar los datos transformados
      }),
    );
  }
}
