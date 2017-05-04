 


   //Part1:


/*Create a Node.js application that does the following:
- Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
- Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.jsonIn einem neuen Fenster anzeigen
- Outputs information about that specific country. Must be in the following format:
Country: <country name>
Top Level Domain: <tld>*/




  /*var fs = require("fs");

    fs.readFile('./countries.json', 'utf-8', function(err, data){
	if(err){

	//console.log(`an error occurred: ${err}`);

		throw err
	}


     var countryInfo = JSON.parse(data);

 	for (var i = 0; i < countryInfo.length; i++) {
 	    if(countryInfo[i].name === process.argv[2]){
    	
	    	console.log(countryInfo[i].name);
	    	console.log(countryInfo[i].topLevelDomain)

	    	
	    }
	   
	    
	}
	
	 
 });
*/

// Part 2:


var file_reader = require("./json-file-reader");
file_reader.fileReader('./countries.json',  function(parseData){
	
	

 	for (var i = 0; i < parseData.length; i++) { 
 	    if(parseData[i].name === process.argv[2]){
    	
	    	console.log(parseData[i].name);
	    	console.log(parseData[i].topLevelDomain);



	    	
	    }
	   
  
	}


});