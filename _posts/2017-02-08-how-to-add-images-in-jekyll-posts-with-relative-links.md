---
title: How To Add Images In Jekyll Posts With Relative Links
author: Travis Rodgers
layout: posts
permalink: /how-to-add-images-in-jekyll-posts-with-relative-links/
image: assets/img/jekyll-images.png
thumbnail: assets/img/jekyll-images.png
description: Here is how you can add images in Jekyll posts using relative links for sites hosted on Github.
categories: Tech
tags: 
- jekyll
published: false
---

So you are hosting your Jekyll site on Github and are writing a new blog post. You go to add an image within the post using Markdown and it fails. You double check the path and its correct. You try adding a leading "/" to no avail.  

You then pull up dev tools and notice that the image path is tacked onto the end of the post URL. That isn't what you want.

You immediately do some Google searching and half an hour later you are confused about baseurl. Rest assured, you will eventually find an answer, but for now let me speed that search up for you Jekyll newbies (like me). 

Here is how you do it:

Say your path is assets/images/family.jpg

All you do is put {% raw %} __{{site.url}}__ {% endraw %} or {% raw %} __{{site.github.url}}__ {% endraw %} before your path. 

Thats all. 

Cheers!