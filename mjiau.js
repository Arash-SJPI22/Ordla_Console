/* let result = ["katt", "björn", "kammel", "anna", "pruttmaskin", "get", "hitler"];
let fest = [...result];

for(let i=0; i<result.length; i++) {
    
    let slicedWord = "";
    for(let j=0; j<result[i].length; j++) {
        if (j < (result[i].length - 1)) {
            slicedWord = result[i].slice(j+1);
            if (slicedWord.includes(result[i].charAt(j))){
                let index = fest.indexOf(result[i]);
                fest.splice(index, 1);
                break;
            }
        }
        
    } 
}

console.log(fest)
result = [...fest];
console.log(result) */

const result = ["kattt", "björn", "kammel", "mamum","annna", "pruttmaskin", "get", "hitler"];

for(let i=0; i<result.length; i++) {
    
    let slicedWord = "";

    for(let j=0; j<result[i].length; j++) {

        if (j < (result[i].length - 1)) {

            slicedWord = result[i].slice(j+1);

            if (slicedWord.includes(result[i].charAt(j))){ 
            
                result.splice(i, 1);
                
                i--;
                break;
            }
        }
        
    } 
}

console.log(result)