export class CarModel {
  brand: string;
  model: string;
  color: string;
  YOM: number;

  constructor(brand: string, model: string, color: string, YOM: number) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.YOM = YOM;
  }

  year() {
    console.log(this.YOM);
  }
}
