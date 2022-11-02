  #Introduction:

This is the first iteration of my to-do list/mood tracker on Google Sheets. 
The code in "Sheets_app_script" is google apps script code which is used in conjunction with 
the sheet below.

https://docs.google.com/spreadsheets/d/1lX7YRxbwzXpgU1lHnHGihWBysvHp2bqpyT0y1qSIBJc/edit?usp=sharing

The sheet by itself still has many automated features. All that the code does is create a new button aptly named "Next Week" which pushes 
some data from the current week to another sheet for tracking and replaces the current (blue) week with the coming week (green week). 
In essence clicking the button just moves the sheduler one week ahead while also storing some of the past week's data.


/////
/////


However as previously mentioned the plain sheet still contains many automated features such as:

1. The date at the top is automatically updated.

2. The current day of the to-do calendar is highlighted.

3. Depending on the completion percentage of a day's to-do list the
"percentage completed" number will change colors to describe the success or failure 
of completing a day's list. For example, to-do lists with greater than 50% completion will boast a "percentage completed" 
number highlighted in green while to-do lists with less than 50% completion will boast an orange "percentage completed" number)

4. And the same goes for "organizational tasks" but instead this percentage is determined by 
calculating the percentage of to-do list items in the range 5-7 not the entire to-do list.

////
////

Instructions:

1. Open the google sheets link.

2. Select file and click "Make a copy".

3. Open the new copy of the sheet which you now have edit access to and fill in the to-do list with whatever you'd like :)
