function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  Car.prototype.getDetails = function() {
    return `${this.year} ${this.make} ${this.model}`;
  };
  
  function ElectricCar(make, model, year, batteryCapacity) {
    Car.call(this, make, model, year);
    this.batteryCapacity = batteryCapacity;
  }
  
  ElectricCar.prototype = Object.create(Car.prototype);
  
  ElectricCar.prototype.getBatteryInfo = function() {
    return `Battery capacity: ${this.batteryCapacity} kWh`;
  };
  
  const myCar = new Car('Toyota', 'Model 1', 2020);
  console.log(myCar.getDetails());
  
  const myElectricCar = new ElectricCar('Tesla', 'Model 3', 2022, 75);
  console.log(myElectricCar.getDetails()); 
  console.log(myElectricCar.getBatteryInfo());
  