import React, { Component } from 'react';
import styled from 'styled-components';
import { Collapse as RCollapse, Button, CardBody, Card } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
const CollapseContainer = styled.div`
	.nav-box {
		height: 200px;
		line-height: 2rem;
		transition: width 0.5s;

		.navbar-nav {
			width: 100%;
			overflow: hidden;
			border: 2px solid red;
		}
	}
`;

export class Collapse extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };
	}

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}

	render() {
		return (
			<CollapseContainer>
				<Button
					color="primary"
					onClick={this.toggle}
					style={{ marginBottom: '1rem' }}
				>
					Toggle
				</Button>
				{/* <div className={this.state.collapse ? 'open' : ''}> */}
				<div
					className="nav-box"
					style={{ width: this.state.collapse ? '100%' : '0px' }}
				>
					<Card>
						<CardBody>
							<p>List Based</p>
							<Nav vertical>
								<NavItem>
									<NavLink href="#">Link</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#">Link</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="#">Another Link</NavLink>
								</NavItem>
								<NavItem>
									<NavLink disabled href="#">
										Disabled Link
									</NavLink>
								</NavItem>
							</Nav>
						</CardBody>
					</Card>
				</div>
				{/* <RCollapse isOpen={this.state.collapse}>
					<Card>
						<CardBody>
							Anim pariatur cliche reprehenderit, enim eiusmod high life
							accusamus terry richardson ad squid. Nihil anim keffiyeh
							helvetica, craft beer labore wes anderson cred nesciunt sapiente
							ea proident.
						</CardBody>
					</Card>
				</RCollapse> */}
			</CollapseContainer>
		);
	}
}

export default Collapse;
