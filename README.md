# Stocks Evaluation: Predicting Future Trends in the Stock Market

## Overview 

Problem Statement: An Investor with a portfolio containing 3 stocks (Netflix, Blackberry, and Alphabet Inc.) would like to know based on historical data if they can accurately predict the future days price. 

Based on historical data, *Stock Solutions*, a newly founded company helping investors make decisions, will utilize many variables available from Yahoo Finance to predict the future closing price. In order to help new investors make a decision, the company will be using a Machine Learning Model - LSTM for future predictions. 

The reason why we selected our topic is due to the ever changing circumstances in the market that make it hard for traders to predict when the best time to buy or sell is. Having historical data from over 10+ years will help us evaluate previous data in order to predict future trends in the market for the stocks selected. This will help our investors thoroughly evaluate their portfolio's to determine what they should do with their stocks. Our goal is to train the model well enough to have the predictions align closely with the actual results. 

## Portfolio

Blackberry (BB) - A small sized company incorporated in 1984, Blackberry operates with a total of 3,325 employees within Waterloo, Canada. BB provides intelligent security software and services to enterprises and governments worldwide, being much more than a cellular phone company. The company has 3 segments: Cybersecurity, IoT, and Liicensing. As of this year, Blackberry owned roughly 38,000 worldwide patents and applications. Currently it operates at a Market Cap of 2.655 Billion. 

Netflix (NFLX) - A medium sized company, Netflix is headquartered in Los Gatos, California and incorporated in 1997. It is a full service entertainment company offering TV series, documentaries, feature films, mobile games with different genres and languages. It is a membership based company, providing users access to streaming content through a host of internet-connected devices. The Company to date has roughly 222 Million paid members in 190 countries. Netflix also owns rights to it's own films and television series. Currently it operates at a Market Cap of 103.4 Billion. 

Alphabet Inc. (GOOGL) - A large sized company, Alphabet Inc. also known as 'Google', was founded in 1998 and headquartered in Mountain View, California. Providing various products and platforms around he world, it operates through Google Services, Google Cloud, and other Bets segments. The company employs over 174,000 people around the world, and has a market capitlization of 1.297 Trillion. 

The 3 stocks above were chosen specifically for this portfolio to demonstrate the differences in prediction within the Technology and Communication services sectors. By having companies ranging from low, medium to large, it helps us visualize and see if the data has any effect on the resulting predictions for the future against the actual stock prices. 

## Source of Data

We will be utilizing stocks from 3 companies from Yahoo Finance as the source of data. We have exported data with maximum history to evaluate daily open and close price. The stocks we are evaluating using the model are Alphabet Inc., Netflix, Blackberry. The reason we chose these stocks is because we wanted to utilize stocks that have been around for a very long time and can show trends through out different periods having gone through different environmental and financial changes. 

Resources:
1) Application

    * AWS
    * Github
    * Tableau
    * Visual Studio Code
    * PostgreSQL

2) Languages:

    * Python
    * Javascript
    * HTML

3) Tools:

    * Pandas
    * Numpy
    * Matplotlib
    * Psycopg
    * Scikit-Learn
    * Tensorflow
        
4) Google Slides - Click here [GoogleSlides](https://docs.google.com/presentation/d/1DvQUJBw4VPTkZ_RZ826ioS6TOgaleCb9bUE36nq1HkQ/edit?usp=sharing)


## Data Analysis

### Diagram

Below is a screenshot of the conceptual diagram of the of the 3 companies data. 

![image](https://user-images.githubusercontent.com/104603037/191878164-2a1a34a7-2605-4e59-857c-7b852db095a9.png)

### Questions during Analysis


A few questions we hope to answer as we examine this data are:

1) How good is the LSTM Model to predict future trends?
2) Could LSTM Model forecast the different stocks with same neurons and layers?
3) Are there current environmental constraints affecting the stock price? 

### Database & Machine Learning Model Steps

1) Connect the Data from CSV Files into PostgreSQL and store on cloud server - AWS RDS
2) Retrieve Data in Jupyter and read into Dataframe - Separate for each Stock in Portfolio

    * Drop null & columns not being used for analysis

    * Change data type for Date 

    * Select input features: Open, High, Low, Close

    * Create new dataframe with training data

![BB_Training]()
**Blackberry Training Data**

![NFLX_Training]()
**Netflix Training Data**

![Google_Training]()
**Alphabet Inc. Training Data**

3) Training the Dataset 

    * Use Standard Scaler to scale training dataset - MinMaxScaler/Standard Scaler

    * Create x_train and y_train to train the model 

    * Define days to look back and future number of days to predict closing costs 

    * Create x_test list

![Netflix_Training_dataset]()
**Example: Netflix is shown above as an example to show how the dataset was trained**

4) Building LSTM Model

    * Define model as sequential, add hidden layers

    * Add output layer containing 1 unit

    * Compile model using adam optimizer and MSE 

![Model_Summary_Netflix]()
**Netlflix Model Summary**

    * Fit the model with training data

5) Test Prediction Model

    * Perform inverse transformation

    * Create y_test data to compare with predictions

![Netflix_ytestdata]()
**Netflix y_test Data**

    * Calculate MSE

6) Plot test Prediction against Actual

    * X Label: Date in "Years", Y Label: Stock Price


**Chart 1: Netflix Stock Price LSTM Model**

![NFLX_Chart](https://github.com/kareng013/Team_12/blob/main/presentation%20images/NF_2017_800_500.png)


**Chart 2: Alphabet Inc. Stock Price LSTM Model**

![GOOGL_Chart](https://github.com/kareng013/Team_12/blob/main/presentation%20images/GG_2017_200_100.png)


**Chart 3: Blackberry Stock Price LSTM Model**

![BB_Chart](https://github.com/kareng013/Team_12/blob/main/presentation%20images/BB_2017_64_32.png)


## Results 

1) How good is the LSTM Model to predict future trends?

    As the results have shown above, the LSTM Models predictions were fairly close to the actual trends for each stock in predicting the future days stock prices. 
    At first we used data from over 10+ years, which really affected the model and future predictions being inaccurate due to overload of data. Then we scraped the years down to the past 5 years, and this was done because all 3 stocks showed more activity within the most recent years as opposed to the earlier years. The one exception being Blackberry, which had more activity in the earlier years prior to 2017. 

2) Could LSTM Model forecast the different stocks with same neurons and layers?

    Through various experiments, we found that every stock needs different numbers of neurons and layers to be able to forecast accuratly. This involved us to experiment with the numbers more in order to come close to the actual results. If we did have more time, we could have researched more into the different neurons and layers applicable for these data types. The MSE results would also vary based on the neurons and layers chosen. 

**GOOGL MSE**                                           **NFLX MSE**                                                **BB MSE**
![GOOGL_MSE]()                                          ![NFLX_MSE]()                                               ![BB_MSE]()

3) Are there current environmental constraints affecting the stock price? 

    Various environmental and financial constraints can sway the results from our LSTM Model in predicting the future stock price. As much as it is a great guidance, there's variables that can be incorporated to show how results may change due to consumer patterns, inflation, increasing interest rates etc. Because of this, our model can never be completely accurate and should only ever be used as a guidancce to help determine the next few days closing stock prices. 


## Resources

Yahoo Finance - 
https://ca.finance.yahoo.com/quote/GOOGL/profile?p=GOOGL 
https://ca.finance.yahoo.com/quote/BB?p=BB&.tsrc=fin-srch
https://ca.finance.yahoo.com/quote/NFLX?p=NFLX&.tsrc=fin-srch


