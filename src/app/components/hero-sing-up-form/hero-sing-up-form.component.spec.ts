import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSingUpFormComponent } from './hero-sing-up-form.component';

describe('HeroSingUpFormComponent', () => {
  let component: HeroSingUpFormComponent;
  let fixture: ComponentFixture<HeroSingUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSingUpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSingUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
