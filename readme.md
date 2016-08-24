#dommy.js [![Build Status](https://travis-ci.org/Manak/dommy.svg?branch=master)](https://travis-ci.org/Manak/dommy)
Dommy (pronounced ```dom-me```) makes is a javascript function that makes it a gazillion times easier to build DOM elements in javascript without using the insecure and ill-performant ```innerHTML```.

[![NPM](https://nodei.co/npm/dommy.js.png)](https://nodei.co/npm/dommy.js/)


##Get started

###npm
You can add dommy.js to your project by either using npm by running the command ```npm install dommy.js --save```

If you installed dommy using npm, you can start using dommy by  
   
   
```
	var dommy = require('dommy.js');
```

###script tag

You can add dommy.js by downloading the latest release from the [releases page.](https://github.com/Manak/dommy/releases)   
   
    
```
	<script src = "path/to/dommy.js" type = "text/javascript"></script>
```   

Or you can use the raw github url (not recommended)  
     
```
	<script src = "https://raw.githubusercontent.com/Manak/dommy/master/dommy.js" type = "text/javascript"></script>
```   

If you are using dommy using the script tag, it will be available as dommy in the window object. It should be accessible as    

```
	dommy()
```
   
##Usage

Dommy is a function that returns a ```HTMLElement``` as specified in the options provided to it.
   
###Create a div element ```<div></div>```
```
	dommy({
		tag:'div'
	});
```   

###Create a div element with a span inside it ```<div><span></span></div>```
```
	dommy({
		tag:'div',
		children:[
			{
				tag:'span'
			}
		]
	});
```

###Create a div element with a style attribute ```<div style = "background:red;"></div>```
```
	dommy({
		tag:'div',
		attributes:{
			style:"background:\"red\";"
		}
	});
```   
###Create a div element with some text inside it ```<div>some text</div>```
```
	dommy({
		tag:'div',
		children:[
			{
				type:'text',
				value:'some text'
			}
		]
	});
```
###Create a div element with a click Listener ```<div></div>```
```
	dommy({
		tag:'div',
		events:{
			click:function(){
				alert('clicked!');
			}
		}
	});
```  



##Dommy Tree
You can build a dommy tree by using the following valid options   

| Key        | Value                                           | type                    | Example                                                   |
| ---------- | ----------------------------------------------- | ----------------------- | --------------------------------------------------------- |
| tag        | the tag name to be created                      | String                  | div, span etc.                                            |
| type       | text                                            | String                  | Only used when plain-text needs to be added to an element. NO TAG REQUIRED. |
| value      | The plain-text to be added to the element       | String                  | Only used when plain-text needs to be added to an element. NO TAG REQUIRED. |
| attributes | attributes to be added to the element           | Object                  | { style : "background:red;" }                             |
| events     | events to be bound to the element               | Object                  | { click : function(){ alert('test');}  }                  |
| children   | children to be appended to the element in order | Array of Dommy Elements |                                                           |

##Tests
You can run the tests by running ```npm install``` and ```npm test```

##Support
You can use the github issues page or contact me manak[at]thundertick[dot]com for support with this.