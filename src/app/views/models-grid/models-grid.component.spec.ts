import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsGridComponent } from './models-grid.component';

describe('ModelsGridComponent', () => {
  let component: ModelsGridComponent;
  let fixture: ComponentFixture<ModelsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
