//     const movie={
//         Title: "Venom the last dance",
//         Year: 2024,
//         Genre: "Action,Scifi",
//         Rating: {
//             IMBD: 3.5,
//             ROT: 3.2,
//             MC:3.4,
//         }, 
//         Director: "Kelly Marcel"
//     };
//     const {Title,Year,Genre,Rating:{IMBD,ROT,MC},Director}=movie
// console.log (Title,IMBD,Director);

// function calculateAverageRating({ IMBD,ROT,MC}) {
//     return ((IMBD+ROT+MC) / 3);
// }

// const averageRating = calculateAverageRating(movie.Rating);

// console.log(`${Title} (${Year}), a ${Genre} film directed by ${Director},
// has an average rating of ${averageRating}.`);



// const product = {
//     nam: "Wireless Earbuds",
//     price: 79.99,
//     quantity: 15,
//     category: "Audio Accessories"
// };

// const { nam, price, quantity, category } = product;
// console.log(`Product Details: ${nam}, ${category}, $${price}, ${quantity} in stock.`);

// function printProductSummary({ nam, category, price, quantity }) {
//     console.log(`The product ${nam} is in ${category} and costs $${price}. Only ${quantity}
//     left in stock!`);
// }

// printProductSummary(product);

// function updateProductQuantity(product, newQuantity) {
//     product.quantity = newQuantity;
//     console.log(`Updated Product Details: The product ${product.nam} is in ${product.category}
//      and costs $${product.price}. Now ${product.quantity} in stock!`);
// }

// updateProductQuantity(product, 10);


// const calculateArea = (width=1, height=1) => width * height;

// console.log(calculateArea(65, 70)); 
// console.log(calculateArea(7));     
// console.log(calculateArea());



// const calculateInterest = (principal, rate = 5, time = 1) => (principal * rate * time) / 100;

// console.log(calculateInterest(8000, 50, 5));
// console.log(calculateInterest(3500));     
// console.log(calculateInterest(4000, 10));



// const checkEligibility = (_name, age) => {
//     if (age >= 18) {
//         return "You are eligible to vote.";
//     } else {
//         return "You are not eligible to vote.";
//     }
// };

// console.log(checkEligibility("Hammad", 20));
// console.log(checkEligibility("Ali", 16));
// console.log(checkEligibility("Yousuf", 32));





//made by me without any help

// const product={
//     naaaam: "keyboard",
//     price: 470,
//     quantity: 13,
//     catagory: "Typing device"
// };

// const {naaaam,price,quantity,catagory}=product;
// function PPP({naaaam,price,quantity,catagory}){
// console.log (`this produst ${naaaam} is a ${catagory} and costs ${price}$. only 
//     ${quantity} left in stock!`);
// };
// PPP (product);

// function UPP(product, newQuantity){
//     product.quantity = newQuantity;
//     console.log(`Updated product list: this produst ${product.naaaam} is a ${product.catagory}
//          and costs ${product.price}$. only ${product.quantity} left in stock!`);
// }

// UPP (product, 7);
