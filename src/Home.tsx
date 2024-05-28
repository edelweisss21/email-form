import EmailEditor from './components/EmailEditor';
import EmailList from './components/EmailList';
import cl from './Home.module.scss';

const Home = () => {
	return (
		<div className={cl.wrapper}>
			<EmailEditor />
			<EmailList />
		</div>
	);
};

export default Home;
