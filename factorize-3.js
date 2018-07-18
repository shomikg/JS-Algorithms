function factorialize(num)
{
  for(var a=1;num>=1;num--)
    {
      a*=num;
    }
  return a;
}
console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));