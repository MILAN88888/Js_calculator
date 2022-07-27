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
                                                finalValue==" " ? screen.value=0 : screen.value=eval(finalValue);
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