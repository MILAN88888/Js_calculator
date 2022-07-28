var audio= new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
const btnSubmit=document.getElementById('btn1');
console.log(btnSubmit);
btnSubmit.addEventListener('click',()=>
{   
    
    const dateValue=document.getElementById('time1');
    const T1 = new Date(dateValue.value);
    // T1=T1.getHours()+":"+T1.getMinutes()+":"+T1.getSeconds();
    console.log(`setting alarm for ${T1}`);
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
{   console.log('Ringing now---');
    setTimeout(()=>{audio.play()},3000);
}
    