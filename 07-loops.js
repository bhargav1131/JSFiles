var arr = [1, 2, 3, 4, 5];

// for loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("\n\n");
let j = 0
while(j<arr.length){
    console.log(arr[j]);
    j++
}

// break and continue statements
console.log("\n\n");
let k = 0;
while(k<arr.length){
    if(arr[k] == 3)
    {
        break;
    }
    console.log(arr[k]);
    k++;
}

console.log("\n\n");
let l = 0;
// for(l=0; l<arr.length; l++)
// {
//     if(arr[l] == 3)
//     {
//         continue;
//     }
//     console.log(arr[l]);
// }
while(l<arr.length)
{
    if(arr[l] == 3){
        l++;
        continue;
    }
    console.log(arr[l]);
    l++;

}