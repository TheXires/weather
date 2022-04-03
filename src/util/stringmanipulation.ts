/**
 * capitalizes the first letter of each word
 *
 * @param text to capitalize
 * @returns capitalized string
 */
export const capitalize = (text: string): string => {
  const words = text.split(' ');
  words.forEach((word, index) => (words[index] = word.charAt(0).toUpperCase() + word.slice(1)));
  return words.join(' ');
};
