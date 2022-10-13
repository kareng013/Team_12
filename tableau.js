function initViz() {
    var containerDiv = document.getElementById("tableauViz"),
    url = "https://public.tableau.com/views/StockAnalysis_16644948441360/Story1";

    var viz = new tableau.Viz(containerDiv, url);
}