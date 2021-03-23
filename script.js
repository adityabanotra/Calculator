var buttons=document.getElementsByClassName("button");
var display = document.getElementById("display")

var op1=4;
var op2=5;
var opr="-";

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        var info = this.getAttribute('data-value');
        if(info=='a')
        {
            display.innerText="";
        } 
        else if(info=='+')
        {
            // display.innerText=info;
            opr="+";
            op1=parseFloat(display.textContent);
            display.innerText="";
        }
        else if(info=='-')
        {
            opr="-";
            op1=parseFloat(display.textContent);
            display.innerText="";
        }
        else if(info=='*')
        {
            opr="*";
            op1=parseFloat(display.textContent);
            display.innerText="";
        }
        else if(info=='/')
        {
            opr="/";
            op1=parseFloat(display.textContent);
            display.innerText="";
        }
        else if(info=='%')
        {
            opr="%";
            op1=parseFloat(display.textContent);
            display.innerText="";
        }
        else if(info=='=')
        {
            op2=parseFloat(display.textContent);
            var result=eval(op1+" "+opr+" "+op2);
            display.innerText=result;
            // display.innerText="";
        }
        else 
        {
            display.innerText=display.innerText+""+info;
        }
        // display.innerText=info;
        this.style.transform="scale(.98)";
        var a=this;
        console.log(2);
        setTimeout(function(){ a.style.transform="scale(1)";},100);
       
    });
}
console.log(eval(op1+" "+opr+" "+op2));
