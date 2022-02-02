import React from 'react';
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from './FooterStyles';

const Footer: React.FC = () => {
	return (
		<Box>
			<h1 style={{ color: 'green', textAlign: 'center', marginTop: '-50px' }}>
				Social Awareness: make someone aware
			</h1>
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Aim</FooterLink>
						<FooterLink href="#">Vision</FooterLink>
						<FooterLink href="#">Testimonials</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">Developing</FooterLink>
						<FooterLink href="#">Internships</FooterLink>
						<FooterLink href="#">Coding</FooterLink>
						<FooterLink href="#">Teaching</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">Developer</FooterLink>
						<FooterLink href="#">Designer</FooterLink>
						<FooterLink href="#">Database</FooterLink>
					</Column>
					<Column>
						<Heading>Follow Us</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: '10px' }}>Facebook</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: '10px' }}>Instagram</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span style={{ marginLeft: '10px' }}>Twitter</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span style={{ marginLeft: '10px' }}>Youtube</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
