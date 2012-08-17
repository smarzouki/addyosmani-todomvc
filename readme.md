# TodoMVC

#### Helping you select an MV\* framework


## Introduction

Developers these days are spoiled with choice when it comes to selecting an MV\* framework for structuring and organizing JavaScript web apps.

Backbone, Ember, AngularJS, Spine... the list of new and stable solutions goes on and on, but just how do you decide on which to use in a sea of so many options?

To help solve this problem, we created TodoMVC - a project which offers the same Todo application implemented using MV* concepts in most of the popular JavaScript MV\* frameworks of today.


#### Todo apps are included for:

- [Backbone.js](http://documentcloud.github.com/backbone)
- [Ember.js](http://emberjs.com)
- [AngularJS](http://angularjs.org)
- [Spine](http://spinejs.com)
- [KnockoutJS](http://knockoutjs.com) (MVVM)
- [Dojo](http://dojotoolkit.org)
- [YUI](http://yuilibrary.com)
- [Batman.js](http://batmanjs.org)
- [Closure](http://code.google.com/closure/library/)
- [Agility.js](http://agilityjs.com)
- [Knockback.js](http://kmalakoff.github.com/knockback)
- [Google Web Toolkit](https://developers.google.com/web-toolkit/)


###### Non MV*

- [jQuery](http://jquery.com)
- Vanilla JS

###### RequireJS

- [Backbone.js](http://documentcloud.github.com/backbone) + [RequireJS](http://requirejs.org) (using AMD)
- [Ember.js](http://emberjs.com) + [RequireJS](http://requirejs.org) (using AMD)


#### Labs

We also have a number of in-progress applications in Labs:

- [CanJS](http://canjs.us)
- [Maria.js](https://github.com/petermichaux/maria)
- [cujo.js](http://cujojs.github.com)
- [Meteor](http://meteor.com)
- [SocketStream](http://www.socketstream.org) + [jQuery](http://jquery.com)
- [Ext.js](http://www.sencha.com/products/extjs)
- [Sammy.js](http://sammyjs.org)
- [JavaScriptMVC](http://javascriptmvc.com)
- [Stapes.js](http://hay.github.com/stapes)
- [Epitome](http://dimitarchristoff.github.com/Epitome)
- [TroopJS](https://github.com/troopjs)
- [soma.js](http://somajs.github.com/somajs)
- [DUEL](https://bitbucket.org/mckamey/duel/wiki/Home)
- [Fidel](https://github.com/jgallen23/fidel)
- [Olives](https://github.com/flams/olives)
- [PlastronJS](https://github.com/rhysbrettbowen/PlastronJS)
- [Dijon](https://github.com/creynders/dijon-framework)
- [rAppid.js](http://www.rappidjs.com)
- [o_O](http://weepy.github.com/o_O)
- [Fun](https://github.com/marcuswestin/fun)
- [KnockoutJS](http://knockoutjs.com) + [RequireJS](http://requirejs.org) (using AMD)
- [AngularJS](http://angularjs.org) + [RequireJS](http://requirejs.org) (using AMD)
- [AngularJS](http://angularjs.org) (optimized)
- [Backbone.xmpp](https://github.com/ggozad/Backbone.xmpp)


## Live demos

Live demos are available on our [website](http://todomvc.com)


## Screenshot

![screenshot](https://raw.github.com/addyosmani/todomvc/master/screenshot.png)


## Team

TodoMVC would not be possible without a strong team of [contributors](https://github.com/addyosmani/todomvc/contributors) helping push the project forward each day. In addition, we have a core project team composed of:

#### [Addy Osmani](http://github.com/addyosmani) - Founder/Lead

<img align="left" width="40" height="40" src="http://www.gravatar.com/avatar/96270e4c3e5e9806cf7245475c00b275.png?s=40">
Addy is a Developer Platform Engineer at Google who originally created TodoMVC. He oversees the project direction, drives expansion and helps lead core development with Sindre Sorhus (by far our most active contributor!).

#### [Sindre Sorhus](https://github.com/sindresorhus) - Lead Developer

<img align="left" width="40" height="40" src="http://www.gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9.png?s=40">
Sindre is a Web Developer who drives core development, quality control and application design for the project. His contributions have helped us ensure consistency and best practices are enforced wherever possible.

#### [Gianni Chiappetta](https://github.com/gf3) - Logo designer


## Disclaimer

TodoMVC has been called many things including the 'Speed-dating' and 'Rosetta Stone' of MV* frameworks. Whilst we hope that this project is able to offer assistance in deciding what frameworks are worth spending more time looking at, remember that the Todo application offers a limited view of what a framework may be capable of.

It is meant to be used as a gateway to reviewing how a basic application using a framework may be structured and we heavily recommend investing time researching a solution in more depth before opting to use it.


## Project Status

TodoMVC 1.0 was just released and includes re-writes of almost all applications, ensuring they follow a consistent set of specifications and are using the latest versions of all libraries and frameworks in use. We've also addressed framework author concerns about routing by adding this to many of the more mainstream applications in the project.


## Getting Involved

Whilst we enjoy implementing and improving existing Todo apps, we're always interested in speaking to framework authors (and users) wishing to share Todo app implementations in their framework/solution of choice.

### New Applications

If you have an implementation you would like to show us or a patch you would like to send upstream, please feel free to send through a pull request after:

* Reading our [contribution guidelines](https://github.com/addyosmani/todomvc/wiki)
* Going through our [application specification](https://github.com/addyosmani/todomvc/wiki/App-Specification)
* Looking at our most recent [reference application](https://github.com/addyosmani/todomvc/tree/master/architecture-examples/spine)

One of us will be happy to review your submission and discuss any changes that may be required before they can be included. Applications will typically land first in Labs, reaching the 'stable' mark once we have verified they meet all of the application specifications referenced above.


### Unit Tests

At present, due to the large number of applications in the TodoMVC suite we haven't been mandating that unit tests be written in order for an application to be accepted.

We do however plan on addressing this in a future release as we feel it would both help further ensure consistency and provide developers with a reference for writing tests for each framework.

If you are a library author or contributor wishing to start work on writing tests for an implementation, we'll happily consider including them in the future. This may change based on how we specify unit tests must be structured and so on post 1.0.


### A Final Note

Note that due to the current number of MVC/MVVM/MV* frameworks in circulation, it's not always possible to include each one in TodoMVC, but we'll definitely discuss the merits of any framework prior to making a decision :)

For applications that we feel don't quite match the goals of the project, but which we feel still offer value, we're happy to include references to them in our official [wiki](https://github.com/addyosmani/todomvc/wiki/Other-implementations).


## License

[The Unlicense](http://unlicense.org) (i.e Public Domain)
