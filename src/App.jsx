import React, { useState } from 'react';

// Helpers
import { day, monthName, year } from '../src/helpers/Date';

// Styles
import './app.scss';
import { GetNews } from './components/GetNews';

function App() {
	const [url, setUrl] = useState('/news');

	return (
		<div className='container'>
			<div className='title'>
				<span>COVID-19 NEWS</span>
			</div>
			<div className='main'>
				<div className='menu'>
					<h3>{`NEWS LIST: ${monthName} ${day}, ${year}`}</h3>
					<label>Source: </label>
					<select onChange={(e) => setUrl(e.target.value)}>
						<option value='/news'>ALL</option>
						<option value='/news/nyt'>The New York Times</option>
						<option value='/news/cityam'>City A.M.</option>
						<option value='/news/guardian'>The Guardian</option>
						<option value='/news/telegraph'>The Telegraph</option>
						<option value='/news/latimes'>Los Angeles Times</option>
						<option value='/news/bbc'>BBC</option>
						<option value='/news/es'>Evening Standard</option>
						<option value='/news/nyp'>New York Post</option>
						<option value='/news/sun'>The Sun</option>
						<option value='/news/dm'>Mail Online</option>
						<option value='/news/un'>United Nations</option>
						<option value='/news/smh'>The Sydney Morning Herald</option>
						<option value='/news/ut'>USA TODAY</option>
					</select>
				</div>
				<div className='content'>
					<GetNews url={url} />
				</div>
			</div>
			<div className='footer'>
				<a
					className='copyright'
					href='https://vmog.net/'
					target='_blank'
					rel='noreferrer'
				>
					Copyright and design by © VMOG
				</a>
			</div>
		</div>
	);
}

export default App;
