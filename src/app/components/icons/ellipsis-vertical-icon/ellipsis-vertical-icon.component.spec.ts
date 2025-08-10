import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisVerticalIconComponent } from './ellipsis-vertical-icon.component';

describe('EllipsisVerticalIconComponent', () => {
  let component: EllipsisVerticalIconComponent;
  let fixture: ComponentFixture<EllipsisVerticalIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EllipsisVerticalIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EllipsisVerticalIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
