import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css']
})
export class FormReativoComponent implements OnInit {

  formCadastro : FormGroup;

  constructor() {
    this.formCadastro = new FormGroup(
      {
        'nome': new FormControl(
          null, 
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(150)
          ]
        ),
        'telefone': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }
    );

  }

  ngOnInit(): void {
  }

  onSubmit(){
    let dados = `
      Nome: ${this.formCadastro.value.nome}
      Telefone: ${this.formCadastro.value.telefone}
      Endereço: ${this.formCadastro.value.endereco}
    `
    console.log(dados);
  }
}
