import { FC } from 'react';
import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import cl from './Actions.module.scss';
import { Types } from '../applyStylesFn';

type Action = {
	id: number;
	btn: JSX.Element;
};

type ActionsProps = {
	clear: () => void;
	applyFormat: (type: Types) => void;
};

const Actions: FC<ActionsProps> = ({ clear, applyFormat }) => {
	const actions: Action[] = [
		{ id: 1, btn: <Eraser onClick={clear} size={20} /> },
		{ id: 2, btn: <Bold onClick={() => applyFormat('bold')} size={20} /> },
		{ id: 3, btn: <Italic onClick={() => applyFormat('italic')} size={20} /> },
		{
			id: 4,
			btn: <Underline onClick={() => applyFormat('underline')} size={20} />,
		},
	];

	return (
		<div className={cl.tools}>
			{actions.map((action) => (
				<div key={action.id}>
					<button className={cl.btn}>{action.btn}</button>
				</div>
			))}
		</div>
	);
};

export default Actions;
