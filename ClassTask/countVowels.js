//let string = "abcdefghijklmnopqrstuvwxyz"


const countVowels = function(string){
let element = 0;
	for(let count = 0; count < string.length; count++){
	if (string.charAt(count) == "a"|| string.charAt(count) == "e"||string.charAt(count) == "i"||string.charAt(count) == "o"||string.charAt(count) == "u"){
	 
	element++;
}
			
}
		return element;
		
};

module.exports = countVowels