import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioItemComponent } from './portafolio-item.component';

describe('PortafolioItemComponent', () => {
  let component: PortafolioItemComponent;
  let fixture: ComponentFixture<PortafolioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
