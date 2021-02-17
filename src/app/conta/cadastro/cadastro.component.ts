import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form.validation';

import { Usuario } from '../models/usuario';
import { ContaService } from '../services/conta.service';
import { MustMatch } from '../../utils/confirm-password.validation';
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit, AfterViewInit, OnDestroy {
  // Observa os dados do DOM
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  errors: string[] = [];
  cadastroForm!: FormGroup;
  usuario!: Usuario;


  validationMessages!: ValidationMessages;
  genericValidator!: GenericValidator;
  displayMessage: DisplayMessage = {};

  mudancasNaoSalvas!: boolean;

  constructor(private fb: FormBuilder,private contaService: ContaService) {
    this.validationMessages = {
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      confirmPassword: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        mustMatch: 'As senhas não conferem'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit(): void {
    this.cadastroForm = this.buildCadastroForm();
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    // Faz um processamento ao disparar o evento 'blur' no formulario
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    // Mostra (ou não) mensagens de acordo com o estado do formulario
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
      this.mudancasNaoSalvas = true;
    });
  }

  private buildCadastroForm(): FormGroup {
    const form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [
          Validators.minLength(6),
          Validators.maxLength(18),
          Validators.required
        ]],
      confirmPassword: ['', [
        Validators.required,
      ]]
    }, { validator: MustMatch('password', 'confirmPassword') });
    return form;
  }

  adicionarConta() {
    // chamada HTTP para registrar o usuario no endpoint
    if (this.isFormValid(this.cadastroForm)) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.contaService.registrar(this.usuario);
    }
  }

  private isFormValid(form: FormGroup) {
    return (form.dirty && form.valid);
  }

}
