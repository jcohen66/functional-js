function talk() {
	console.log(this)
	console.log(this.sound)
}
let animal = {
	talk: talk
}
let cat = {
	sound: 'meow!'
}
let dog = {
	sound: 'woof!'
}
let prairieDog = {
	howl: function() {
		console.log(this.sound.toUpperCase());
	}
}
Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)
Object.setPrototypeOf(prairieDog, dog)
animal.talk = function() {
	console.log("I am a little teapot " + this.sound)
}
cat.talk()
dog.talk()
prairieDog.howl()
