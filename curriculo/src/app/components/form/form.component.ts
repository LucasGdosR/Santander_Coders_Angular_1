import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlState,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  public contactForm!: FormGroup;

  public phoneMask = '(00) 0 0000-0000';
  public subjects = [
    {text: 'Freelance', value: 'freelance'},
    {text: 'Proposta de Emprego', value: 'job'},
    {text: 'Outro', value: 'misc'},
  ]

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}(?: [a-zA-ZÀ-ÿ]+){1,}$'),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      phone: new FormControl(null, [
        Validators.required
      ]),
      subject: new FormControl(null, [
        Validators.required
      ]),
      message: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmit() {
    const contact = this.contactForm.value
    alert("Obrigado pelo contato, "+contact.name+". Retornarei assim que possível.")
    this.contactForm.reset();
  }
}