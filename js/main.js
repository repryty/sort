function btn1(){
    var text1 = document.getElementById("text1").value;
    const target1=document.getElementById("sort1");
    const target2=document.getElementById("sort2");
    var howtosort = target1.options[target1.selectedIndex].text;
    document.getElementById("dummy1").innerHTML =  `정렬 방법: ${howtosort}<br>정렬 순서: ${target2.options[target2.selectedIndex].text}`;


    document.getElementById("text2").value = bubble(text1);
    
}

function bubble(text, ud){
    var data = [], temp;
    for(var i = text.split(" ").length; i>=0; i--){
        data[i]=text.split(" ")[i];
    }
    for(var i = text.split(" ").length; i>=0; i--){
        for(var j = 0;j<i; j++){
            if(data[j]>data[j+1]){
                temp=data[j];
                data[j]=data[j+1]
                data[j+1]=temp;
            }
        }
    }
    var result="";
    for(var i = 0; i<text.split(" ").length; i++){
        result=result+data[i]+" ";
    }
    return result;
}