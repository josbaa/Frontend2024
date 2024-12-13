
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalauteComponent } from './palaute.component';

describe('PalauteComponent', () => {
  let component: PalauteComponent;
  let fixture: ComponentFixture<PalauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalauteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
