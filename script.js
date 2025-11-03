function firstChar(text) {
  // Trim the leading and trailing spaces
  text = text.trim();
  
  // If string is empty after trimming, return empty string
  if (text === "") return "";

  // Return the first character
  return text[0];
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));
