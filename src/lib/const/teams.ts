export interface Team {
	github: string;
	position: string;
}

export const teams: Team[] = [
	{
		github: 'i-am-ade',
		position: 'Core developer'
	},
	{
		github: 'k1ponk',
		position: 'UI/UX designer'
	}
];

export interface User {
	avatar_url: string;
	login: string;
	name: string;
}
