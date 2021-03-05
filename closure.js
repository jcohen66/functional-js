/**
 * Closure Example
 *
 * In a language without support for closures, we
 * would need to pass in the value as an arg to
 * the function.  Closure can refer to variable
 * defined outside the function.
 */

var me = "Bruce Wayne"
function greetMe() {
	// Refer to variable that is defined outside the closure (function).
	console.log('Hello, ' + me + '!')
}
me = "Batman"
// Does not copy the value.  It reads whatever the value is at the
// time of execution of the closure.  In this case, "Batman"
greetMe()

