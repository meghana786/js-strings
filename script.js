// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var s1 = 'I am a ';
var s2 = 'Kalvian';
var res = s1 + s2;
console.log(res);
// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
console.log(res);
// Challenge 3: Store a string in a variable and display the length of the string.
console.log(res.length);
// Challenge 4: Store a string in a variable and convert it into uppercase.
var s = res;
console.log(s.toUpperCase());
//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var o = 'I love programming';
var replaced_string = o.replace('programming', 'JavaScript programming ');
console.log(replaced_string);
// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var k = replaced_string;
console.log(k.repeat(3));
//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var me = 'I am a Kalvian';
console.log(me.split(' '));
// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var q = 'Time and Tide wait for none';
console.log(q.indexOf('Ti'));
// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var q2 = 'When life gives you lemons make lemonade';
console.log(q2.includes('lemon'));
// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var q3 = 'You must be the change you wish to see in the world.';
console.log(q3.slice(16, 22));
console.log(q3.substring(46, 51));
