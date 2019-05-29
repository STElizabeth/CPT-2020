var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        Score++
	    document.view.qscore.value=score
        
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
   
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
	    document.view.qscore.value=score
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    
}
	

	ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Which one of these is a percussion instrument? \na)Trumpet \nb)Euphonium \nc)Viola \nd)Glockenspiel";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one of these songs did Ludwig van Beethoven write? \na)Ode to Joy \nb)To a Wild Rose \nc)Rejoice \nd)Hallelujah Chorus";
    document.view.qans.value=""
}


	i++; 
}
