//// reverse string


var Reverse_String = (str) => 
{
       let a="";
    for(let i=str.length-1; i>=0;i--)
    {
      a+=str[i];
    }
    return a;
     
};
 