import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedImageComponent } from './selected-image.component';

describe('SelectedImageComponent', () => {
  let component: SelectedImageComponent;
  let fixture: ComponentFixture<SelectedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
