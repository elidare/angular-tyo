// app.component.ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ReactiveFormsModule ]
})

export class AppComponent {
  title = 'konferenssit';

  confForm: FormGroup;
  people: number | null = 0;
  groups: number | null = 0;

  constructor(private fb: FormBuilder) {
    this.confForm = this.fb.group({
      people: new FormControl(0, [Validators.required, Validators.pattern(/^[1-9]*$/)]),
      groups: new FormControl(0, [Validators.required, Validators.pattern(/^[1-9]*$/)]),
    });
  }

  calculate() {
    const { people, groups } = this.confForm.value;
    this.people = Number(people);
    this.groups = Number(groups);
  }
}