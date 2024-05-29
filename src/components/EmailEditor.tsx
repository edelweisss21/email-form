import cl from './EmailEditor.module.scss';
import Actions from './UI/Actions';
import parse from 'html-react-parser';
import useEditor from '../hooks/useEditor';
import useSendEmail from '../hooks/useSendEmail';

function EmailEditor() {
	const { text, applyFormat, updateSelection, setText, textRef } = useEditor();
	const { mutate, isPending } = useSendEmail({ text, setText });

	const onClearHandler = () => {
		setText('');
	};

	return (
		<div>
			<h1>E-mail editor</h1>
			{text && <div className={cl.textView}>{parse(text)}</div>}
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
					<button onClick={() => mutate()} disabled={isPending}>
						Send now
					</button>
				</div>
			</div>
		</div>
	);
}

export default EmailEditor;
