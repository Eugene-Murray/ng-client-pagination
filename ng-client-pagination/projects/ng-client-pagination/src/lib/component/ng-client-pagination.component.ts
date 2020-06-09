import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PaginationService } from '../service/ng-client-pagination.service';

@Component({
  selector: 'lib-ng-client-pagination',
  template: `
  `,
  styles: []
})
export class NgClientPaginationComponent implements OnInit, OnChanges {

  @Input() filteredData: any[] = [];
  public currentPage: number = 0;
  public pageCount: number = 0;

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.paginationService.pageCount$.subscribe((pageCount) => {
      this.pageCount = pageCount;
    });
    this.paginationService.currentPage$.subscribe((currentPage) => {
      this.currentPage = currentPage;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.paginationService.setFilteredData(this.filteredData);
  }

  onBack(): void {
    this.paginationService.back();
  }

  onForward(): void {
    this.paginationService.forward();
  }

  onFirst(): void {
    this.paginationService.getFirstPage();
  }

  onLast(): void {
    this.paginationService.getLastPage();
  }

}
