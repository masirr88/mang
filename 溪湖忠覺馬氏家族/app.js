(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let cleara = document.querySelector('.btn-cleara');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        }try{
            let answer = eval(screen.value);
            screen.value = answer;
        }catch(error){            
            screen.value = "錯誤！";            
        }        
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    })

    cleara.addEventListener('click', function(e){
        screen.value = screen.value.slice(0,-1);
            
        })    

})();
    

    
