
function binarySearch(array,key){
  var count = 0;
  var low = 0,
      high = array.length - 1,
      mid,
      element;
  while(low <= high){
   mid = Math.floor( (low + high ) / 2, 10);
   element = array[mid];
    if(element < key){
      low = mid + 1;
    }else if(element > key){
      high = mid - 1;
    }else{
      console.log(count)
      return mid;
    }
    count++;
  }
  return -1;
}


let dictionary = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,q,x,y,z'.split(',');

console.log(binarySearch(dictionary,'h'))

