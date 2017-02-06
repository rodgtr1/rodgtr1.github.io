---
title: A Simple and Practical Explanation of firstChild, childNodes, nodeValue
author: Travis Rodgers
layout: posts
permalink: /a-simple-and-practical-explanation-of-firstchild-childnodes-nodevalue/
thumbnail: /wp-content/uploads/2017/01/html-node-copy.jpg
image: /wp-content/uploads/2017/01/html-node-copy.jpg
categories: Tech
tags:
  - nodes
---
I recently had an exercise where I was asked to manipulate nodes using firstChild, childNodes, and nodeValue. In my search to better understand these I found many sites explaining the technical jargon behind them and also providing somewhat complex examples of their uses.

However. I was not able to find a simple, practical, "newbie" example in order to better understand the root concept itself.

So in my failure to find this, I decided to write a brief post showing and explaining these three properties _in use_.

### Our HTML Example

So let's start with this HTML file. We will access certain nodes within this file using firstChild, childNodes, and nodeValue:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">&lt;html&gt;
  
    &lt;head&gt;
        &lt;nav class="nav-item"&gt;
            &lt;a href="#"&gt;Menu Item&lt;/a&gt;
        &lt;/nav&gt;
    &lt;/head&gt;
  
    &lt;body&gt;
    &lt;section&gt;
        &lt;div&gt;  
            &lt;a href="#"&gt;Link 2&lt;/a&gt;
        &lt;/div&gt;
      
        &lt;div&gt;  
            &lt;a href="#"&gt;Link 3&lt;/a&gt;
        &lt;/div&gt; 
      
        &lt;div&gt;  
            &lt;ul&gt;
                &lt;li&gt;First&lt;/li&gt;
                &lt;li&gt;Second&lt;/li&gt;
                &lt;li&gt;Third&lt;/li&gt;
                &lt;li&gt;Fourth&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
      
        &lt;div&gt;  
            &lt;a href="#"&gt;Link 4&lt;/a&gt;
        &lt;/div&gt;
    &lt;/section&gt;
    &lt;/body&gt;

&lt;/html&gt;
</pre>

So at a quick glance, we have four links and an unordered list with four list items.

### firstChild

Let's look at this Script:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">var firstExample = document.getElementsByTagName('a')[1];
firstExample.firstChild.nodeValue = "Link 10";</pre>

For our first example we create a variable called firstExample that will access the second link on the page (note the 'a'; tag and the \[1\] (because we start at 0, this will be the second link).

We then take this variable and add on .firstChild. This will look at this 'a' tag and access it's first child which is going to be the link name.

We then add on .nodeValue which will access the value of this firstChild which is the text, 'Link 2'.

Finally we take that nodeValue and change it to say 'Link 10' instead.

### childNodes

Next, we will look at this Script:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">var secondExample = document.getElementsByTagName('ul')[0];
secondExample.childNodes[1].innerText = 'Check it out';</pre>

For our second example we create a variable called secondExample that will access the very first 'ul' tag on the page (note the [0]).

We then take this variable and add on .childNodes. This will look at this 'ul' tag and give us access to its children (the list items).

**Important: Why did we not use [0] for the first child node? Because, this actually gives us access to the whitespace between the end of the 'ul' tag and the first 'li' tag (an explanation of this can be abundantly found on a Google search). So [0] gives us whitespace, [1] gives us the first item, [2] gives us the next whitespace, [3] gives us the second item, etc. From what I have read this varies in different browsers???? **

We then add on .innerText which will access the value of this childNode, which is the first list item called 'First.'

Finally we take that text and  change it to say 'Check it out' instead.

### nodeValue

So what if I enter this:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">var thirdExample = document.getElementsByTagName('a')[2];
thirdExample.nodeValue = "The Third link";</pre>

Will this work? Will this change the text of the third link to 'The Third Link'?

No it will not.

Why?

Because the nodeValue is the anchor tag (an element). If you change the second line to say alert(thirdExample.nodeValue);, then you will get null. You cannot treat an element (anchor tag) like text. If you put in nodeName in the place of nodeValue, you can see it return an 'A' telling us it is an anchor tag.

So what we need to do is look at the nodeValue of the firstChild of the anchor tag, and it will give us access to the actual text of the link as seen here:

<pre class="whitespace-before:1 whitespace-after:1 lang:default decode:true">var thirdExample = document.getElementsByTagName('a')[2];
thirdExample.firstChild.nodeValue = "The Third link";</pre>

### Result

Here is a snapshot of the changes we made above:

<a href="http://pursuingthetech.com/wp-content/uploads/2017/01/nodes.jpg"><img id="node-image" src="http://pursuingthetech.com/wp-content/uploads/2017/01/nodes.jpg" alt="childNodes"/></a>

In addition, here is a <a href="http://jsbin.com/ruwodiluco/edit?js,output" target="_blank">link to this exercise in JS Bin</a> so that you can manipulate these yourself.

### Conclusion

I hope the article was helpful for those of you new to these property types. **Please feel free to add to the dialogue in the comments below!!**

**This article is to provide basic and practical examples of these properties for those who may be new to them. There is of course much more to be said (such as exceptions, technical considerations, etc.), however, this was not the intention of the article, and there are many sites out there to explain these in more depth.

&nbsp;