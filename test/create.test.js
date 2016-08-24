var should = require("should");

require('jsdom-global')();
var dommy = require("../index.js");

describe("Test that elements are being created properly", ()=>{

	it("Should create a correct element with one level", function(done){
		var element = dommy({
			tag:"div",
			attributes:{},
			children:[]
		});
		should.equal(element.outerHTML, "<div></div>");
		done();
	});

	it("Should create a correct element with one level with attributes", function(done){
		var element = dommy({
			tag:"div",
			attributes:{
				style:"font-size:10px;"
			},
			children:[]
		});
		should.equal(element.outerHTML, "<div style=\"font-size:10px;\"></div>");
		done();
	});

	it("Should create a correct element with one level and text", function(done){
		var element = dommy({
			tag:"div",
			attributes:{
				style:"font-size:10px;"
			},
			children:[
				{
					type:'text',
					value:'HAHAH'
				}
			]
		});
		should.equal(element.outerHTML, "<div style=\"font-size:10px;\">HAHAH</div>");
		done();
	});

	it("Should create a correct element with two levels", function(done){
		var element = dommy({
			tag:"div",
			attributes:{},
			children:[
				{
					tag:"span",
					attributes:{},
					children:[]
				}
			]
		});
		should.equal(element.outerHTML, "<div><span></span></div>");
		done();
	});

	it("Should create a correct element with two children one of which is text", function(done){
		var element = dommy({
			tag:"div",
			attributes:{},
			children:[
				{
					type:"text",
					value:'OMG'
				},
				{
					tag:"span",
					attributes:{},
					children:[]
				}
			]
		});
		should.equal(element.outerHTML, "<div>OMG<span></span></div>");
		done();
	});
	it("Should create a correct element and add a listener", function(done){
		var element = dommy({
			tag:"div",
			events:{
				"click":function(){done();}
			}
		});
		should.equal(element.outerHTML, "<div></div>");
		element.click();
	});
});
