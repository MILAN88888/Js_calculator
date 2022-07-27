<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcultor</title>
    <script src="index.js"></script>
    <link href="index.css" type="text/css" rel="stylesheet">
</head>
<body>
    <div id="container">
    <h1>Calculator</h1>
    <div class="calculator">
    <input type="text" id="screen" >
    <table>
        <tr><td><button>7</button></td><td><button>8</button></td><td><button>9</button></td><td><button>C</button></td></tr>
        <tr><td><button>4</button></td><td><button>5</button></td><td><button>6</button></td><td><button>x</button></td></tr>
        <tr><td><button>1</button></td><td><button>2</button></td><td><button>3</button></td><td><button>-</button></td></tr>
        <tr><td><button>0</button></td><td><button>00</button></td><td><button>000</button></td><td><button>+</button></td></tr>
        <tr><td><button>%</button></td><td><button>/</button></td><td><button>.</button></td><td><button>=</button></td></tr>
    </table>
    </div>
    </div>
    
<script>
let screen=document.getElementById('screen');
button=document.querySelectorAll('button');
let screenValue=" ";
let finalValue=" ";
let showValue=" ";
for(item of button)
{
    item.addEventListener('click',(e)=>{
                                            buttonText=e.target.innerText;
                                            console.log(buttonText);
                                            if(buttonText=="x")
                                            {
                                                buttonText="*";
                                                showValue="x";
                                                screenValue+=showValue;
                                                finalValue+=buttonText;
                                                screen.value=screenValue;
                                                
                                            }
                                            else if(buttonText=='C')
                                            {
                                                buttonText=" ";
                                                showValue=buttonText;
                                                finalValue=buttonText;
                                                screenValue=showValue;
                                                screen.value=screenValue; 
                                            }
                                            else if(buttonText=="=")
                                            {
                                                screen.value=eval(finalValue);
                                                showValue=' ';
                                                finalValue=" ";
                                                screenValue=" ";
                                            }
                                            else if(buttonText=="%")
                                            {
                                            buttonText="*0.01";
                                            showValue="%";
                                            screenValue+=showValue
                                            finalValue+=buttonText;
                                            screen.value=screenValue;
                                            }
                                            else
                                            {
                                                finalValue+=buttonText;
                                                screenValue+=buttonText;
                                                screen.value=screenValue;
                                            }
                                        }
                                        
                        );
}
   </script> 
</body>
</html>