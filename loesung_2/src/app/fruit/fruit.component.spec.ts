import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitComponent } from './fruit.component';

describe('FruitComponent', () => {
  let component: FruitComponent;
  let fixture: ComponentFixture<FruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FruitComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display fruit', () => {
    component.fruit = 'Testname';
    fixture.detectChanges();

    const nameElement: HTMLElement = fixture.nativeElement;
    const pElement = nameElement.querySelector('p');
    expect(pElement?.textContent).toContain('Das Obst ist: Testname');
  });

  it('should reset fruit by click', () => {
    component.fruit = 'Testname';

    const nameElement: HTMLElement = fixture.nativeElement;
    const button = nameElement.querySelector('button');
    button?.click();

    expect(component.fruit).toEqual('');
  });
});
