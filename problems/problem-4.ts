type car ={
make: string;
model: string;
year: number;
}

const cars: car[] = [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Mustang", year: 1969 },
    { make: "Tesla", model: "Model 3", year: 2020 },
    { make: "Chevrolet", model: "Impala", year: 1967 },
    { make: "BMW", model: "M3", year: 2005 },
    { make: "Volkswagen", model: "Golf", year: 2012 },
    { make: "Mercedes", model: "E-Class", year: 2010 },
    { make: "Audi", model: "A4", year: 2017 },
    { make: "Mazda", model: "MX-5", year: 1999 }
  ];


  function sortCarByYear (carArr: car[]){
    const sortedCars = [...carArr]

    return sortedCars.sort((car1, car2)=> car1.year - car2.year)
  }

//   console.log(sortCarByYear(cars));