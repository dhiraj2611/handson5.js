//// Count Characters





const countCharacters = (S) => 
{
    let count1=0;
  let count2=0;
  let B=[2];
  for(i=0;i<S.length;i++){
    if(S.charAt(i)=="A"){
      count1+=1;
    }
    else if(S.charAt(i)=="D"){
      count2+=1;
    }
    else{
      count1;
      count2;
    }
  }
  B[0]=count1;
  B[1]=count2;
  return B; 
};
 