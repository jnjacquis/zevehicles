import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsTableComponent } from './models-table.component';

describe('ModelsTableComponent', () => {
  let component: ModelsTableComponent;
  let fixture: ComponentFixture<ModelsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelsTableComponent]
    });
    fixture = TestBed.createComponent(ModelsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
