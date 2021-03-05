let dragon1 = (name, size, element) =>
	name + ' is a ' +
	size + ' dragon that breathes ' +
	element + '!'

console.log(dragon1('fluffykins', 'Huge', 'Fire'))

// Curried version
let dragon =
	// is a function that takes a name and returns a size
	name =>
	  // is a function that takes a size and returns an element
	  size => 
	    // is a function that takes an element and returns a bunch of stuff	
	    element =>
	      name + ' is a ' + 
	      size + ' dragon that breathes ' +
	      element +'!'

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')

console.log(dragon('fluffykins')('tiny'))
console.log(dragon('fluffykins')('tiny')('lightening'))
console.log(tinyDragon('lightening'))

