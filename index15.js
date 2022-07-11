///// Count the Vowels and Consonants




var Count_Vowels= (S) => 
{
  let str="aeiouAEIOU";
  let vowels=0;
  for(let i=0;i<S.length;i++){
    if(str.indexOf(S[i])!==-1)
    {
      vowels+=1;
    }
  }
  return (vowels);
          
};
var Count_Consonants= (S) => 
{
         let con=0;
  for(let i=0;i<=S.length-1;i++){
    if(S[i]!=="a" && S[i]!=="e" && S[i]!=="i" && S[i]!=="o" && S[i]!=="u" && S[i]!=="A" && S[i]!=="E" && S[i]!=="I" && S[i]!=="O" && S[i]!=="U" )
    
    {
      con+=1;
    }
  }
  return (con);
};
 