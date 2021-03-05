var animals = [
	{ name: 'Fluffykins', species: 'rabbit' },
	{ name: 'Caro', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Harold', species: 'fish' },
	{ name: 'Ursula', species: 'cat' },
	{ name: 'Jimmy', species: 'fish' }
]

var isDog = function(animal) {
	return animal.species === 'dog'
}

var isRabbit = function(animal) {
	return animal.species === 'rabbit'
}

var dogs = animals.filter(isDog)
var rabbits = animals.filter(isRabbit)

console.log(dogs)
console.log(rabbits)

var namesArr = []
for (var i = 0; i < animals.length; i++) {
	namesArr.push(animals[i].name)
}

var names = animals.map(function(animal) {
	return animal.name + ' is a ' + animal.species
})

var names = animals.map((animal) => animal.name)

console.log(names)
