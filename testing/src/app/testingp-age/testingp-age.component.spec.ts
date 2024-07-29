import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingpAGEComponent } from './testingp-age.component';

describe('TestingpAGEComponent', () => {
  let component: TestingpAGEComponent;
  let fixture: ComponentFixture<TestingpAGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingpAGEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingpAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
