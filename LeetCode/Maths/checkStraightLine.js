//https://leetcode.com/problems/check-if-it-is-a-straight-line/

var checkStraightLine = function(coordinates) {
    if(coordinates.length <=2){
        return true;
    }
    const [x1,y1] = coordinates[0];
    const [x2,y2] = coordinates[1];
    //let slop = (y2-y1)/(x2-x1);
    const dx = x2-x1;
    const dy = y2-y1;
    for(let i = 2; i < coordinates.length; i++ ){
        const [x,y] = coordinates[i];
        if((x-x1)*dy != (y-y1)*dx){
            return false;
        }
    } 
    return true;
}
const arr = [[0,2],[0,3],[0,4],[0,5],[0,6],[1,7]];
console.log(checkStraightLine(arr));
