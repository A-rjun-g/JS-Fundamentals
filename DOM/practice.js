/* 
function stopWatch(){
    let start, stop,duration,running;
    this.startTime=function(){
        if(running)    throw new Error('Already Running');
        running=true;
        start=new Date();
    };

    this.stopTime=function(){
        if(!running)    throw new Error('Stopwatch is not Running');
        running=false;
        stop=new Date();
        const seconds=(stop.getTime()-start.getTime())/1000;
        duration+=seconds;  
    };
    Object.defineProperty(this,'duration',{
        get:function(){return duration;}
    });

    this.reset=function(){
        start=null;
        stop=null;
        duration=0;
    }
};

let time=new stopWatch();

time.startTime();
for(let i=0;i<1000;i++){    
    for(let j=0;j<10000;j++){};
    for(let k=0;k<10000;k++){};
}
time.stopTime();
console.log(time.totalTime());

*/

function shape(){
    shape.prototype.draw=function(variable){
        console.log(`${variable} is drawn`)
    }
}

function circle(){

}

function square(){

}

const s=new circle();
s.draw('circle');