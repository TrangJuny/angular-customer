export class ControlBase<T> {
  value: T;
  key: string;
  label: string;
  validations: Array<T>;
  order: number;
  controlType: string;
  effectAllowed:string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    validations?: Array<T>,
    order?: number,
    controlType?: string ,
    effectAllowed?: string} = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.validations = options.validations ||[];
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || ''; 
    this.effectAllowed=options.effectAllowed ||'move';
  }
}
