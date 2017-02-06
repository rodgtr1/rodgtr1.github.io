---
title: 'Spark A Child&#8217;s Interest In Coding With This Silly Program'
author: Travis Rodgers
layout: posts
permalink: /spark-child-interest-in-coding-with-silly-program/
thumbnail: /wp-content/uploads/2017/01/kids-coding.jpg
image: /wp-content/uploads/2017/01/kids-coding.jpg
categories: Tech
tags:
  - children
---
I keep hearing stories about kids learning to code and it really puzzles me. Maybe because I could not see myself doing it as a pre-teen/teenager (which of course is NOT a good way to gauge things). Perhaps it was because I did not know anyone who coded nor did anyone introduce me to it. Perhaps it was because computers were not as normative as they are now, I mean, it wasn&#8217;t until high school that I even used the internet (i'm 35)?

Whatever the case, I seem to have a hard time imagining my 8-year-old daughter getting into strings or functions or arrays, etc.,

### But then&#8230;.

But then there are a few books I have come across recently, in particular <a href="http://amzn.to/2jDN4kP" target="_blank">JavaScript for Kids: A Playful Introduction to Programming</a>, that have revved up the cognitive cogwheels. For some reason I feel like this book would have appealed to me if I were young again. And to be honest, I find it a refreshing book even now, especially with all of the practical things you build in it.

### The Test

Well, just to test the interest, I decided to try something out on my daughter.

I created a simple and silly prompt/alert program in JavaScript called Travis's Truth Machine. Basically, you click the button and it asks you for a name. If the name happens to be any one of my four children, or my wife, it gives a funny answer such as, "Your name means Dirty Frog;" or for me it is "Your name is the best ever."

### The Response

I let them see it and it was a hit! It was the craze for the day. There just may be some truth to kids and coding, especially if there is a practical benefit (even though it was a silly game).

Try it out with your kids. It's very basic, yet it just may be that spark that directs them toward an interest in coding.

Here is the JavaScript code I created, adding some simple HTML so I could make it look a tad more appealing. I changed some of the names and alerts, so customize them accordingly:

<pre class="lang:default decode:true ">&lt;html&gt;
  &lt;body&gt;
    &lt;h2&gt;Travis's Truth Machine&lt;h2&gt;
    &lt;h4&gt;&lt;em&gt;I will tell you the truth about your name!&lt;/em&gt;&lt;/h4&gt;
    
    &lt;button onclick="nameGame()"&gt;Click for the truth&lt;/button&gt;

  &lt;script&gt;
    function nameGame() {
    var name = prompt("Hello, what is your name?");
    if(name == "Travis"){
      alert("Awesome name");
    }else if(name == "Jenny"){
      alert("Your name means Smelly Frog");
    }else if(name == "Ben"){
      alert("Your name is Weird");
    }else if(name == "Timothy"){
      alert("Your name means Swinging Monkey");
    }else if(name == "Suzie"){
      alert("Wonderful name!");
    }else if(name == "Bobby"){
      alert("Your name means Wet Dog");
    }else if(name == "Kate"){
      alert("Your name smells like garlic");
    }else{
      alert("Your name is boring");
  }
}		
  &lt;/script&gt;

  &lt;/body&gt;
&lt;/html&gt;</pre>

Add some CSS. Let your kids see you add more to it and make changes.

I hope they will find something like this as interesting as mine found it.

Happy coding!

**What are your experiences with children and coding? I would love to hear in the comments below.**