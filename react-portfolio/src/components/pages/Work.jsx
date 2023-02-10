import React from 'react';
import grimsScreenshot from '../../assets/screenshots/Grims-Inventory.PNG';
import covidScreenshot from '../../assets/screenshots/Covid-Tracker(1).PNG';
import weatherScreenshot from '../../assets/screenshots/weather-app(1).PNG';

export default function Work() {
    const projects = [
		{
			name: 'G.R.I.M.S',
			description:
				'General Retail Inventory Management System - A visual inventory management system where you can add/delete and update items into certain departments. User registration is required to use the application.',
            image: grimsScreenshot,
			github: 'https://github.com/Eaponte24/GRIMS',
			deployed: 'https://grims-inventory.herokuapp.com/login',
		},
		{
			name: 'Covid Tracker',
			description:
				'Covid Tracker uses two third party APIs to search for data based on a selected Country. The Reddit API will pull up to 15 subreddits regarding Covid related articles for that Country. The COVID19 API will pull current COVID Statistics for that country.',
			image: covidScreenshot,

			github: 'https://github.com/Eaponte24/Covid-Tracker',
			deployed: 'https://eaponte24.github.io/Covid-Tracker/',
		},
		{
			name: 'Weather Tracker',
			description:
				'Ive created a simple and easy to use weather application to view a cities weather and 5 day forecast to the right, its a very quick and simplistic way to view the data with just one click of a button.',
            image: weatherScreenshot,
			github: 'https://github.com/Eaponte24/weather-app',
			deployed: 'https://eaponte24.github.io/weather-app/',
		}
	];

  return (
    <section>
			<div className="center">
				<h1 className="page-header">Projects</h1>
			</div>
            <ul>
                {projects.map(project => (
                    <li className="list-group-item" key={project.id}>
                    <h2>{project.name}</h2>
                    <img
            src= {project.image}
            class="d-block w-100"
            alt="..."
          />
                    <p>{project.description}</p>
                  </li>
                ))}
            </ul>
		</section>
	);
}
