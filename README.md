# Stocks Evaluation: Predicting Future Trends in the Stock Market

## Overview 

Problem Statement: An Investor with a portfolio containing 3 stocks (Netflix, Blackberry, and Google) would like to know based on past closing prices if they should hold, sell or purchase more shares in their portfolio for the future. 

Based on historical data, we will utilize the daily price of the stock at close to predict the next days closing price in order to help new investors make a decision using machine learning model LSTM for future predictions. 

The reason why we selected our topic is due to the ever changing circumstances in the market that make it hard for traders to predict when the best time to buy or sell is. Having historical data from over 10+ years will help us evaluate previous data in order to predict future trends in the market for the stocks selected. This will help our investors decide the best time to buy and sell the specific stocks selected. 

## Portfolio

Blackberry

Netflix

Google

## Source of Data

We will be utilizing stocks from 3 companies from Yahoo Finance as the source of data. We have exported data with maximum history to evaluate daily open and close price. The stocks we are evaluating using the model are Google, Netflix, Blackberry. The reason we chose these stocks is because we wanted to utilize stocks that have been around for a very long time and can show trends through out different periods having gone through different environmental and financial changes. 

Resources:
1) Yahoo Finance

2) Software
    * Visual Studio Code
    * Jupyter Notebook
    * SQLAlchemy + PostgreSQL
    * Language: Python, Javascript, HTML
    * Machine Learning dependencies: 
        Pandas
        Numpy
        Matplotlib
        Psycopg
        MinMaxScaler
        Standard Scaler
        

3) Tableau 

5) Google Slides - Click here [GoogleSlides](https://docs.google.com/presentation/d/1DvQUJBw4VPTkZ_RZ826ioS6TOgaleCb9bUE36nq1HkQ/edit?usp=sharing)


## Data Analysis

### Diagram

Below is a screenshot of the conceptual diagram of the of the 3 companies data. 

![image](https://user-images.githubusercontent.com/104603037/191878164-2a1a34a7-2605-4e59-857c-7b852db095a9.png)

### Questions during Analysis


A few questions we hope to answer as we examine this data are:

1) Is this portfolio volatile?
2) How long should the stocks be held for?
3) Are there current environmental constraints affecting the stock price compared to previous years?
4) What are other factors affecting the stock price in the time period evaluated?

### Database & Machine Learning Model Steps

1) Connect the Data from CSV Files into PostgreSQL and store on cloud server - AWS RDS
2) Retrieve Data in Jupyter and read into Dataframe - Separate for each Stock in Portfolio
    * Drop null & columns not being used for analysis
    * Change data type for Date 
    * Select input features: Open, High, Low, Close
    * Create new dataframe with training data
3) Training the Dataset 
    * Use Standard Scaler to scale training dataset - MinMaxScaler/Standard Scaler
    * Create x_train and y_train to train the model 
    * Define days to look back and future number of days to predict closing costs 
    * Create x_test list
4) Building LSTM Model
    * Define model as sequential, add hidden layers
    * Add output layer containing 1 unit
    * Compile model using adam optimizer and MSE 
    * Fit the model with training data
5) Test Prediction Model
    * Perform inverse transformation
    * Create y_test data to compare with predictions
    * Calculate MSE
6) Plot test Prediction against Actual
    * X Label: Date in "Years", Y Label: Stock Price




## Results 


