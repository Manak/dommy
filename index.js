'use strict';
new function(){
	var dommy = function(options){
		if(options.tag == undefined && options.type == undefined){
			throw new Error("Dommy: There was no tag or type provided");
		}
		if(options.tag && options.type){
			throw new Error("Dommy: Only one of 'tag' or 'type' should be provided");
		}
		if(options.type == "text"){
			return document.createTextNode(options.value);
		}

		if(options.attributes == undefined){options.attributes = {};}
		if(options.children == undefined){options.children = [];}
		if(options.events == undefined){options.events = {};}

		var element = document.createElement(options.tag);

		//Set attributes
		for(var key in options.attributes){
			element.setAttribute(key, options.attributes[key]);
		}

		//Add event listeners
		for(var key in options.events){
			element.addEventListener(key, options.events[key]);
		}

		

		//Create and append children
		for(var i in options.children){
			var child = options.children[i];
			element.appendChild(dommy(child));
		}

		return element;
	};

	if(typeof module != 'undefined' && typeof module.exports != 'undefined'){
		module.exports = dommy;
	} else {
		window.dommy = dommy;
	}
}();