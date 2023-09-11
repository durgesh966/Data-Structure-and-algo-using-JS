const palindrome = function(data){
    if(data<0) return null;
      return data === +data.toString().split("").reverse().join("");
}
const result = palindrome(100000000000001);
console.log(result);