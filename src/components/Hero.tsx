import { Container, Row, Col } from '@bootstrap-styled/v4';
import image from 'src/assets/images/diversity.png';
import styled from 'styled-components';
import Link from 'next/link';

const BlueText = styled.span`
	color: #557dbf;
	font-weight: 600;
`;
const YellowText = styled.span`
	color: #fbbc12;
	font-weight: 600;
`;
const RedText = styled.span`
	color: #e1382b;
	font-weight: 600;
`;
const GreenText = styled.span`
	color: #189e59;
	font-weight: 600;
`;

const CenterRow = styled(Row)`
	margin: 3rem 0;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 768px) {
		margin: 2rem 0;
	}
`;

const HeroTitle = styled.div`
	font-size: 1.4rem;
`;

const HeroSubtitle = styled.div``;

const LeadText = styled.p`
	font-weight: normal;
	line-height: 1.8rem;
	text-align: left;
`;

const ClubName = styled.h2`
	line-height: 4px;
	font-weight: 600;
	@media only screen and (max-width: 768px) {
		line-height: 40px;
	}
`;

const CollegeName = styled.h4`
	line-height: 24px;

	@media only screen and (max-width: 768px) {
		transform: translateY(-1rem);
	}
`;

const HeroImageContainer = styled.div`
	width: 100%;
	@media only screen and (max-width: 768px) {
		margin-top: 2rem;
	}
`;

const HeroImage = styled.img`
	width: 100%;
`;

const Apply = styled.button`
	background-color: black;
	color: white;
	font-size: 20px;
	padding: 10px 60px;
	border-radius: 5px;
	margin: 10px 0px;
	cursor: pointer;
`;

const Hero = () => {
	return (
		<Container>
			<CenterRow>
				<Col xs={12} sm={6}>
					<HeroTitle>
						<ClubName>Developer Student Club</ClubName>
						<CollegeName>
							Ramrao Adik Institute of Technology
						</CollegeName>
					</HeroTitle>
					<HeroSubtitle>
						<LeadText>
							<strong>Developer Student Club, RAIT</strong> is a
							community of budding <BlueText>developers</BlueText>
							, <GreenText>entrepreneurs</GreenText> and{' '}
							<YellowText>innovators</YellowText> ready to take on{' '}
							<RedText>real-world problems.</RedText> It is a
							program by <BlueText>G</BlueText>
							<RedText>o</RedText>
							<YellowText>o</YellowText>
							<BlueText>g</BlueText>
							<GreenText>l</GreenText>
							<RedText>e</RedText> developers.
						</LeadText>
					</HeroSubtitle>
					<Link href='/register'>
						<Apply>Apply now</Apply>
					</Link>
				</Col>
				<Col xs={12} sm={6}>
					<HeroImageContainer>
						<HeroImage
							src={image}
							alt='Illustration of diversity in our developer community'
						/>
					</HeroImageContainer>
				</Col>
			</CenterRow>
		</Container>
	);
};

export default Hero;
