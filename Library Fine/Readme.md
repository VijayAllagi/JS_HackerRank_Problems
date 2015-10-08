<b>Problem Statement</b>

The Head Librarian at a library wants you to make a program that calculates the fine for returning the book after the return date. You are given the actual and the expected return dates. Calculate the fine as follows:

If the book is returned on or before the expected return date, no fine will be charged, in other words fine is 0.
If the book is returned in the same calendar month as the expected return date, Fine = 15 Hackos × Number of late days
If the book is not returned in the same calendar month but in the same calendar year as the expected return date, Fine = 500 Hackos × Number of late months
If the book is not returned in the same calendar year, the fine is fixed at 10000 Hackos.
Input Format

You are given the actual and the expected return dates in D M Y format respectively. There are two lines of input. The first line contains the D M Y values for the actual return date and the next line contains the D M Y values for the expected return date.

<b>Constraints</b> </br>
1≤D≤31 </br>
1≤M≤12 </br>
1≤Y≤3000 </br>
Output Format

Output a single value equal to the fine.

<b>Sample Input</b>

9 6 2015 <br>
6 6 2015 <br>

<b>Sample Output</b>

45
