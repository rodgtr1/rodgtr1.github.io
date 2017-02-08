---
title: The Importance of Variable Placement in a JavaScript Function
author: Travis Rodgers
layout: posts
permalink: /the-importance-of-variable-placement-in-a-javascript-function/
thumbnail: /wp-content/uploads/2017/01/variable.jpg
image: /wp-content/uploads/2017/01/variable.jpg
categories: Tech
tags:
  - javascript
  - web development
---
In a JavaScript function, where you place your variables is VERY important. This was indeed an 'aha' moment for me, and for all the other new programmers out there hopefully this will benefit you.

### The Task

So my task was to create a function in JavaScript that would look through an array, identify the most recurrent number, and return the amount of recurrences. So if the array was [2, 9, 4, 2, 2], it would recognize that 2 is the most frequent number and return 3 because there are three 2's.

After much trial and error I produced this:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">var maximumFrequency = 0;  
var counter = 0;   
function mostRecurrentNumber(array) {
    for (var i=0; i&lt;array.length; i++)  {  
        for (var y=i; y&lt;array.length; y++)  {  
            if (array[i] == array[y]){  
                counter++;  
            if (maximumFrequency&lt;counter)  {  
                maximumFrequency=counter;   
            }  
          }
        }  
      counter=0;
    }  
  return maximumFrequency;
};</pre>

In the above function we created two 'for' loops that will cycle through all the numbers. So the first loop will look at the first number in the array and trigger the second 'for' loop that will cycle through all the numbers and compare them to the first number.

If the numbers match, our counter advances to 1. If this counter is more than the maxFrequency, then the maxFrequency takes the counter&#8217;s value. After the second 'for' loop looks through all the numbers, the counter resets, the first 'for' loop moves to the second number and the second 'for' loop cycles through the numbers again to compare. Ultimately at the end, the highest count will give that value to the maxFrequency variable.

### The Complication

However, this function only worked &#8230;.. halfway. Let me explain:

When I ran this I got 2:

mostRecurrentNumber([3, 6, 4, 4]);

->2

Great!

Yet when I tested what would happen on calling the function multiple times (looking to get the answer to the final call), I got 3, when I should have gotten 0:

mostRecurrentNumber([3, 6, 4, 4]);
  
mostRecurrentNumber([3, 6, 4, 4, 4]);
  
mostRecurrentNumber([])

->3

Why was I not getting 0? And why was I getting 3???

### The Solution

What I came to realize was that the maxFrequency variable was keeping the highest value without resetting itself upon re-calling the function.

Why in the world was it doing that?

Take a minute and see if you can figure it out....

.............

Well take a look at the variables. They are outside of the function. Thus the maxFrequency variable was not resetting within the function when it moved to the next call. It was keeping the highest number, which at the end of the three calls would be 3.

Can you see what the solution would be then?

Yes &#8230; move the variables WITHIN the function. Thus, the function when re-called, sets the maxFrequency back at 0. It would look like this:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true ">function mostRecurrentNumber(array) {
var maximumFrequency = 0;  
var counter = 0; 
    for (var i=0; i&lt;array.length; i++)  {  
        for (var y=i; y&lt;array.length; y++)  {  
            if (array[i] == array[y]){  
                counter++;  
            if (maximumFrequency&lt;counter)  {  
                maximumFrequency=counter;   
            }  
          }
        }  
      counter=0;
    }  
  return maximumFrequency;
};</pre>

The answer to the below example would now be 0:

mostRecurrentNumber([3, 6, 4, 4]);
  
mostRecurrentNumber([3, 6, 4, 4, 4]);
  
mostRecurrentNumber([])

->0