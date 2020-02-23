function checkWord(str){
    var word:string[]=str.split(" ");
    var i:number=0;
    for(i=0;i<word.length;i++){
        if(word[i]=="marvellous"){
            break;
        }
    }
    if(i>word.length){
        return false;
    }
    else{
        return true;
    }
}
var bret:boolean=checkWord("pune kothrud marvellous Infosystems");
if(bret==true){
    console.log("string contain marvellous in it");
}
else{
    console.log("String not contain marvellous in it");
}