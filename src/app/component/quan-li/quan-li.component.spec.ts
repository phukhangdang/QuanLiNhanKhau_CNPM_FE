import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLiComponent } from './quan-li.component';

describe('QuanLiComponent', () => {
  let component: QuanLiComponent;
  let fixture: ComponentFixture<QuanLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
