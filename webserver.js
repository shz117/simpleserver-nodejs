
	var http = require('http');
	var fs = require('fs');
    var csv = require('csv');

	var s = http.createServer(function(req,res){
		res.writeHead(200,{'content-type':'text/plain'});
        csv()
        .from.path('./test.csv', { delimiter: ',', escape: '"' })
        .to.array(function(data){
            var output = {"seg0":{"name":data[0][0],"lt":data[0][1],"lat":data[0][2]}
            }
            var body = JSON.stringify(output);
            console.log(body);
            res.end(body);
            
        })

	});
	
    console.log(s);
	s.listen(8000);
