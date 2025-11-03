function firstChar(text) {
  // Trim leading and trailing spaces
  text = text.trim();

  // If the string is empty after trimming, return an empty string
  if (text === "") return "";

  // Return the first non-space character
  return text[0];
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
