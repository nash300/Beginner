

/* ----------Fixed vars------------------------*/
var counter = 0; /* ATTEMPT COUNTER */
var numberNew =0 /* CLEAR NUMBER EVERYTIME */
var i= 1; /* ATTEMPT NUMBER DISPLAY */
/*-----------------------------------------------*/



function begin() {
    alert ('The number is created! Click OK to continue');
    var createNumber = Math.floor(Math.random()*100);
    document.getElementById('hdn').value= createNumber;
    numberNew = createNumber;
    document.getElementById('hidden').style.display = 'initial';
    counter = 0;
    document.getElementById('checkbtn').style.display='initial';
    document.getElementById('resultTxt').innerHTML ='';
    document.getElementById('checkbtn').innerHTML= 'Check (0)'
    document.getElementById('input').value ='';
    document.getElementById('wrapper').style.backgroundColor= '#728FCE';
    i = 1;
}



        
    
        function check() {

        
            
            var attemptNum = i++;
            document.getElementById('checkbtn').innerHTML= 'Check '+ '('+attemptNum+')';
            var input = document.getElementById('input').value;
            var answer = document.getElementById('hdn').value;
        

        if (input == answer) {
            document.getElementById('resultTxt').innerHTML = 'BINGO!';
            document.getElementById('wrapper').style.backgroundColor='yellowgreen';
        } if (input > answer) {
            document.getElementById('resultTxt').innerHTML = 'Too High!';
            document.getElementById('wrapper').style.backgroundColor='#b03060';
            counter++;
        } if (input < answer) {
            document.getElementById('resultTxt').innerHTML = 'Too Low!';
            document.getElementById('wrapper').style.backgroundColor='#b03060';
            counter++;
        } if (counter>=10) {
            document.getElementById('wrapper').style.backgroundColor='darksalmon';
            document.getElementById('hidden').style.display='none';
            document.getElementById('description').style.display='none';
            document.getElementById('resultTxt').innerHTML = 'Sorry! You have reached 10 attemts. The answer is '+ numberNew ;
            
               
            
            
            

        }
    }


       












