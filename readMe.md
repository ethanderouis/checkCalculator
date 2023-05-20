# Check Calculator

## Project Information
Creating a little web application that estimates my next paycheck using the information provided by my clock out tabs.
Federal Tax with-held is something I cannot calculate that is why the app is only use for estimation.
Although, I did find out that subtracting tip refund allows me to be only 10 dollars off the expected value.
Each clock out tabs provides information about the shift which includes: shift hours, sales, tipshare, and charge tips.
Tip refund is something I manually record and gathered from my chechout sheet, while incentive tabs are determined by number of tickets acquired from running an item to the customer.
Incentive Tabs are worth 0.10 cents each
Tipshare is calculated by dividing your total sales by 100 and multiplying 3.02 from it. Both tip refund and tip share are negative values subtracted from your charge tips.<br>
Basic formula for the paycheck: paycheck = Charge tips + Incentive Tabs + hours*hourlywage - tip refund - tipshare

## How the project works
Basically, I will input shift information in the web page and press calculate.
Everytime the calculate button is pressed, it will added money earned that day to the total. 
Keep in mind that the program only work by updating the page by adding new information. 
It is not connected to a database so when you refresh the page, the paycheck total goes back to 0 and you would have to re-input everything back again in the page.
I do not think this is the most efficient yet due to restarting the whole everytime a user messes up, but it is at least functional.<br>

## Different Sections
### Shift Information
This section is where the user will input each shift information.

### Bi-weekly Work Statistics 
This section is the statistics involved in determining how the paycheck information was acquired. Good for checking work by hand.

### Paycheck information
This section is probably the MOST important section and maybe the reason why this whole application was built. It displays the predicted paycheck amount for the next pay period.

### Server Score
This section just gives a server score, mainly a quick analysis on how good of a server I was during this two week period. Even though it is multi-factorial when it comes to this job, there is still a correlation between service and tips.