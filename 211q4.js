<<<<<<< HEAD
function fetchDataWithCallBack(err, callback){
    setTimeout(()=>{
        if(err){
            callback("Error!!", null);
        }
        else{
            const data = {id:1, name:"John"};
            callback(null, data);
        }
    }, 2000);
}

function callback(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log("Data fetched successfully:", data);
    }
}

fetchDataWithCallBack(false, callback)

=======
function fetchDataWithCallBack(err, callback){
    setTimeout(()=>{
        if(err){
            callback("Error!!", null);
        }
        else{
            const data = {id:1, name:"John"};
            callback(null, data);
        }
    }, 2000);
}

function callback(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log("Data fetched successfully:", data);
    }
}

fetchDataWithCallBack(false, callback)

>>>>>>> a500ef41e4adae4d705e1017472fe84fe3bb6b3f
fetchDataWithCallBack(true, callback)