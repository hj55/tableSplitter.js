#tableSplitter.js
tableSplitter.js is a simple Javascript tool that let you split html tables in many different tables when viewport width goes below a certain breakpoint that the user can set. Very useful for optimal visualization on mobile devices.
It works on many tables within the same html page, also.
It depends on the jQuery library.

Use:
In your HTML create an empty DIV that will wrap the new tables and assign an id.
<DIV id="table-splitter"></DIV>

Inside your script create an object for the options, if needed, as follows:

var options = {
	sourceId: [source table id, default "my-table"],
	targetId: [container id, default "table-splitter"],
	isMatrix: [wether to repeat first column at the beginning of each new table, default "false"],
	breakPoint:[breakpoint (in pixel) below which table is split, default 480] 
}

No option is mandatory.

Then store a new instance of tableSplitter in a variable and call the method "build()".

var myVar = new tableSplitter(options);