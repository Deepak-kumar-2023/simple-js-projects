//  confirm("Are you ready to play?");
 
 const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){

    button.addEventListener('click',function (e){
       if(e.target.id==='red'){
           body.style.backgroundColor=e.target.id;
       }
        if(e.target.id==='green'){
        body.style.backgroundColor='green'; 
    }
    if(e.target.id==='pink'){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
        body.style.backgroundColor='yellow';
    }
})
});