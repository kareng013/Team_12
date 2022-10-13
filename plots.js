
// Create a function fo the Tableau Data Visualization link
function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/https://public.tableau.com/views/StockAnalysis_16644948441360/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}
function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");

    // Use the list of stocknames names to populate the select options
    var stockNames = ['BB', 'GOOGL', 'NFLX']
    stockNames.forEach((sample) => {
        selector
            .append("option")
            .text(sample)
            .property("value", sample);
    });
    // Use the first stockname from the list to build the initial plots
    var stockName = stockNames[0];
    chartIt(stockName);
}
function initDays() {
    // Grab a reference to the dropdown select element
    var day_selector = d3.select("#selDatasetdays");

    // Use number of days to populate the select options

    var days = [7, 30, 60, 90]

    days.forEach((sample) => {
        day_selector
            .append("option")
            .text(sample)
            .property("value", sample);
    });

    // Use the first number of days from the list to build the initial plots
    var day = days[0];
    chartIt(day);

}
// Initialize the dashboard
init();
let myChart;
function stocksChanged(stockName) {
    var day = d3.select("#selDatasetdays").node().value
    // console.log(day.node().value)
    myChart.destroy()
    // Fetch new data each time a new stockname is selected
    chartIt(stockName, day);
}

// Initialize the dashboard
initDays();
let myChartDays;
function daysChanged(day) {  
    var stockName= d3.select("#selDataset").node().value
    myChart.destroy()
    // Fetch new data each time a ne number of days is selected
    chartIt(stockName, day);
}

async function chartIt(stockName, day) {
    const data = await getData(stockName, day);
    const ctx = document.getElementById('chart').getContext('2d');
    myChart = new Chart(ctx, {

        type: 'line',
        data: {
            labels: data.xaxis,
            datasets: [{
                label: `${stockName} Stocks`,
                data: data.yaxis,
                fill: false,
                borderColor: "#084de0",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function (value, index, values) {
                            return value +'$';
                        },
                    }
                }
            }
        }
    });
}

async function getData(stockName, day) {
    const xaxis = [];
    const yaxis = [];

    console.log(stockName, day)

    const response = await fetch(`Resources/${stockName}.csv`);
    const data = await response.text();
    // console.log(data);

    let table = data.split('\n').slice(1);
    table = table.reverse().slice(0, day).reverse()
    // console.log(table);
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        xaxis.push(year);
        const close = columns[4];
        yaxis.push(close);

        // console.log(year, close);
    });
    return { xaxis, yaxis };

}
