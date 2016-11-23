var express=require("express");
var bodyParser=require("body-parser");
var arr=[];
var app=express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}));
app.get('/get' , function(req,res){
	res.json(arr);
	
	
});
app.put('/put' , function(req,res){
	var putObj= {
		postName: req.body.putName,
		postSurname: req.body.putSurname ,
		postEmail :req.body.putEmail ,
		postPassword : req.body.putPassword 
	}
	arr.pop();
	arr.push(putObj);
	console.log(arr);
	res.json({a : 234});
	
});
app.post('/post' , function(req,res){
	var postObj= {
		postName: req.body.postName,
		postSurname: req.body.postSurname ,
		postEmail :req.body.postEmail ,
		postPassword : req.body.postPassword 
	}
	arr.push(postObj);
	console.log(arr);
	res.json({a : 234});
});
app.delete('/delete' , function(req,res){
	arr.pop();
	res.json({a : 234});
	
});
app.listen(process.env.PORT||8000);
