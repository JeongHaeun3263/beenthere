import React from 'react';
import UsersList from '../components/UsersList';

const Users = (props) => {
	const USERS = [
		{
			id: 'u1',
			image: 'https://gracehaeun.com/imgs/profile_grace.png',
			name: 'grace',
			places: 8,
		},
	];
	return <UsersList items={USERS} />;
};

export default Users;
