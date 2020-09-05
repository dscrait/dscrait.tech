import React, { useState, useEffect } from 'react';
import {
	Container,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	Img,
} from '@bootstrap-styled/v4';
import Link from 'next/link';
import styled from 'styled-components';

import logo from 'src/assets/images/dsc-logo-large.png';

const Logo = styled(Img)`
	max-width: 200px;
`;

const CustomNavbar = styled(Navbar)`
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;

	@media only screen and (max-width: 768px) {
		margin: 0;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
`;

const CustomNavItem = styled(NavItem)`
	padding: 20px 15px;
	text-transform: capitalize;
	color: #637282;
	background: white;
	z-index: 2;

	&:first-child {
		border-radius: 4px 4px 0 0;
	}

	&:last-child {
		border-radius: 0 0 4px 4px;
	}
`;

const NavbarCircle = styled.div<{ opened: boolean }>`
	background: blue;
	transform: scale(${props => (props.opened ? 60 : 1)});
	-webkit-transform: scale(${props => (props.opened ? 60 : 1)});
	width: 3rem;
	height: 3rem;

	display: inline-block;
	z-index: -50;
	border-radius: 20rem;
	transition: transform 0.4s ease-in-out;
`;

const CustomNav = styled(Nav)`
	text-align: center;
`;

const CustomNavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CustomNavLink = styled(NavLink)`
	color: #637282;
`;

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}
	}, [isOpen]);

	return (
		<CustomNavbar color='faded' toggleable='lg'>
			<Container>
				<CustomNavbarContainer>
					<NavbarBrand style={{ zIndex: 1 }}>
						<Link href='/' passHref>
							<Logo src={logo} alt='dsc logo' />
						</Link>
					</NavbarBrand>
					<NavbarToggler onClick={() => setIsOpen(p => !p)}>
						<NavbarCircle opened={isOpen}></NavbarCircle>
					</NavbarToggler>
				</CustomNavbarContainer>
				<Collapse
					style={{ justifyContent: 'flex-end' }}
					navbar
					isOpen={isOpen}
				>
					<CustomNav navbar>
						<CustomNavItem>
							<CustomNavLink>Overview</CustomNavLink>
						</CustomNavItem>
						<CustomNavItem>
							<CustomNavLink>Technologies</CustomNavLink>
						</CustomNavItem>
						<CustomNavItem>
							<CustomNavLink>Team</CustomNavLink>
						</CustomNavItem>
						<CustomNavItem>
							<CustomNavLink>FAQs</CustomNavLink>
						</CustomNavItem>
					</CustomNav>
				</Collapse>
			</Container>
		</CustomNavbar>
	);
};

export default Header;
