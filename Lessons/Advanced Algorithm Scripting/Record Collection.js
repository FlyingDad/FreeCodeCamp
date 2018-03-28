// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var item = collection[id];
  // If value is empty (""), delete the given prop property from the album.
  if(!value) {
    delete item[prop];
  } else if(prop == "tracks"){
    // If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
    if(!item.hasOwnProperty(prop)){
      var newTracks = [value];
      item[prop] = newTracks;
    } else {
      item[prop].push(value);
    }
  } else {
    item[prop] = value;
  }
  
  return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA")); //artist should be "ABBA"
console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));// tracks should have "Take a Chance on Me" as the last element.


// If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

