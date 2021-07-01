  
    console.log(document.getElementsByClassName("button").length);
    let buttons=document.getElementsByClassName("button");
    let textValue=document.form.textview.value;
    for(let i=0;i<buttons.length;i++){
      buttons[i].addEventListener('click',function(){
        let textValue=document.form.textview.value
        let value=buttons[i].value;
       if(value!="C" && value!="del" && value!="="){
          document.form.textview.value=textValue+buttons[i].value;
       
        }else if(value=="C"){
          document.form.textview.value=""
        }else if(value=="del"){
          let del=document.form.textview.value;
          document.form.textview.value=textValue.substring(0, textValue.length-1);
        }else{
          if(textValue){
            document.form.textview.value=eval(textValue)
            
          }
        }
        
      })
       
    }
    