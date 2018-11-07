import { ControlBase } from './base.field';

export class CheckBoxComponent extends ControlBase<string> {
  controlType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'checkbox';
  }
}
