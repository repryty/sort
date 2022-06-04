function btn1(){
    var text1 = document.getElementById("text1").value;
    const target1=document.getElementById("sort1");
    const target2=document.getElementById("sort2");
    var howtosort = target1.options[target1.selectedIndex].text;
    document.getElementById("dummy1").innerHTML =  `정렬 방법: ${howtosort}<br>정렬 순서: ${target2.options[target2.selectedIndex].text}`;


    if(target2.options[target2.selectedIndex].value=="up"&&target1.options[target1.selectedIndex].value=="bubble"){
        document.getElementById("text2").value = bubble(text1);
    } else if(target2.options[target2.selectedIndex].value=="down"&&target1.options[target1.selectedIndex].value=="bubble"){
        document.getElementById("text2").value = (bubble(text1)).split(" ").reverse().join(" ");
    } else if(target2.options[target2.selectedIndex].value=="up"&&target1.options[target1.selectedIndex].value=="selection"){
        document.getElementById("text2").value = selection(text1)
    } else if(target2.options[target2.selectedIndex].value=="down"&&target1.options[target1.selectedIndex].value=="selection"){
        document.getElementById("text2").value = (selection(text1)).split(" ").reverse().join(" ");
    } else if(target2.options[target2.selectedIndex].value=="up"&&target1.options[target1.selectedIndex].value=="insert"){
        document.getElementById("text2").value = selection(text1)
    } else if(target2.options[target2.selectedIndex].value=="down"&&target1.options[target1.selectedIndex].value=="insert"){
        document.getElementById("text2").value = (selection(text1)).split(" ").reverse().join(" ");
    }
    
}

function bubble(text){
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

function selection(text){
    var data=text.split(" "), least, temp;
    const how=text.split(" ").length;
    for(var i=0; i<=2; i++){
        least = i;
        for(var j=i+1; j<=how; j++){
            if(data[j]<data[least]){
                least = j;
            }
        }
        temp=data[i];
        data[i]=data[least];
        data[least]=temp;
    }
    result="";
    for(var i = 0; i<text.split(" ").length; i++){
        result=result+data[i]+" ";
    }
    return result;
}