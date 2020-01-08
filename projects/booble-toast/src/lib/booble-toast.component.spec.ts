import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoobleToastComponent } from './booble-toast.component';

describe('BoobleToastComponent', () => {
  let component: BoobleToastComponent;
  let fixture: ComponentFixture<BoobleToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoobleToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoobleToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
