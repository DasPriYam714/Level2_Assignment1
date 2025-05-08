//
function formatString(input: string, toUpper?: boolean): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

//
function filterByRating(items: { 
  title: string; 
  rating: number; 
}[]): { 
  title: string; 
  rating: number; }[] {
  return items.filter(item => item.rating >= 4);
}

//
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

//
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, ${this.year} Year`;
  }
}
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

//
function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

//
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0){
    return null
  }
  else{
    return products.reduce((max, product) => product.price > max.price ? product : max);
  }
  
}

//
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

//
async function squareAsync(n: number): Promise<number> {
  if (n < 0) throw new Error("Negative number not allowed");
  return new Promise(resolve => setTimeout(() => resolve(n * n), 1000));
}
console.log(squareAsync(-6).then(console.log));;  
