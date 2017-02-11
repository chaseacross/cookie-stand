//STARTER CODE//

// var pikePlace = {
//   min: 1,
//   max: 2,
//   avg: 3,
//   // What other properties might you need to keep track of?
//   getRandom: function(min, max) {
//     return Math.random() * ((max - min) + min);
//   },
//   // other methods to aggregate data...
//   render: function() {
//     // render your object data to the DOM as an unordered list of data points!!
//     // 1. Get an element by Id from your html
//     // 2. Create a UL element
//     // 3. Create and populate an LI element for each of the data points that you want to render
//     // 4. Append the LI to the UL
//     // 5. Append the UL to the element that you stored in step 1
//   }
// };

var options = [
        set0 = ['Option 1','Option 2'],
        set1 = ['First Option','Second Option','Third Option']
    ];

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('foo').appendChild(makeUL(options[0]));
