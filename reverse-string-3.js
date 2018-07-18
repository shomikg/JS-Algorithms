function reverseString(str)
{
  var rev = "";
  str.split("");
  for(var i = str.length - 1; i>=0; i--)
    {
      rev += str[i];
    }
  return rev;
}
console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));