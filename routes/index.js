module.exports=function(app)
{

	var request = require('request');

	app.get('/',function(req,res){
	res.render('home.jade')
	});

	app.get('/test',function(req,res){
	res.render('ajaxTest.jade');
	});

	app.get('/testAjax',function(req,res){
		res.setHeader('Content-Type', 'application/json');
	    res.end(JSON.stringify({ a: 1 }));
	});


	app.get('/getAllPopularEvents',function(req,res){
		console.log('Retrieving events JSON');

		var api_request = 'https://www.eventbriteapi.com/v3/events/search/?popular=true&token=ZH5SDZXHG4BR6EDDUSFI';
		var venue = req.query.city;
		var start_date = req.query.start_date;

		if(venue!=null)
			api_request = api_request + '&venue.city='+venue;
		if(start_date!=null)
			api_request = api_request + '&start_date.keyword='+start_date;

		console.log(api_request);

		request(api_request, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	console.log('Done');
		   	res.setHeader('Content-Type', 'application/json');
	    	res.end(JSON.stringify(body));
		  }
		})
	});


	app.get('/getCategoryInfo',function(req,res){
		console.log('Retrieving event categories');

		var api_request = 'https://www.eventbriteapi.com/v3/categories/?token=ZH5SDZXHG4BR6EDDUSFI';
		
		request(api_request, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	console.log('Done');
		   	res.setHeader('Content-Type', 'application/json');
	    	res.end(JSON.stringify(body));
		  }
		})
	});

}




