import Header from 'src/components/Header';
import { createGlobalStyle } from 'styled-components';
import Hero from 'src/components/Hero';
import Head from 'next/head';

// header
// >hero
// infocards
// opportunities
// technologies
// team
// faq
// footer

const GlobalStyle = createGlobalStyle`

  body {
		overflow-x: hidden;
		margin: 0;
		font-family: 'Open Sans', sans-serif;
	}
`;

export default function Home() {
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<GlobalStyle />
			<Header />
			<Hero />
		</>
	);
}
