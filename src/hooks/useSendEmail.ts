import { useMutation, useQueryClient } from '@tanstack/react-query';
import { emailService } from '../services/email.service';

type sendEmailProps = {
	text: string;
	setText: (text: string) => void;
};

const useSendEmail = ({ text, setText }: sendEmailProps) => {
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationKey: ['create email'],
		mutationFn: () => emailService.sendEmails(text),
		onSuccess() {
			setText('');
			queryClient.refetchQueries({
				queryKey: ['email list'],
			});
		},
	});

	return { mutate, isPending };
};

export default useSendEmail;
