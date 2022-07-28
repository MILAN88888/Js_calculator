const x=document.getElementById('demo');
let y= document.getElementById('next');
let z= document.getElementById('foot');

function quoteGenerator()
{   y.innerHTML="Loading....."
    fetch('https://api.quotable.io/random').then(res=>res.json()).then(result=>{
        x.innerHTML=result.content;
        z.innerHTML=result.author;
        y.innerHTML='New Quote';
    });
}
y.addEventListener('click',quoteGenerator);