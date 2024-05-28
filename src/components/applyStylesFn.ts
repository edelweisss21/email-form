export type Types = 'bold' | 'italic' | 'underline';

const applyStyles = (type: Types, selectedText: string) => {
	let formattedText = selectedText;

	switch (type) {
		case 'bold':
			if (/<b>(.*?)<\/b>/i.test(selectedText)) {
				formattedText = selectedText.replace(/<b>(.*?)<\/b>/gi, '$1');
			} else {
				formattedText = `<b>${selectedText}</b>`;
			}
			break;
		case 'italic':
			if (/<i>(.*?)<\/i>/i.test(selectedText)) {
				formattedText = selectedText.replace(/<i>(.*?)<\/i>/gi, '$1');
			} else {
				formattedText = `<i>${selectedText}</i>`;
			}
			break;
		case 'underline':
			if (/<u>(.*?)<\/u>/i.test(selectedText)) {
				formattedText = selectedText.replace(/<u>(.*?)<\/u>/gi, '$1');
			} else {
				formattedText = `<u>${selectedText}</u>`;
			}
			break;
		default:
			formattedText = selectedText;
	}

	return formattedText;
};

export default applyStyles;
