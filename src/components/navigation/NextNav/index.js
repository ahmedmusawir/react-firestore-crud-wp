import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import { blueGradient } from 'components/theme/DeepCast/gradients';

const MainNavbar = styled(Navbar)`
	background: ${blueGradient};
`;

export class MainNav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<div>
				{/* <MainNavbar color="dark" dark expand="md"> */}
				<MainNavbar color="dark" dark expand="md" className="fixed-top">
					<Link prefetch href="/" passHref>
						<NavbarBrand>DeepCast.ai</NavbarBrand>
					</Link>
					<NavbarToggler
						aria-label="mobile navigation toggle button"
						onClick={this.toggle}
					/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link prefetch href="/" passHref>
									<NavLink>Home</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/media" passHref>
									<NavLink>Media</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/about" passHref>
									<NavLink>About</NavLink>
								</Link>
							</NavItem>
							<NavItem />
							<NavItem>
								<Link prefetch href="/platform" passHref>
									<NavLink>Platform</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/forecaster" passHref>
									<NavLink>Forecaster</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/cssgrid" passHref>
									<NavLink>CSS Grid</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link prefetch href="/cssgrid2" passHref>
									<NavLink>CSS Grid 2</NavLink>
								</Link>
							</NavItem>

							<NavItem>
								<Link prefetch href="/styles" passHref>
									<NavLink>Styles</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</MainNavbar>
			</div>
		);
	}
}

export default MainNav;
