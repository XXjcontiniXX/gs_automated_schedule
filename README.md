# Introduction

This is the first iteration of my to-do list/mood tracker on Google Sheets. 
The code in "Sheets_app_script" is google apps script code which is used in conjunction with 
the sheet below.

https://docs.google.com/spreadsheets/d/18JzQOYf13z-F06T0xhrEYGewd8FhOLB6Zn2evN2c-mA/edit?usp=sharing

The sheet by itself still has many automated features. All that the code does is create a new button aptly named "Next Week" which pushes 
some data from the current week to another sheet for tracking and replaces the current (blue) week with the coming week (green week). 
To summarize, clicking the "Next Week" button moves the current (blue) week's data to storage and shifts the coming (green) week to be the current week.



However as previously mentioned the plain sheet still contains many automated features such as:

1. The date at the top is automatically updated.

2. The current day of the to-do calendar is highlighted.

3. Depending on the completion percentage of a day's to-do list the
"percentage completed" number will change colors to describe the success or failure 
of completing a day's list. For example, to-do lists with greater than 50% completion will boast a "percentage completed" 
number highlighted in green while to-do lists with less than 50% completion will boast an orange "percentage completed" number.

4. And the same goes for "organizational tasks" but instead this percentage is determined by 
calculating the percentage of to-do list items in the range 5-7 not the entire to-do list.


# Instructions

1. Open the google sheets link.

2. Select file and click "Make a copy".

3. Open the new copy of the sheet which you now have edit access to and fill in the to-do list with whatever you'd like :)

### Drawbacks and bugs
1. The green week's date does not automatically change dates upon clicking _Next Week_, but has to be manually updated.

2. Changing the amount of checkboxes will result in the _Next Week_ button not working properly. Changing the format will cause issues. 
