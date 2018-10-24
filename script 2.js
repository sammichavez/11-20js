//firstLast6
function firstLast6(arr) {
    if (arr[0] == 6 || arr[arr.length - 1] == 6) {
        return true;
    } else {
        return false;
    }
}
//has23
function has23(arr){
    if (arr[0] == 2 || arr[0] == 3 || arr[arr.length -1] == 2 || arr[arr.length -1] == 3) {
        return true;
    }else{
        return false;
    }
}
//fix23
function fix23(arr){
    for (var i = 0; i<arr.length;i++ ){
        if(arr[i]==2 && arr[i+1]==3){
            arr[i+1] = 0;
        }
    }
    return arr;
}
//countYZ
function countYZ(word){
    var sum= 0;
    word = word.toLowerCase();
    for(var i= 0; i< words.length; i++){
        if(word[i] == " " && (word[i-1] == 'z' || word[i-1] == 'y')) {
            sum++
        }
    }
    if(word[word.length-1] == 'y' || word[word.length-1] == 'z'){
        sum++
    }
    return sum;
}
//endOther
function endOther(wth, wtf) {
    wth = wth.toLowerCase();
    wtf = wtf.toLowerCase();
    if (wth.endsWith (wtf) || wtf.endsWith (wth)){
        return true;
    }else{
        return false;
    }
}
//starout
function starOut(string){
    var yee= "";
    for(var i= 0; i< string.length; i++) {
        if (string[i - 1] != "*" && string[i + 1] != "*" && string[i] != ("*"))
            yee= yee + string[i];
        }
    return yee;
}

//getSandwhich
function getSandwich(string) {
    if (string.indexOf("bread") == string.lastIndexOf("bread")){
        return "";
    }
    if (string.indexOf("bread")!= -1 && string.lastIndexOf("bread")!= -1 ){

        return string.substring(string.indexOf("bread") + 5 , string.lastIndexOf("bread"));
    }
}
//canBalance
function canBalance(array){
    var answer = 0;
    var answerTwo = 0;
    for(var i = 0; i < array.length; i++){
        answer += array[i];
        answerTwo = 0;
        for(var a = i+1; a < array.length; a++){
            answerTwo += array[a];
        }
        if(answer == answerTwo ){
            return true;
        }

    }
    return false;
}
//countClumps
function countClumps(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == array[i-1] && array[i] != array[i+1]){
            sum += 1;
        }
    }
    return sum;
}
//evenlyspaced
function evenlySpaced(a,b,c){
    var max = Math.max(a,b,c);
    var min = Math.min(a,b,c);
    var other = (max+min)/2;
    if (other == a || other == b || other == c){
        return true;
}
    return false;
}
function tester() {
    document.getElementById("output").innerHTML += startOut("ab*cd");
}

