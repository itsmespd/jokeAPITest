const server= require("express");
const bodyParser= require("body-parser");
const app= server();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000,function(){
	console.log("Server started at port 3000");
});

/*.........................Simple Calculator........................*/

app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
	var num1= Number(req.body.num1);
	var num2= Number(req.body.num2);

	var result= num1+num2;

	res.send("The result is:"+ result);
});

/*..........................BMI Calculator..........................*/

app.get("/bmicalculator", function(req,res){
	res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
	var wt= Number(req.body.wt);
	var ht= Number(req.body.ht);
	ht/=100;

	var bmi= wt/(ht*ht);

	res.send("Your BMI is:"+ bmi.toFixed(2));
});

