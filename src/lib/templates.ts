export enum Template {
	home,
	none
}

export function getTemplate(page: string): Template {
	switch (page) {
		case '':
			return Template.home;
		default:
			return Template.none;
	}
}
