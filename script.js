let n=9;
let arr=["5","89","12","89","12","87","56","36","56"];

let nonDuplicate=(arr)=>{
    let arr1=[];
    for(var i=0;i<arr.length;i++){
        if(!arr1.includes(arr[i])){
           arr1.push (arr[i]);
        }
    }
    return arr1.join(" ");
}
console.log(nonDuplicate(arr));