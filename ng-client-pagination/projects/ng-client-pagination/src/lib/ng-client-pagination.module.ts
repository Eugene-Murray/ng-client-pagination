import { NgModule } from '@angular/core';
import { NgClientPaginationComponent } from './component/ng-client-pagination.component';
import { PaginationService } from './service/ng-client-pagination.service';



@NgModule({
  declarations: [NgClientPaginationComponent],
  imports: [
  ],
  exports: [NgClientPaginationComponent],
  providers: [PaginationService]
})
export class NgClientPaginationModule { }
