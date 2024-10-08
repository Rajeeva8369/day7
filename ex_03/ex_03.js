const map = (elements, modifier) => 
    elements.map(modifier);
function isEven(number) { return number % 2 === 0; }
console.log(map([5, 8, 10], isEven));
