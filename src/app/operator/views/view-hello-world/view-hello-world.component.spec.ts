import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHelloWorldComponent } from './view-hello-world.component';

describe('ViewHelloWorldComponent', () => {
  let component: ViewHelloWorldComponent;
  let fixture: ComponentFixture<ViewHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHelloWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
