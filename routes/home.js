var ejs =require('ejs');

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
    var results = 0;
    var err = 0;
    console.log(op1);
    console.log(opr);
    console.log(op2);
    if(op1=="" || op2==""){
        err = 1;
        ejs.renderFile('./views/index.ejs',{msg:err},function(err,results){
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
        err = 2;
        ejs.renderFile('./views/index.ejs',{msg:err},function(err,results){
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
            case '+': //add(req,res);
                        results = parseFloat(op1) + parseFloat(op2);
                        break;
            case '-': //subtract(req,res);
                        results = parseFloat(op1) - parseFloat(op2);
                             break;
            case '*': //multiply(req,res);
                        results = parseFloat(op1) * parseFloat(op2);
                             break;
            case '/': //divide(req,res);
                        results = parseFloat(op1) / parseFloat(op2);
        }
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
}

exports.index=index;
exports.calc=calc;