import _ from 'lodash'

let dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timewarp' }
]

let hasElement =
	_.curry((element, obj) => obj.element === element)

let lightningDragons =
	dragons.filter(hasElement('lightning'))

console.log(lightningDragons)

let dragon =
  name =>
    size =>
      element => 
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

let output = dragon('karo')('large')('ice')

console.log(output)
