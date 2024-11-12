function createCats() {
    let cats = [];
    let i = 0;
    while (i < 10) {
        let cat = (function(index) {
            return function() {
                console.log(`My index is ${index}`);
            };
        })(i); 
        cats.push(cat);
        i++;
    }
    return cats;
}

let animals = createCats();
animals[0]();
animals[5]();
