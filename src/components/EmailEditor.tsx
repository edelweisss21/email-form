import { useRef, useState } from 'react';
import cl from './EmailEditor.module.scss';
import Actions from './UI/Actions';
import applyStyles, { Types } from './applyStylesFn';
import parse from 'html-react-parser';

function EmailEditor() {
	const [text, setText] =
		useState<string>(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
  deleniti impedit cupiditate suscipit in minima.`);
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

	const onClearHandler = () => {
		setText('');
	};

	return (
		<div>
			<h1>E-mail editor</h1>
			<div className={cl.textView}>{parse(text)}</div>
			<div className={cl.card}>
				<textarea
					ref={textRef}
					className={cl.editor}
					spellCheck='false'
					value={text}
					onSelect={updateSelection}
					onChange={(e) => setText(e.target.value)}
					placeholder='Write something...'
				/>
				<div className={cl.buttons}>
					<div className={cl.actions}>
						<Actions clear={onClearHandler} applyFormat={applyFormat} />
					</div>
					<button>Send now</button>
				</div>
			</div>
		</div>
	);
}

export default EmailEditor;
