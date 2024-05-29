import { EmailT } from './../pages/Home/types';
import axios from 'axios';

class EmailService {
	private URL = 'http://localhost:3000/emails';

	async getEmails() {
		const { data } = await axios.get<EmailT[]>(this.URL);
		return data;
	}

	async sendEmails(text: string) {
		if (!text) return;
		const { data } = await axios.post(this.URL, {
			text,
		});
		return data;
	}
}

export const emailService = new EmailService();
