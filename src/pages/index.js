import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, List, Icon, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.QuarklycommunityKitMobileSidePanel menuPosition="near" breakpoint="all">
			<List list-style-type="none">
				<Box>
					<Text>
						First item
					</Text>
					<Text>
						First item
					</Text>
				</Box>
				<Text>
					First item
				</Text>
			</List>
		</Components.QuarklycommunityKitMobileSidePanel>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Excellence in everything
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Striving for perfection in everything we do. Unparalleled service for everyone.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Components.QuarklycommunityKitAudio src="https://s3.amazonaws.com/dl.getforma.com/.attachments/80e3527649989dba2f968dd7967e35b9/39786981/Methagu_ThaaiNilameMeendumVaruvom_LyricalVideoSong_Kittu_Riyas_Praveen.mp3?AWSAccessKeyId=AKIAR7KB7OYSMPA2CKCB&Expires=1625690074&Signature=s1frsbN1M0%2BvimzGGHHW2Dgw7so%3D&response-content-disposition=attachment%3Bfilename%2A%3DUTF-8%27%27Methagu%2520_%2520Thaai%2520Nilame%2520Meendum%2520Varuvom%2520_%2520Lyrical%2520Video%2520Song%2520_%2520Kittu%2520_%2520Riyas%2520_%2520Praveen.mp3&response-content-type=audio%2Fmpeg" autoPlay />
		<Components.QuarklycommunityKitVideo src="https://s3.amazonaws.com/dl.getforma.com/.attachments/aee50fd11524f1d629b7753538732d64/48edc266/01.IntrotoInteractions-Webflowinteractionsandanimationstutorial.mp4?AWSAccessKeyId=AKIAR7KB7OYSMPA2CKCB&Expires=1625690926&Signature=Vlp%2BneEMSt%2FO6ZyyKRrYLBtwHIE%3D&response-content-disposition=attachment%3Bfilename%2A%3DUTF-8%27%2701.Intro%2520to%2520Interactions%2520-%2520Webflow%2520interactions%2520and%2520animations%2520tutorial.mp4&response-content-type=video%2Fmp4" autoPlay />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60e43f2c7c5362001af3ff96"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});