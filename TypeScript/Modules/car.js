export class CarModel {
    brand;
    model;
    color;
    YOM;
    constructor(brand, model, color, YOM) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.YOM = YOM;
    }
    year() {
        console.log(this.YOM);
    }
}
