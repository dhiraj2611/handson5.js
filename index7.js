//// Find the Winner





var Game_Winner = (S) => 
{
   let one=0;
  let two=0;
  for(let i=0;i<S.length; i++){
    if(S.charAt(i)=='A'){
     one+=1; 
    }
    else{
      two+=1;
    }}
  
  if(one>two){
    return ('Aditya');
  }
  else if(one<two){
    return ('Danish');
    
  }
  else{
    return ('Draw');
  }
  
}
 