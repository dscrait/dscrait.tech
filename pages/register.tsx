import Head from 'next/head';
import TypeformContainer from 'src/components/TypeformContainer';

const Register = () => (
	<>
		<Head>
			<title>Google DSC RAIT Membership form</title>
		</Head>

		<TypeformContainer>
			<iframe
				title='dsc-registration-form'
				id='typeform-full'
				width='100%'
				height='100%'
				frameBorder='0'
				allow='camera; microphone; autoplay; encrypted-media;'
				src='https://form.typeform.com/to/hTUwkzv9'
			/>
			<script
				type='text/javascript'
				src='https://embed.typeform.com/embed.js'
			/>
		</TypeformContainer>
	</>
);

export default Register;
