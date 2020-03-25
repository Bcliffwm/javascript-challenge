// from data.js
var tableData = data;

// YOUR CODE HERE!
// Looping through all tableData objects
// tableData.forEach(function(ufo_sighting) {
//     console.log(ufo_sighting)
// });

// Getting reference to the table body
var tbody = d3.select("tbody");

// Appending table row element
// tableData.forEach(function(ufo_sighting) {
//     console.log(ufo_sighting);
//     var row = tbody.append("tr");
// });

// Use Object.entries to console.log each ufo_sighting value
// tableData.forEach(function(ufo_sighting) {
//     console.log(ufo_sighting);
//     var row = tbody.append("tr");

//     Object.entries(ufo_sighting).forEach(function([key, value]){
//         console.log(key, value);
//     });
// });

// Use d3 to append 1 cell per ufo_sighting value (Date, City, Country, Shape, etc.)
// tableData.forEach(function(ufo_sighting) {
//     console.log(ufo_sighting);
//     var row = tbody.append("tr");

//     Object.entries(ufo_sighting).forEach(function([key, value]){
//         console.log(key, value);

//         var cell = tbody.append("td");
//     });
// });

// Using d3 to update each cell's text with ufo_sighting values w/ fat arrow
tableData.forEach((ufo_sighting) => {
    
    var row = tbody.append("tr");

    Object.entries(ufo_sighting).forEach(function([key, value]){
        console.log(key, value);

        var cell = tbody.append("td");
        cell.text(value);
    });
});