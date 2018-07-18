function findLongestWord(str)
{
  return str.split(' ').reduce(function(x,y)
                              {
    return Math.max(x, y.length)
  }, 0);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("What if we try a super-;ong word such as asdkjwdobfp123fjasbfas"));