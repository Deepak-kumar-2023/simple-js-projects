// confirm(`goog`)
const form=document.querySelector('form');
form.addEventListener('submit',function(e){
e.preventDefault();
const Height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const results=document.querySelector('#results');

if(Height===''||Height<=0||isNaN(Height)){
    results.innerHTML=`Please provide a valid height ${Height}`;}
else if(weight==''||weight<=0||isNaN(weight)){
    results.innerHTML=`Please provide a valid weight`;}
else{
    const bmi=(weight/((Height*Height)/10000)).toFixed(2);
//    results.innerHTML=`<span> your bmi is :${bmi} </span>`;}
   
   if(bmi>24.9){
    results.innerHTML=`you are over weight ${bmi}`;}
    else if(bmi>18.6){
        results.innerHTML=`you are normal ${bmi}`; 
    }
    else{
        results.innerHTML=`you aer under weight ${bmi}`;
    }
}
});
