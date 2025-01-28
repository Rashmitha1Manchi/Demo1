<<<<<<< HEAD
function delayMessage(mess, delay, callback){
    setTimeout(()=>{
        console.log(mess);
        if(callback){
            callback();
        }
    }, delay);
}

delayMessage("Hello",2000, ()=>{
    console.log("Message has printed!!");
=======
function delayMessage(mess, delay, callback){
    setTimeout(()=>{
        console.log(mess);
        if(callback){
            callback();
        }
    }, delay);
}

delayMessage("Hello",2000, ()=>{
    console.log("Message has printed!!");
>>>>>>> a500ef41e4adae4d705e1017472fe84fe3bb6b3f
})