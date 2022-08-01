var audio= new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
const btnSubmit=document.getElementById('btn1');
console.log(btnSubmit);
btnSubmit.addEventListener('click',()=>
{   
    
    const dateValue=document.getElementById('time1');
    const T1 = new Date(dateValue.value);
    // T1=T1.getHours()+":"+T1.getMinutes()+":"+T1.getSeconds();
    document.getElementById('demo').innerHTML="setting alarm for "+T1;
    const T2 = new Date();
    // T2=T2.getHours()+":"+T2.getMinutes()+":"+T2.getSeconds();
    const difT=T1-T2;
    if( difT>0)
    {
        setTimeout(bellRing,difT);
    }
    else
    {
        alert('Enter valid date');
    }
});
function bellRing()
{   document.getElementById('demo').innerHTML="Ringing now..... ";
    let x=setTimeout(()=>{audio.play()},0);
    let y=document.getElementById('stop');
    x ? y.innerHTML="Stop Alarm" : y.innerHTML="";
    if(x)
    {   y.style.backgroundColor="red";
        y.addEventListener('click',()=>
        {
            setTimeout(()=>{audio.pause()},1000);
            y.innerHTML="";
            y.style.backgroundColor="white";
        });
    }

}
    