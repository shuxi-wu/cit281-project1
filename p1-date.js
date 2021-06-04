/* 
    CIT 281 Project 1 
    Name: Shuxi Wu
 */
/* Output to the console the day of the week of the current day. 
The day of the week must be the full name for the day (e.g., Sunday, Monday).
Your solution must use an array that contains the days of the week. */
console.log('Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ')[new Date().getDay()-1])
