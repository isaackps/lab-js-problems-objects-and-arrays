// Customer Object
var Customer = function (customerInfo) {
  // ** your code here**
  this.id = customerInfo.id;
  this.name = customerInfo.name;
  this.carRented = null;
};

// Car Object
var Car = function (carInfo) {
  // ** your code here**
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPricePerDay = carInfo.rentalPrice;
  this.available = true;
  this.customer = null;
  this.rentalDuration = 0;
  this.quotePrice = function(rentalDuration) {
    return rentalDuration * this.rentalPrice;
  }
  this.reserve = function(customer, rentalDuration) {
    if (this.available){
     this.available = false;
     this.customer = Customer.name;
    this.rentalDuration = rentalDuration;
      return true;
    }else {
      return false;
    }
  }
  this.carReturn = function () {
    if(this.available === true){
      return "Sorry, this car have alredy been returned.";
    }else{
      this.available = true;
      this.customer = null;
      this.rentalDuration = 0;
    }
  }
};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.addCar = function (car) {
    if (this.getCar(car.id)){
      console.log("ID already exists");
    } else {
      this.cars.push(car);
      console.log("Car added to warehouse");
    }
  }
  this.addCustomer = function (customer) {
    if (this.getCustomer(customer.id)){
      console.log("ID already exists");
    } else {
      this.customers.push(customer);
      console.log("Customer added to warehouse");
    }
  }
  this.removeCar = function (car){
    if (this.findCarIndex(car.id) >= 0) {
      this.cars.splice(this.findCarIndex(car.id), this.findCarIndex(car.id)+1);
      console.log("Car deleted");
    }else {
      console.log("Car not found");
    }
  }
 this.removeCustomer = function (customer){
    if (this.findCustomerIndex(customer.id) >= 0) {
      this.customers.splice(this.findCustomerIndex(customer.id), this.findCustomerIndex(customer.id)+1);
      console.log("Customer deleted");
    }else {
      console.log("Customer not found");
    }
  }
this.availableCars = function () {
  return this.cars.filter(function(car) {
    return car.available ? true : false ;
    });
  }

this.rentCar = function (customerID, rentalDuration) {
  console.log(this.availableCars.length);
  if (this.availableCars.length === 0) {
    console.log("All our cars have been rented");
  }else if (this.getCustomer === true) {
    this.Customer.carRented = this.availableCars[0];
    this.car.reserve(customerID, rentalDuration);
    console.log("The car has been reserved");
  }else {
    console.log("Please provide a valid customerID");
  }
}

this.returnCar = function (customerID) {
  if (this.getCustomer) {
    this.Customer.carRented = null;
    this.Car.carReturn;
    console.log("The car has been reserved");
  } else {
    console.log("Please provide a valid customerID");
  }
}

this.totalRevenue = function () {
  return this.cars.reduce(function (acc, val, ind, arr) {
    return acc += val.quotePrice();
  }, 0);
}

};



// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman"
};
var customerA = new Customer(customerInfo);

var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carInfo2 = {
  id: "002",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};
var carA = new Car(carInfo);
var carB = new Car(carInfo2);

var vendor = new Vendor('Jens Limited');
vendor.addCustomer(customerA);

//console.log(vendor.availableCars());
vendor.addCar(carA);
vendor.addCar(carB);
//console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
