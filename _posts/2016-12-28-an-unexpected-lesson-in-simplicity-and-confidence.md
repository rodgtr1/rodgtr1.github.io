---
title: An Unexpected Lesson In Simplicity And Confidence
author: Travis Rodgers
layout: posts
permalink: /an-unexpected-lesson-in-simplicity-and-confidence/
thumbnail: /wp-content/uploads/2016/12/Keep_it_Simple_3340381990.jpg
image: /wp-content/uploads/2016/12/Keep_it_Simple_3340381990.jpg
categories: Tech
tags:
  - learning
---
In my previous post I noted that I did not pass my first assessment at Bloc. Since this happened, I have been really digging in, solving the problems that I got wrong, re-reviewing the material, practicing with online exercises, etc. Most importantly, I worked yesterday with my Bloc mentor and learned a valuable lesson. Let me tell you about it.

I had been stuck on one JavaScript question (_before and after code **below**_). I had formulated several solutions, all of which were a bit lengthy. In addition, I was all but confident in them.

When I showed the question to my mentor, he first proposed some pseudocode, then filled it in with real code, and produced what would be his answer to it. I sat there waiting for him to add to it, I mean, it was only one line of code!! But as I looked at the code, it made sense. It WAS the solution.

Of course, I had to ask: "Well what if we wanted to check the other three numbers in the array? Wouldn't we need a loop in order to search each index to see if any others matched?"

His response: "We could, but that is not what the question asked......It did not ask us to do that."

And that was that. And THAT was powerful.

As a newbie, I default to trying to stick to exact formulas or to write a code that looks impressive. However, as one grows and becomes more confident, it is the simplicity of the answer that demonstrates confidence. In other words, as one grows in this field, the aim of coding is simplicity....clarity.

> Confidence is demonstrated in simplicity. Insecurity is demonstrated in flashy (yet uncertain) complexity.

This is golden! Get to the point. Once you are there, stop typing!

Well, my redo assessment is today at 3 p.m. I'll approach it with this lesson in mind.

#### **The Exercise:**

Write a function that takes 2 arguments &#8211; an array of numbers and a number
  
And returns true if the array contains the number

**<u>My Initial Unsure And Inaccurate Code</u>**

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">function numEquals(number){ 
  var array = [3, 5, 7];
  for(var i = 0; i &lt; array.length - 1; i++){
    if(array[i] = number){ 
      return true;
  }else{
      return false;
    }
  }
}</pre>

**<u>My Post Mentor Meeting Code</u>**

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">function numEquals(number){
  var array = [3, 5, 7];
    return(array.indexOf(number) &gt;= 0);
}
</pre>

**
  
Have you found this to be the case? Share about it below.**