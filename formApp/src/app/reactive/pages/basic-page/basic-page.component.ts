import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  // manera 1 de crear formularios
  // FormControl(valor por defecto, validaciones sincronas, validaciones asincronas );
  // public myform: FormGroup = new FormGroup({
  //     name: new FormControl('', [], []),
  //     price: new FormControl(0, [], []),
  //     inStorage: new FormControl(0, [], [])
  // });


  // manera 2 de crear formularios
  constructor( private fb: FormBuilder){}

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)], []],
    price: [0, [Validators.required, Validators.min(0)], []],
    inStorage: [0, [Validators.required, Validators.min(0)], []]
  })

  onSave(): void {

    if(this.myForm.invalid){
      return;
    }
    console.log("form", this.myForm.value);
  }

}
