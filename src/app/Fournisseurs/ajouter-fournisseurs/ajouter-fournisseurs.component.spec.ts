import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFournisseursComponent } from './ajouter-fournisseurs.component';

describe('AjouterFournisseursComponent', () => {
  let component: AjouterFournisseursComponent;
  let fixture: ComponentFixture<AjouterFournisseursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterFournisseursComponent]
    });
    fixture = TestBed.createComponent(AjouterFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
