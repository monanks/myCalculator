function addition(op1,op2,callback){
    var result=0;
    var err=0;
    console.log("in else condition of +: valid num");
    result = parseFloat(op1) + parseFloat(op2);
    console.log(result);
    callback(err,result);
}

function subtraction(op1,op2,callback){
    var result=0;
    var err=0;
    console.log("in else condition of -: valid num");
    result = parseFloat(op1) - parseFloat(op2);
    console.log(result);
    callback(err,result);
}

function multiplication(op1,op2,callback){
    var result=0;
    var err=0;
    console.log("in else condition of *: valid num");
    result = parseFloat(op1) * parseFloat(op2);
    console.log(result);
    callback(err,result);
}

function division(op1,op2,callback){
    var result=0;
    var err=0;
    console.log("in else condition of /: valid num");
    result = parseFloat(op1) / parseFloat(op2);
    console.log(result);
    callback(err,result);    
}

exports.addition=addition;
exports.subtraction=subtraction;
exports.multiplication=multiplication;
exports.division=division;