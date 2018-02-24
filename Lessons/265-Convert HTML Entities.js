function convertHTML(str) {
	str = str.replace(/&/ig, '&amp;');
	str = str.replace(/</ig, '&lt;');
	str = str.replace(/>/ig, '&gt;');
	str = str.replace(/\"/ig, '&quot;');
	str = str.replace(/\'/ig, '&apos;');
	return str;
}

console.log(convertHTML("Dolce & Gabbana"));//
console.log(convertHTML("Dolce & Gabbana"));// should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos"));// should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Sixty > twelve"));// should return Sixty &​gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"'));// should return Stuff in &​quot;quotation marks&​quot;.
console.log(convertHTML("Shindler's List"));// should return Shindler&​apos;s List.

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

