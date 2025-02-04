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
})