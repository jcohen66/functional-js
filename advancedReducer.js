/**
 * Note: requires package.json with contents:
 * {
 *  "type": "module"
 * }
 *
 * Good functional code is made up of
 * smal functions that do one thing
 * and you just bind them all together
 * using chaining.
 */
import fs from 'fs'

var output = fs.readFileSync('data.txt', "utf8")
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    // Reduce takes (accum, item)
    .reduce((customers, line) => {
        // Reuse the existing array or assign a new one if not.
        customers[line[0]] = customers[line[0]] || []
        // Add the line components to a new object literal.
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        // Must return something from reduce
        return customers
    }, {})

console.log('output', JSON.stringify(output, null, 2))