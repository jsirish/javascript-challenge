var tableData = data;

// Get a reference to the table body -g
var tbody = d3.select(".tb");

// // Loop Through `data` and console.log each ufo report object
data.forEach(function(ufoReports) {
    console.log(ufoReports);
  });

// // Use d3 to update each cell's text with
// // ufo report values (Date, City, State, Country, Shape, Duration, Comments) -c
data.forEach(function(ufoReports) {
  console.log(ufoReports);
  var row = tbody.append("tr");
  Object.entries(ufoReports).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo report object
    var cell = row.append("td");
    cell.text(value);
  });
});


// Filtering By Date and Clicking Filter Button
// Create event handlers 
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {


  // Clear table before populating with Filtered Data
  tbody.html("");

  // Select the input date get the raw HTML nodes
  var inputElement = d3.select("#datetime");
  // Get the value property of the input date, state, shape
  var inputValue = inputElement.property("value");
  // console.log input value
  console.log(inputValue);
  // Filter Data with datetime equal to input value
  var filteredData = tableData.filter(data => data.datetime === inputValue);
  // console.log filter values
  console.log(filteredData);


  filteredData.forEach(function(filterReports) {

  console.log(filterReports);
  // Append one table row `tr` for each UFO Sighting object
  var row = tbody.append("tr");
  // Use `Object.entries` to console.log each UFO Sighting value
  Object.entries(filterReports).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

// Reset Form **** BUTTON CODE
var button2 = d3.select("#reset-btn");

button2.on("click", function() {


  // Clear table before populating with Filtered Data
  tbody.html("");

  data.forEach(function(ufoReports) {
    console.log(ufoReports);
    var row = tbody.append("tr");
    Object.entries(ufoReports).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});


// KEYPRESS INSTEAD OF CLICK BUTTON SUMBIT CODE

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {


    // TRYING TO STOP 404 ERROR on keypress ****
    res.sendFile('../index.html');
    // Clear table before populating with Filtered Data
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function(filterReports) {

    console.log(filterReports);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(filterReports).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
      });
   });
  }
});
