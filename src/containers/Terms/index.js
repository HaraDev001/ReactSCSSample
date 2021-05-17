//@flow
import * as React from 'react';
import { Container } from '../../components/Grid';
import { Consume } from '../../components/LayoutProvider';

function Terms() {
	return (
		<Consume consume={{
			title: 'TRANSLEAT | TERMS',
			classNameLayout: 'privacy-page',
			isAuthenticated: false,
			withFooter: true,
			withNav: true,
			withHeader: true
		}}>
			<section className="article-introduction-section">
				<Container>
					<h2 className="subject-title">Terms of Use</h2>
					<p>Please read carefully these Terms of Usey</p>
					<p>The following contains information on how we collect, store, and use your personal data. You have the ability to review, change, and/or correct the personally identifiable information you provide us. You may also request that we remove the information you provided when you registered with ZestMeUp from our databases.</p>
				</Container>
				<img src={require('../../assets/img/privacy/decoration.svg')} alt="decoration"/>
			</section>
			
			<section className="main-content">
				<Container>
					<div className="article">
						<h2 className="subject-title">Information collected</h2>
						<p> You can visit ZestMeUp’s website without identifying yourself or revealing any personal information. However, if you request information or registration to ZestMeUp’s services, you may be asked to provide basic information about your yourself, your company, and/or your professional interests. Since ZestMeUp is based in France, all data is collected and held in France. For your information, this processing has been reported to the relevant local authority.</p>
						<p>In short, we do not work to collect as much information about you as possible; the collected information is used register you/your company into ZestMeUp’s system to be able to contact you if necessary.</p>
					</div>
					<div className="article">
						<h2 className="subject-title">Use of information</h2>
						<p>We use the information collected on our website or application to provide you with the services that you request. This information allows us to create your profile and the team with whom you Zest. All the data collected is reserved for the internal use of ZestMeUp only. It is primarily used to put you in contact with your team/company, and to communicate with us. <br/> We may also use your personal information to:</p>
						<p>prevent and detect fraud or any other prohibited or illegal activities; <br/>
							protect the security and integrity of ZestMeUp’s website, application and services; <br/>
							fulfill your requests for registration; <br/>
							facilitate the use of ZestMeUp’s website, application and services; <br/>
							help us customize content and make it relevant to your needs; <br/>
							inform you of any important news on ZestMeUp which is relevant to you; <br/>
							communicate with you about technical or functional problems; <br/>
							send you special offers and events that may interest you; <br/>
							promote our products and services on our website and those of our partners;  <br/>
							improve ZestMeUp’s website, application and services; <br/>
							To summarize, collected information enables you to help us improve our services and stay in contact with us.</p>
					</div>
					<div className="article">
						<h2 className="subject-title">Sharing your information</h2>
						<p>We promise not to share, sell, rent or trade your personal and confidential information with any third party for commercial purposes. We will only share your personal information with other ZestMeUp entities and/or partners exclusively for the above described purposes.</p>
						<p>ZestMeUp uses third-party applications, web services and external hosting services to provide the hardware, network, storage, and all other technology required to ensure exceptional quality of access to ZestMeUp’s website, app and services. Whenever possible, we make sure that our partners are aligned with our Privacy Policy.</p>
						<p>To sum up, your information is safe with us and we promise not to sell, give, or share it with anyone.</p>
					</div>
					<div className="article">
						<h2 className="subject-title">Cookies</h2>
						<p>Yes, we use cookies. Cookies are small files, or a piece of information, stored on your computer about internet documents that you have viewed. You can choose to accept a cookie or not. Some of our business partners may use cookies on our website (advertisers for example), but we have no access to, or control over, these cookies. <br/>
							For parts of the website, app or services, ZestMeUp uses cookies or other technologies in order to offer you the best possible user experience, as well as easier navigation during your next visit.
						</p>
						<p>That means:</p>
						<p>identify you as a user account holder; br
							request you to re-enter your password after a certain period without activity to protect you against unsolicited access; <br/>
							remember your preferences and settings; <br/>
							estimate our audience and visits to our site; <br/>
							improve our website, app and services. <br/>
							To summarize, cookies are safe. ZestMeUp’s website, app and services use them in order to remember you and make the use of our products as seamless as possible.</p>
					</div>
					<div className="article">
						<h2 className="subject-title">When this Privacy Policy applies</h2>
						<p>We promise not to share, sell, rent or trade your personal and confidential information with any third party for commercial purposes. We will only share your personal information with other ZestMeUp entities and/or partners exclusively for the above described purposes.</p>
						<p>ZestMeUp uses third-party applications, web services and external hosting services to provide the hardware, network, storage, and all other technology required to ensure exceptional quality of access to ZestMeUp’s website, app and services. Whenever possible, we make sure that our partners are aligned with our Privacy Policy.</p>
						<p>To sum up, your information is safe with us and we promise not to sell, give, or share it with anyone.</p>
					</div>
					<div className="article">
						<h2 className="subject-title">Contact Us</h2>
						<p>You have the ability to review, change and correct the personally identifiable information you provide us. As a registered user, you can access, correct or update your account or other personal information. You may also request that we remove the information you provided when you registered with ZestMeUp from our databases. by contacting us at support@zestmeup.com</p>
					</div>
				</Container>
			</section>
		</Consume>
	)
}

export default Terms;