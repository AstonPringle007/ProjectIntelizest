import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPrimeChartsComponent } from './ng-prime-charts.component';

describe('NgPrimeChartsComponent', () => {
  let component: NgPrimeChartsComponent;
  let fixture: ComponentFixture<NgPrimeChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPrimeChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPrimeChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
