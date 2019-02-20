
// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard);

// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it.
function drawDashboard() {
  $.ajax({
    url: 'https://my.api.mockaroo.com/human-detail.json?key=b42cf6b0',
    dataType: 'json',
    type: "GET",
    success: function(dataFromJSON){

  console.log("success");
  console.log(dataFromJSON);
  console.log(dataFromJSON[0].first_name, dataFromJSON[0].income);

  var data = new google.visualization.DataTable();
       data.addColumn('string','name');
       data.addColumn('number','Income');
         for (var i=0; i < dataFromJSON.length; i++) {
               console.log(dataFromJSON[0].first_name, dataFromJSON[0].income);
               data.addRow([dataFromJSON[0].first_name, dataFromJSON[0].income]);

             }

            var options = {
              title: 'Names vs Income'
            }

            var chart = new google.visualization.BarChart(document.getElementById("chart_div"));
               chart.draw(data, options);
},
error: function(error){
  console.log("error");
}


  })
}
