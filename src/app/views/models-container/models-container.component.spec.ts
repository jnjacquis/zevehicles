import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsContainerComponent } from './models-container.component';

describe('ModelsContainerComponent', () => {
  let component: ModelsContainerComponent;
  let fixture: ComponentFixture<ModelsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
