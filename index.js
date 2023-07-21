// let s="abcadeecfb";
// let uniqueCharacters=new Set();
// for(i=0;i < s.length;i++){
//   uniqueCharacters.add(s[i]);
// }
// result="";
// for(let xyz of uniqueCharacters.keys()){
// result=result+xyz;
// }
// console.log(result)

 let s="abcadeecfb";
let myMap = new Map();
for(let i=0;i < s.length;i++){
  if(myMap.has(s[i])){
    let previousCount=myMap.get(s[i]);
    myMap.set(s[i],previousCount+1);
  }
  else{
    myMap.set(s[i],1);
  }
  
}
for(let [ch,freq] of myMap.entries()){
 console.log(ch+"="+freq);
}