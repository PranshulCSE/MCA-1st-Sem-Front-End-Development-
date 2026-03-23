const user={
    name:"Aman",
    age:20,
    email:"BlaBla@gmail.com",
    amount:1100,
    greeting: function(){
        // console.log(`Hello Mr. ${user.name} `);  Not Suggested
         console.log(`Hello Mr. ${this.name} `);
        //  this keyword refers to the current object 
        return 20;
    }
}

const va=user.greeting();
console.log(va);

//     Output: Hello Mr. Aman 
//              20

// Nesting of Objects

const user2={
    name:"Aman",
    age:20,
    email:"BlaBla@gmail.com",
    amount:1100,
    address:{
        city:"Haridwar",
        state:"Uttrakhand"
    }    
}

console.log(user2);

// Output:
// {
//   name: 'Aman',
//   age: 20,
//   email: 'BlaBla@gmail.com',
//   amount: 1100,
//   address: { city: 'Haridwar', state: 'Uttrakhand' }
// }

// If we want to access any patricular key then the way should be:

console.log(user2.address.state);
console.log(user2.address.city);

//    Output: 
            //    Uttrakhand
            //    Haridwar
        
            // Copying the objects
            const user0=user2;
             user2.name="Arjan";
             console.log(user0.name);
// Ouptut: Arjan
//  Because Objects in javaScript Copy te references of Each Other


            // Making an Independent copy of Object
// Shallow Copy
            const user3={...user2};
            user2.name="Raman";
            console.log(user3.name);

            // Output: Aman

            // user2.address.city="Rishikesh";
            console.log(user3.address.city);

            // Output: Rishikesh
            // Just Because the ...operator works  only at Single level i.e Not in Nested  Sections
 
  // DEEP COPY
  
  const user4=structuredClone(user2);
  console.log(user4);
  user2.address.city="TEHRI GARHWAL";
  console.log(user4);

//   This Deep Copy makes completely independent copy of the objects
