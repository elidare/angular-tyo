// app.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CalculationService } from './calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ReactiveFormsModule, CommonModule]
})

export class AppComponent {
  title = 'konferenssit';

  confForm: FormGroup;
  participantsNumber: number = 0;
  groupsNumber: number = 0;
  private calculationService = inject(CalculationService);

  constructor(private fb: FormBuilder) {
    this.confForm = this.fb.group({
      people: new FormControl(0, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      groups: new FormControl(0, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    })
  }

  calculate() {
    const { people, groups } = this.confForm.value;
    this.participantsNumber = Number(people);
    this.groupsNumber = Number(groups);
    this.calculationService.initCalculation(this.participantsNumber, this.groupsNumber);
  }

  get groupSize(): number {
    return this.calculationService.calculateGroups();
  }

  get roundsNumber(): number {
    return this.calculationService.calculateRounds();
  }

  get rounds(): number[][][] {
    return this.calculationService.generateWorkshopGroups();
  }
}