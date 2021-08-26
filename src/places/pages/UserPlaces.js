import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
	{
		id: 'p1',
		title: 'Empire State Building',
		description: 'One of the most famous sky scrapers in the world',
		imageUrl:
			'https://media.cnn.com/api/v1/images/stellar/prod/130802164459-skyscrapers-gallery-empire-state-building.jpg?q=w_3000,h_1687,x_0,y_134,c_crop/h_270,w_480',
		address: '20 W 34th St, New York, NY 10001, United States',
		location: {
			lat: 43.6942894,
			lng: -79.4591372,
		},
		creator: 'u1',
	},
	{
		id: 'p2',
		title: 'Empire State Building',
		description: 'One of the most famous sky scrapers in the world',
		imageUrl:
			'https://media.cnn.com/api/v1/images/stellar/prod/130802164459-skyscrapers-gallery-empire-state-building.jpg?q=w_3000,h_1687,x_0,y_134,c_crop/h_270,w_480',
		address: '20 W 34th St, New York, NY 10001, United States',
		location: {
			lat: 43.6942894,
			lng: -79.4591372,
		},
		creator: 'u2',
	},
];

const UserPlaces = (props) => {
	const userId = useParams().userId;
	const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
	return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;