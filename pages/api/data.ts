import { NextApiRequest, NextApiResponse } from 'next';
import * as fetch from 'node-fetch';
import cheerio from 'cheerio';

// Types

interface Event {
	posterUrl: string;
	type: string;
	date: string;
	title: string;
	description: string;
	detailsUrl: string;
}

interface Organizer {
	avatarUrl: string;
	name: string;
	profileUrl: string;
	title: string;
}

// Helper functions

async function fetchDocument(baseUrl: string): Promise<cheerio.Root> {
	const response = await fetch.default(baseUrl);
	const body = await response.text();
	return cheerio.load(body);
}

async function getEvents($: cheerio.Root): Promise<Event[]> {
	const eventDocs = $('.event');
	const events: Event[] = [];
	eventDocs.each((_, event) => {
		const posterUrl = $(event).find('img').attr()['src'];
		const type = $(event).find('.date> span').text();
		const date = $(event).find('.date > strong').text();
		const title = $(event).find('h4').text();
		const description = $(event).find('.description').text();
		const detailsUrl =
			'https://dsc.community.dev' + $(event).find('.btn').attr()['href'];
		events.push({
			posterUrl,
			type,
			date,
			title,
			description,
			detailsUrl,
		});
	});

	return events;
}

async function getOrganizers($: cheerio.Root): Promise<Organizer[]> {
	const organizers: Organizer[] = [];
	const organizerCards = $('.people-card');
	organizerCards.each((_, card) => {
		const avatarUrl = $(card).find('img').attr()['src'];
		const name = $(card).find('.people-card--name').text();
		const title = $(card).find('.people-card--title').text();
		const profileUrl =
			'https://dsc.community.dev' + $(card).find('.btn').attr()['href'];

		organizers.push({
			avatarUrl,
			name,
			title,
			profileUrl,
		});
	});
	return organizers;
}

// Route function

/* 
 EXAMPLE:  
	curl --request POST \
	--url http://yourhost.tld/api/data \
	--header 'content-type: application/json' \
	--data '{
	"url": "https://dsc.community.dev/you-dsc-community-url/"
	}'
*/

export default async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.method === 'POST') {
		const baseUrl: string = request.body.url;
		const $ = await fetchDocument(baseUrl);
		const events = await getEvents($);
		const organizers = await getOrganizers($);

		response.status(200).json({
			events,
			organizers,
		});
	}
};
