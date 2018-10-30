export class ControlBase<T> {
  value: T;
  key: string;
  label: string;
  validations: Array<T>;
  order: number;
  controlType: string;
  parent: boolean;
  children: any[];
  className: string;
  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    validations?: Array<T>,
    order?: number,
    controlType?: string,
    parent?: boolean,
    children?: any[],
    className?: string,
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.validations = options.validations;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.parent= !!options.parent;
    this.children= options.children;
    this.className=options.className;
  }
}
