import Head from 'next/head';
import TypeformContainer from 'src/components/TypeformContainer';

const Enroll = () => (
	<>
		<Head>
			<title>DSC-RAIT Domain Enrollment</title>
		</Head>

		<TypeformContainer>
			<iframe
				title='domain-enrollment-form'
				id='typeform-full'
				width='100%'
				height='100%'
				frameBorder='0'
				allow='camera; microphone; autoplay; encrypted-media;'
				src='https://form.typeform.com/to/vrjanbxK'
			/>
			<script
				type='text/javascript'
				src='https://embed.typeform.com/embed.js'
			/>
		</TypeformContainer>
	</>
);

export default Enroll;
