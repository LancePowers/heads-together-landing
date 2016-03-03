#Format and Methodology
This document is designed to be a high level overview of the engineering approach and structure. More specific notes will be available within the code base itself, but this should provide a good starting point for understanding and developing within the application and its implementation of the Angular framework.

##Setup and installation. 
1. If you haven't already, [install Node Package Manager](http://blog.npmjs.org/post/85484771375/how-to-install-npm).
1. Clone the project repo from [Heroku](https://devcenter.heroku.com/articles/git-clone-heroku-app) or [Github](https://help.github.com/articles/cloning-a-repository/)
1. In terminal, install node dependencies: 
```npm install```
1. Before editing, checkout a new branch and title it according to the feature you'll be working on.
```git checkout -b "your-feature"```


##Modular Components
The app is split into modular components, each of which has 4 standard files. 
 ---  --- 
 __*.module.js__  _Declares the module and any sub-components_.
 
 __*.directive.js__  _Holds controller and other functionality associated with the component_.
 
 __*.html__  _Component view_. 
 
 __*.css__  _Component style_. 
 
 __*.service.js__  _Additional files to hold functionality or data that is either too large to fit in the directive and/or needs to be used within multiple directives_. 

