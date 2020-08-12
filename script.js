let str = "Hello world! These are two guys: @PrivetMoon144!,., and @BlindPhew, also known as PM and BP.";


let arr = str.split("@");
for(let i = 1; i < arr.length; i++){
    
let name = arr[i].split(" ")[0].split(",")[0].split("!")[0].split(".")[0].split("?")[0].split(":")[0].split(";")[0];
let whatReplace = "@"+ name;
let replacedString = '<a href = "www.twitter.com/'+ name +'">@' + name + '</a>'
str = str.replace(whatReplace, replacedString);

};

document.getElementById("par").innerHTML = str;

