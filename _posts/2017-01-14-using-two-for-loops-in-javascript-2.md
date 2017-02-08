---
title: 'Using Two For Loops In JavaScript: Part 2'
author: Travis Rodgers
layout: posts
permalink: /using-two-for-loops-in-javascript-2/
thumbnail: /wp-content/uploads/2017/01/two-for-loops.jpg
image: /wp-content/uploads/2017/01/two-for-loops.jpg
categories: Tech
tags:
  - javascript
---
In <a href="http://pursuingthetech.com/using-two-for-loops-in-javascript-1/" target="_blank">Part 1</a> we looked at how using two for loops works. In this post, we will look at a practical example to see how this can be implemented.

### Example

So here is the proposed exercise to demonstrate two for loops in action:

<p style="padding-left: 30px;">
  <strong>Try to find the most frequent number in an array and how many times it occurs.</strong>
</p>

So let's begin with a function :

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">function mostFrequentNumber(array) {
// do something
};</pre>

&nbsp;

Next, lets add some variables. highestFrequency will store the amount of highest occurrences. The counter will&#8230;.well&#8230;be our counter. And the item will be the number that occurs the most:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">function mostFrequentNumber(array) {
var highestFrequency = 0;  
var counter = 0; 
var number;
};</pre>

&nbsp;

Next, lets add our two for loops:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">function mostFrequentNumber(array) {
var highestFrequency = 0;  
var counter = 0; 
var number;
    for (var i = 0; i < array.length; i++) {  
        for (var y = 0; < array.length; y++) {  
};</pre>

&nbsp;

Next, we need the second for loop to _do something_. As we look at our first number that our first loop stopped on, we need to compare all the numbers in the array with it to see if we have a match. Thus we will add:

<pre class="lang:default decode:true">function mostFrequentNumber(array) {
var highestFrequency = 0;  
var counter = 0; 
var number;
    for (var i = 0; i < array.length; i++) {  
        for (var y = 0; y < array.length; y++) {  
            if (array[i] == array[y]) {  
                counter++;  
};</pre>

So if our number in the first loop matches the number in the second loop, the counter increments one. If the number in the first loop matches with the second number of the second loop (second in the array), then the counter increments another, etc, etc. If any do not match, it does not increment the counter and moves on to the next index in the array.

&nbsp;

Next, we need to see if the counter is more than the highestFrequency (which is 0). If so, it will assign the amount in the counter to the highestFrequency variable. This will ensure that whenever the counter is at its highest, the highestFrequency will record that number and keep it.

In addition, the number attributed to the highest frequency will also be recorded in the number variable.

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">function mostFrequentNumber(array) {
var highestFrequency = 0;  
var counter = 0; 
var number;
    for (var i = 0; i < array.length; i++)  {  
        for (var y = 0; y < array.length; y++)  {  
            if (array[i] == array[y]){  
                counter++;  
            if (highestFrequency < counter)  {  
                highestFrequency = counter;
		number = array[i]; 
</pre>

&nbsp;

Finally, we have to reset the counter after the second loop completes so that we do not add duplicate occurrences. And we can alert our answer.

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">function mostFrequentNumber(array) {
var highestFrequency = 0;  
var counter = 0; 
var number;
    for (var i = 0; i < array.length; i++)  {  
        for (var y = 0; y < array.length; y++)  {  
            if (array[i] == array[y]){  
                counter++;  
            if (highestFrequency < counter)  {  
                highestFrequency = counter;
	        number = array[i];   
            }  
          }
        }  
      counter=0;
    }  
  alert("The number " + number + " at " + highestFrequency + " times!");
};</pre>
