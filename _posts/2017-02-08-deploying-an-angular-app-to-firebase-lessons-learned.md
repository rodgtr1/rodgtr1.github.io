---
title: Deploying an AngularJS App to Firebase - Lessons Learned
author: Travis Rodgers
layout: posts
permalink: /deploying-angularjs-app-to-firebase-lessons-learned/
image: assets/img/angularjs-to-firebase.jpg
thumbnail: assets/img/angularjs-to-firebase.jpg
description: In deploying an AngularJS app to Firebase, I encountered a few errors. Here they are and how I fixed them. 
categories: Tech
tags: 
- firebase
- angular
---

After using the Firebase database on a recent AngularJS Project, I decided I wanted to use this service to deploy my apps instead of [Netlify](http://netlify.com).

The [documentation](https://firebase.google.com/docs/hosting/deploying) was pretty straightforward: 
* Install Node.js
* Install the Firebase CLI using npm
* Login to your firebase account
* Initialize firebase in project root folder
* Choose your settings
* Deploy! 

*Voila.*

Unfortunately a couple hours later I was still scratching my head. 

Thus, here are a few lessons learned and how hopefully they can help you if you are also using it for the first time. 

**Scenario 1: Your deploy is complete and you visit the URL and get this:**

{:.center-post-image}
![]({{site.url}}/assets/img/firebase-notification.png)

Here is the issue: 

There is a prompt in the firebase init that asks: *What do you want to use as your public directory?* Choosing “public” because it is default is not really a good idea. You MUST choose the folder where your index.html is found. In many apps this is the root folder. In my case, with AngularJS, the index.html is not in the root directory. Where is it? Lets look at Scenario 2. 

**Scenario 2: Because it is AngularJS**

When you run firebase init, choose your ‘dist’ folder as this is where your website is "built." It also contains index.html. Note: On next prompt DO NOT overwrite index.html. Also choose Yes to single page app. After firebase init runs, make sure to run ‘grunt build’ in the Terminal before running 'firebase deploy' in order to update the build. 

**Scenario 3: Google font errors, Ionicons not showing**

Next up, I had errors with Google fonts as well as my Ionicons. In the Chrome dev tools you can troubleshoot this by looking in the Network tab to see what is not running. Also you can see in Console that Google fonts and Ionicons are using http and Firebase is asking for https. Why? Who knows. Answer - change http to https in your head source files. Now re-deploy.

**Conclusion**

More may be added to this list as I send more to Firebase. Stay tuned!