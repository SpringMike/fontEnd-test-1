import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XoaDanhMucComponent } from './xoa-danh-muc.component';

describe('XoaDanhMucComponent', () => {
  let component: XoaDanhMucComponent;
  let fixture: ComponentFixture<XoaDanhMucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoaDanhMucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoaDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
