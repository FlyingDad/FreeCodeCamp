// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
	// Don't show a false ID to this bouncer.
	
	return arr.filter(function(el) {
		return undefined || false || "" || null || NaN ? [] : el;
	});
  }
  
  console.log(bouncer([7, "ate", "", false, 9])); //[7, "ate", 9]
  console.log(bouncer(["a", "b", "c"])); //["a", "b", "c"]
  console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []
  console.log(bouncer([1, null, NaN, 2, undefined])); // [1, 2]