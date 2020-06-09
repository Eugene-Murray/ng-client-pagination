import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClientPaginationComponent } from './ng-client-pagination.component';

describe('NgClientPaginationComponent', () => {
  let component: NgClientPaginationComponent;
  let fixture: ComponentFixture<NgClientPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClientPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClientPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
