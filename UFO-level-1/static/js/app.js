// from data.js
var tableData = data;

// YOUR CODE HERE!
// READING IN THE DATA INTO TABLE
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
function buildTable(tableData) {
    tbody.html("");
    tableData.forEach((ufo_sighting) => {
    
        var row = tbody.append("tr");
    
        Object.values(ufo_sighting).forEach((value) => {
            // console.log(key, value);
    
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}


// LISTENING TO EVENTS AND SEARCH THROUGH DATE/TIME COLUMN OF TABLE TO MATCH SEARCH RESULTS

// Selecting the "Filter Table" button
var button = d3.select("#filter-btn");

// Complete the click handler for page
button.on("click", function() {
    // Preventing page from Refreshing
    // d3.event.preventDefault();

    // Selecting the input element and get raw HTML node
    var inputElement = d3.select("#datetime");

    // Getting value property of input element
    var inputValue = inputElement.property("value");
    let filteredData = tableData;
    console.log(inputValue);
    console.log(tableData);

    // Using form input to filter data by date
    if(inputValue) {
        filteredData = tableData.filter(row => row.datetime === inputValue);
    }
    buildTable(filteredData);

    console.log(filteredData);

});

// UFO LEVEL II


buildTable(tableData);

