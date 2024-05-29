import { useQuery } from '@tanstack/react-query';
import { emailService } from '../services/email.service';
import parse from 'html-react-parser';
import cl from './EmailList.module.scss';

const EmailList = () => {
	const { data } = useQuery({
		queryKey: ['email list'],
		queryFn: () => emailService.getEmails(),
	});
	return (
		<div className={cl.list}>
			{data?.map((email) => (
				<div className={cl.item} key={email.id}>
					{parse(email.text)}
				</div>
			))}
		</div>
	);
};

export default EmailList;
