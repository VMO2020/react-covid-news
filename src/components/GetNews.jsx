import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Styles
import './getnews.scss';

export const GetNews = ({ url }) => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getNews();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	const getNews = async () => {
		setLoading(true);

		try {
			const resp = await axios.get(
				`https://covid-19-wordnews-api.herokuapp.com${url}`
			);
			console.log(resp.data);
			const data = resp.data;

			setNews(data);

			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='content-list'>
			{loading ? (
				<span className='loading'>Loading...</span>
			) : (
				news.map((newx, index) => (
					<div key={index} className='content-item'>
						<span>{`${index + 1} of ${news.length}`}</span>

						<li>
							<b>Source: </b>
							{newx.source}
						</li>
						<li>
							<b>Title: </b>
							{newx.title}
						</li>
						<li>
							<b>URL: </b>
							<a target='_blank' rel='noreferrer' href={newx.url}>
								{newx.url}{' '}
							</a>
						</li>
					</div>
				))
			)}
		</div>
	);
};
