import { Component, Injectable, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { GenericMediator } from 'src/app/application/Mediator/GenericMediator';

@Injectable()
@Component({
  template: '', // This is an empty template, as this component will be used as a base only
})
export abstract class BaseInstanceComponent<
  TCreate,
  TUpdate,
  TDelete,
  TList,
  TFormValue
> {
  instanceForm!: FormGroup;
  instanceCreated: boolean = false;

  constructor(
    protected formBuilder: FormBuilder,
    protected mediator: GenericMediator<TCreate, TUpdate, TDelete, TList>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  // Make the formBuilder.group generic to accept specific form values
  initForm(): void {
    this.instanceForm = this.formBuilder.group(this.createFormControls());
  }

  // Implement in the extended component to define specific form controls
  abstract createFormControls(): Record<string, AbstractControl>;

  onSubmit(): void {
    if (this.instanceForm.valid) {
      const instance: TCreate = this.instanceForm.value;
      this.mediator.create(instance, this);
    }
  }
  
  abstract handleSuccess(response: TList): void;
  abstract handleError(error: any): void;
}
