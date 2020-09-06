import Header from 'src/components/Header';
import { createGlobalStyle } from 'styled-components';
import Hero from 'src/components/Hero';

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
    	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
		overflow-x: hidden;
		margin: 0;
		font-family: 'Open Sans', sans-serif;
	}
`;

export default function Home() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Hero />
		</>
	);
}
