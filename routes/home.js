var ejs =require('ejs');
var operation =require("./operation");

function index(req,res) {
    ejs.renderFile('./views/index.ejs',function(err, result) {
        // render on success
        if (!err) {
           res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
}

function calc(req,res){
    var opr = req.body.opr;
    var op1 = req.body.operand1;
    var op2 = req.body.operand2;
    console.log(op1);
    console.log(opr);
    console.log(op2);
    if(op1=="" || op2==""){
        ejs.renderFile('./views/index.ejs',{msg:1},function(err,results){
            // render on success
	        if (!err) {
	            res.end(results);
	        }
	        // render or error
	        else {
	            res.end('An error occurred');
	            console.log(err);
	        }
        });
    }
    else if(isNaN(op1) || isNaN(op2)){
        ejs.renderFile('./views/index.ejs',{msg:2},function(err,results){
            // render on success
	        if (!err) {
	            res.end(results);
	        }
	        // render or error
	        else {
	            res.end('An error occurred');
	            console.log(err);
	        }
        });
    }
    else{
        switch(opr){
            case '+': add(req,res);
                        break;
            case '-': subtract(req,res);
                             break;
            case '*': multiply(req,res);
                             break;
            case '/': divide(req,res);
        }
    }
}
function add(req,response) {
	console.log('inside + function');
	var opr = req.body.opr;
    var op1 = req.body.operand1;
    var op2 = req.body.operand2;
	console.log(op1+"+"+op2);
	operation.addition(op1,op2,function(err,results){
		if(err!=0){
			console.log('Error '+err);
			ejs.renderFile('./views/index.ejs', {msg:err} , function(err, results) {
		        // render on success
		        if (!err) {
		            response.end(results);
		        }
		        // render or error
		        else {
		            response.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
		else 
		{	
			ejs.renderFile('./views/index.ejs', { results: results, op1 : op1, op2 : op2, opr : opr, msg : err } , function(err, results) {
		        // render on success
		        if (!err) {
			        response.end(results);
		        }
		        // render or error
		        else {
		            response.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
	});	
}

function subtract(req,res) {
	console.log('inside - function');
	var opr = req.body.opr;
    var op1 = req.body.operand1;
    var op2 = req.body.operand2;
	console.log(op1+"-"+op2);
	operation.subtraction(op1,op2,function(err,results){
		if(err!=0){
			console.log('Error '+err);
			ejs.renderFile('./views/index.ejs', {msg:err} , function(err, results) {
		        // render on success
		        if (!err) {
		            res.end(results);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
		else 
		{	
			ejs.renderFile('./views/index.ejs', { results: results, op1 : op1, op2 : op2, opr : opr, msg : err } , function(err, results) {
		        // render on success
		        if (!err) {
			        res.end(results);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
	});	
}

function multiply(req,res) {
	console.log('inside * function');
	var opr = req.body.opr;
    var op1 = req.body.operand1;
    var op2 = req.body.operand2;
	console.log(op1+"*"+op2);
	operation.multiplication(op1,op2,function(err,results){
		if(err!=0){
			console.log('Error '+err);
			ejs.renderFile('./views/index.ejs', {msg:err} , function(err, results) {
		        // render on success
		        if (!err) {
		            res.end(results);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
		else 
		{	
			ejs.renderFile('./views/index.ejs', { results: results, op1 : op1, op2 : op2, opr : opr, msg : err } , function(err, results) {
		        // render on success
		        if (!err) {
			        res.end(results);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
	});	
}

function divide(req,res) {
	console.log('inside / function');
	var opr = req.body.opr;
    var op1 = req.body.operand1;
    var op2 = req.body.operand2;
	console.log(op1+"/"+op2);
	operation.division(op1,op2,function(err,results){
		if(err!=0){
			console.log('Error '+err);
			ejs.renderFile('./views/index.ejs', {msg:err} , function(err, results) {
		        // render on success
		        if (!err) {
		            res.end(results);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
		else 
		{	
			ejs.renderFile('./views/index.ejs', { results: results, op1 : op1, op2 : op2, opr : opr, msg : err } , function(err, results) {
		        // render on success
		        if (!err) {
			        res.end(results);
		        }
		        // render or error
		        else {
		            res.end('An error occurred');
		            console.log(err);
		        }
		    });
		}
	});	
} 

exports.index=index;
exports.calc=calc;

exports.add=add;
exports.subtract=subtract;
exports.multiply=multiply;
exports.divide=divide;