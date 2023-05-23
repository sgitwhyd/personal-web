export const capitalize = (word: string): string => {
	return word
		.split(" ")
		.map((text) => text.charAt(0).toUpperCase() + text.slice(1))
		.join(" ");
};
