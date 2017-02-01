---
id: 153
title: 'Using Two For Loops In JavaScript: Part 1'
date: 2017-01-13T13:18:27+00:00
author: Travis Rodgers
layout: posts
guid: http://pursuingthetech.com/?p=153
permalink: /using-two-for-loops-in-javascript-1/
dsq_thread_id:
  - "5459408105"
image: /wp-content/uploads/2017/01/two-for-loops.jpg
categories: tech
tags:
  - arrays
  - loops
---
So here is an array:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">var array = [3, 2, 3, 5, 5, 7, 5, 1];</pre>

<span class="wpsdc-drop-cap">T</span>here are times when you will need to loop through this array comparing one number with the other numbers. For instance, you start with 3 and compare it with 3, then 2, then 3, then 5, then 5, etc. until you get to the end.

Next, you may want to move to the second number and cycle through the numbers again. So you would take 2 and compare it with 3, then 2, then 3, then 5, then 5, etc. until you get to the end.

This is very useful and very common. So, how do we do this?

We do this by using two _for_ loops.

### The First Loop

The first loop will cycle us through the numbers. This is just a standard _for_ loop:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">for(var i = 0; i &lt; array.length; i++){
    // do something
}</pre>

For those unfamiliar with _for_ loops, this loop basically says three things:

  1. **var i = 0** sets the variable before the loop starts (NOTE: This is a ZERO and not the letter O). So the variable i will equal 0.
  2. **i < array.length** is the &#8220;if&#8221; statement. If i is less than the length of the array, the loop will execute.
  3. **i++** says that after the loop does something, the variable i will increment one (0 will become 1).

### The Second Loop

The second loop is going to look the same but with a different variable. Lets make that different variable the letter j:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">for(var j = 0; j &lt; array.length; j++){
    // do something
}</pre>

The second loop will also cycle through the numbers but there are _**a few differences**_.

  1. This loop is nested **inside** the first _for_ loop. This means the first loop will execute, move to the second loop where the second loop will continue to loop until completion, and then the first loop will execute again, move to the second loop where the second loop will loop until completion, etc., etc., until the first loop is completed.
  2. The variable is different. This allows the second loop to move through the array independent of the first loop&#8217;s variable.

### The Two For Loops Together

So here are both loops together:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true ">for(var i = 0; i &lt; array.length; i++){
    for(var j = 0; j &lt; array.length; j++){
        // do something
    }
}</pre>

So lets look at our array again:

<pre class="lang:default decode:true">var array = [3, 2, 3, 5, 5, 7, 5, 1];</pre>

  * The first loop will start with [0] which is the number 3 (remember in arrays the first number index is 0).
  * The first loop will sit on the number 3 while the second loop, with the variable j, cycles through all the numbers.
  * Once all the numbers have been cycled through, the first loop then moves from 0 to 1 (x++), looks at the conditional (is 1 < array.length), and then executes, which looks at the second loop again. The second loop cycles through all the numbers while the first stays on 2. And repeat&#8230;.

### A Practical Example

So what do two _for_ loops look like practically? Well, we will look at a practical example in Part 2.

&nbsp;