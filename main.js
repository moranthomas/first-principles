const companies = [
    {name: "company one", category: "Finance", start: 1981, end: 2003},
    {name: "company two", category: "Retail", start: 1982, end: 2002},
    {name: "company three", category: "Auto", start: 1983, end: 2001}
];


const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 22, 23, 34, 45, 46, 47, 58, 69, 90];

// for loop
// for(let i =0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach
companies.forEach( function( company) {
    console.log(company);
});

// without filter
// let canDrink = [];
// for(let i=0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// with filter method
const canDrink = ages.filter(function (age) {
    if(age >= 21) {
        return true;
    }
});

const canDrink2 = ages.filter( age => (age >= 21) );

console.log(canDrink2);

const retailCompanies = companies.filter ( company => (company.category  === 'Retail'));
console.log(retailCompanies);

// map
const companyNames = companies.map( function (company) {
    return company.name;
});
console.log(companyNames);


const agesSquare = ages.map ( age => Math.sqrt(age));
console.log(agesSquare);