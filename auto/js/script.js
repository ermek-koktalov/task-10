class Cars {
  constructor(model, year, enginePower, color) {
    this.model = model;
    this.year = year;
    this.enginePower = enginePower;
    this.color = color;
  }

  showInfo() {
    return ` Auto ${this.model}, ${this.year}, ${this.enginePower}, ${this.color}`;
  }
}
const fiat = new Cars("500l", "2015", "1300", "black");
console.log(fiat.showInfo());

class ElectroCars extends Cars {
  constructor(model, year, enginePower, color, batteryCapacity) {
    super(model, year, enginePower, color);
    this.batteryCapacity = batteryCapacity;
  }
  showInfo() {
    return super.showInfo() + this.batteryCapacity;
  }
  promote() {
    return `Электромобили в Кыргызстане пока не пользуются большой популярностью, но в скором времени это может измениться.`;
  }
}
const nissan = new ElectroCars("NISSAN LEAF", "2016", "217cv", "gray", "62kwh");
console.log(nissan.showInfo());
console.log(nissan.promote());
