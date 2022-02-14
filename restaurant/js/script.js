class Restaurant {
  constructor(name, cusineType, served) {
    this.name = name;
    this.cusineType = cusineType;
    this.served = served;
  }
  serve() {
    return this.served++;
  }
  setServed(banquet) {
    return (this.served += banquet);
  }
  showTotalServed() {
    return `Today the ${this.name} rastaurant served ${this.served} people`;
  }
  showInfo() {
    return `${this.name} is a restaurant of ${this.cusineType} meal.`;
  }
  isOpen() {
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDay();

    if (currentDay === 6 || currentDay === 0) {
      return `${this.name} is closed`;
    } else {
      if (currentHour > 9 && currentHour < 22) {
        return `${this.name} is open`;
      } else {
        return `${this.name} is closed`;
      }
    }
  }
}
const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz", 0);
console.log(beshBarmak.isOpen());

beshBarmak.serve(); //1
beshBarmak.serve(); //2
beshBarmak.serve(); //3
beshBarmak.setServed(20);

console.log(beshBarmak.showTotalServed()); //20+3
