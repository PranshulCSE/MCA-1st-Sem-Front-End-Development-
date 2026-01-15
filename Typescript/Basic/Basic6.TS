interface person{
    name: string,
    age:number,
    gender:string,
    adhar?:number //Optional Property
}

const obj:person={
    name: "Pranshul",
    age:21,
    gender:"Male"
}


interface Customer{
    name: string,
    age:number,
    gender:string,
    balance:number
}
const obj1:Partial<Customer>={
    name: "Pranshul",
    balance:50000
}

// By Using Partial we can make all the properties of an interface optional.
const obj2:Required<person>={
    name: "Pranshul",
    age:21,
    gender:"Male",
    adhar:123456789012
}
// By Using Required we can make all the properties of an interface required.   

const obj3:Readonly<person>={
    name: "Pranshul",
    age:21,
    gender:"Male",
    adhar:123456789012
}
// By Using Readonly we can make all the properties of an interface readonly.

// obj3.age=22; //Error: Cannot assign to 'age' because it is a read-only property.

// Extending Interfaces
interface Employee extends person{
    empId:number,
    department:string
}
const emp1:Employee={
    name: "Pranshul",
    age:21,
    empId:101,
    department:"IT",
    gender:"Male",
    adhar:123456789012
}
console.log(emp1);

// Output:  
// {
//   name: 'Pranshul',
//   age: 21,
//   empId: 101,
//   department: 'IT',
//   gender: 'Male',
//   adhar: 123456789012
// }

