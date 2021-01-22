export function findOutlier(integers: number[]): number {
  let outlier:number = null;
  
  if(isEvenSet(integers)){
    //outlier is odd
    for(let i = 0, flag = true; i < integers.length && flag == true; i++){
      if(integers[i] % 2 !== 0){
        outlier = integers[i];
        flag = false;
      }
    }
  }else{
    //outlier is even
    for(let i = 0, flag = true; i < integers.length && flag == true; i++){
      if(integers[i] % 2 === 0 || integers[i] === 0){
        outlier = integers[i];
        flag = false;
      }
    }
  }
  return outlier;
}


function isEvenSet(set: number[]):boolean{
  
  let oddNum:number = 0; 
  let evenNum:number = 0; 
  let isEven:boolean = false;

  for(let i = 0; i < 3; i++){
    if(set[i] % 2 == 0 || set[i] === 0){
      evenNum++;
    }else{
      oddNum++;
    }
  }

  if(evenNum > oddNum){
    isEven = true;
  }
  return isEven;
}
