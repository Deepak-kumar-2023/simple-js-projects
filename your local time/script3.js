const clock=document.querySelector('#clock')


// console.log(date.toLocaleString);
setInterval(function() {
    // const date=new Date();
    const date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
}, 1000);
