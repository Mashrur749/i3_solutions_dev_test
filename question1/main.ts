export function isValidWalk(walk: string[]) {
    let isValid = false;

    //cartesian location X and Y

    let cX:number = 0;
    let cY:number = 0;
    let steps:number = walk.length;
    
    if(steps === 10){
        for(let i = 0; i < steps; i++){
            switch(walk[i]){
                case 'n': {
                    cY--;
                    break;
                }
                case 's': {
                    cY++;
                    break;
                }
                case 'e': {
                    cX--;
                    break;
                }
                case 'w': {
                    cX++;
                    break;
                }
            }
        }
        
        //if the person ends up from where he/she started the cartesian displacement would be 0
        if(cY === 0 && cX === 0){
            isValid = true;
        }
    }


    return isValid;
}

