function firstWord(s) {
  // your code here
	s=s.trim();
	let idx = s.indexOf(' ');
	let str = idx != -1 ? s.substr(0,idx) : s; 
	return str;
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
