import { useRef, useState } from 'react';
import applyStyles, { Types } from '../components/applyStylesFn';

const useEditor = () => {
	const [text, setText] = useState<string>('');
	const [startSelection, setStartSelection] = useState<number>(0);
	const [endSelection, setEndSelection] = useState<number>(0);

	const updateSelection = () => {
		if (!textRef.current) return;
		setStartSelection(textRef.current?.selectionStart);
		setEndSelection(textRef.current?.selectionEnd);
	};

	const textRef = useRef<HTMLTextAreaElement | null>(null);
	const applyFormat = (type: Types) => {
		const selectedText = text.substring(startSelection, endSelection);
		if (!selectedText) return;

		const before = text.substring(0, startSelection);
		const after = text.substring(endSelection);
		setText(before + applyStyles(type, selectedText) + after);
	};

	return {
		text,
		applyFormat,
		updateSelection,
		setText,
		textRef,
	};
};

export default useEditor;
