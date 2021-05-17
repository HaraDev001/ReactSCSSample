//@flow
import { Link, navigate } from '@reach/router';
import * as React from 'react'
import { motion } from 'framer-motion';
import { ROUTES } from '../../../../routes';
import { Container } from '../../../Grid'
import {
	CloseModal,
	LoginButtonBorder,
	QrCode,
	SelectLanguageIcon
} from '../../../Icons';
import Modal from '../../../Modal';
import * as uuid from "uuid";
import { ClickOutside, Data, hideCardNumber } from '../../../tools';
import { LayoutContext } from '../../Context';
import Logo from '../Logo'
import MenuList from './MenuList'

type Props = {
	withNav?: boolean,
	isAuthenticated?: boolean
}

function Header({ withNav, isAuthenticated = false }: Props) {
	const state = React.useContext(LayoutContext);
	const [isOpened, openMobileMenu] = React.useState(false);
	const [whiteHeader, setWhiteHeader] = React.useState(false);
	const [isOpenedQrModal, openQrModal] = React.useState(false);
	
	const location = window.location.pathname;
	
	React.useEffect(() => {
		openMobileMenu(false);
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		window.addEventListener('scroll', scrollTop);
		
		return () => {
			window.removeEventListener('scroll', scrollTop)
		}
	}, [location]);
	
	const scrollTop = () => {
		let scrollTop = window.pageYOffset;
		scrollTop > 30 ? setWhiteHeader(true) : setWhiteHeader(false)
	};
	
	const toggleQrModal = () => {
		state.setBlurBg(show => !show);
		openQrModal(open => !open);
	};
	
	const logoSkew = {
		skew: () => ({
			translateX: '50%',
			left: '-66px',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 40,
				restDelta: 1,
			}
		}),
		normal: {
			translateX: 0,
			left: 0,
			transition: {
				type: 'spring',
				stiffness: 70,
				damping: 140
			}
		}
	};
	
	const shouldBeWhite = whiteHeader && withNav;
	const containerWidth = isAuthenticated ? 1100 : 'none';
	return (
		<motion.header
			className={`${isAuthenticated ? 'authenticated' : ''} ${withNav ? 'fixed' : ''} ${shouldBeWhite ? 'white' : ''} ${isOpened ? 'opened-mobile-menu' : ''}`}
			animate={!withNav ? 'skew' : 'normal'}>
			<Container style={{
				position: 'relative',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				maxWidth: containerWidth,
				width: isAuthenticated ? '100%' : ''
			}}>
				{!isAuthenticated ? (
					<motion.div style={{
						position: 'relative',
						width: '100%',
						display: 'flex',
						flex: 3
					}} variants={logoSkew}>
						<Logo type={shouldBeWhite ? 'dark' : ''}/>
					</motion.div>
				) : (
					<React.Fragment>
						<Logo to={ROUTES.PROFILE.DASHBOARD} type={shouldBeWhite ? 'dark' : ''}/>
						<QrCodeModal isShowed={isOpenedQrModal} toggleModal={() => toggleQrModal()} />
						<ProfileOptions toggleModal={() => toggleQrModal()}/>
					</React.Fragment>
				)}
				
				{withNav && (
					<React.Fragment>
						<div className={`navigation`}>
							<nav>
								<MenuList/>
							</nav>
							<button type="button"
							        className="menu-button"
							        onClick={() => openMobileMenu(!isOpened)}>
								<span/>
								<span/>
								<span/>
							</button>
						</div>
						<div className="auth-buttons">
							<Link to={ROUTES.AUTH.LOGIN}
							      className="btn btn--login">
								Login
								<LoginButtonBorder/>
							</Link>
							<Link to={ROUTES.AUTH.USER_REGISTER}
							      className="btn btn--getStarted">Get
								started</Link>
						</div>
					</React.Fragment>
				)}
			</Container>
		</motion.header>
	)
}

const QrCodeModal = React.memo(({isShowed, toggleModal}) => {
	let quantityArr = [
		{
			id: uuid.v4(),
			quantity: '100',
			price: 100
		},
		{
			id: uuid.v4(),
			quantity: '500',
			price: 460
		},
		{
			id: uuid.v4(),
			quantity: '1000',
			price: 800
		},
	];
	let cardNumber = '1234 1234 1234 5678';
	const [quantity] = React.useState(quantityArr);
	const [selectedQuantity, setQuantity] = React.useState(quantity[0]);
	
	const onClickedOutsideModal = () => {
		if (isShowed) {
			return toggleModal();
		}
	};
	
	const addNewPaymentMethod = () => {
		toggleModal();
		return navigate(ROUTES.PROFILE.SETTINGS_ROUTES.BILLING);
	};
	
	return (
		<Modal isShowed={isShowed}>
			<ClickOutside clickedOutside={onClickedOutsideModal}>
				{({innerRef}) => isShowed && (
					<div ref={innerRef} className={`qr-code-modal modal-body ${isShowed ? 'show' : ''}`}>
						<span className="close-modal" onClick={() => toggleModal()}>
							<CloseModal/>
						</span>
						<div className="order-code">
							<span className="modal-title">Order physical QR codes</span>
							<span className="input-label">Name</span>
							<ul className="typeOfCategory">
								<Data data={quantity}>
									{({item, index}) => <li key={index}
									                        onClick={() => setQuantity(item)}
									                        className={`${selectedQuantity && selectedQuantity.id === item.id ? 'selected' : ''}`}>{item.quantity}</li>}
								</Data>
							</ul>
							
							<span className="input-label">Billing method</span>
							<span className="card-number">{hideCardNumber(cardNumber)}</span>
							<button type="button" className="btn btn--white" onClick={() => addNewPaymentMethod()}>Add a new payement method</button>
							
							<div className="scan-block">
								<div className="scan-with-phone">
									<img src={require('../../../../assets/img/common/qr-white.svg')} alt="qr-code"/>
									<span className="button-disabled">Scan it with your phone</span>
								</div>
								
								<div className="scan-block-languages">
									<span>see the menu in <br/>your language</span>
									<ul>
										<li><img src={require('../../../../assets/img/common/british-flag.svg')} alt="flag-lang"/></li>
										<li><img src={require('../../../../assets/img/common/british-flag.svg')} alt="flag-lang"/></li>
										<li><img src={require('../../../../assets/img/common/british-flag.svg')} alt="flag-lang"/></li>
										<li><img src={require('../../../../assets/img/common/british-flag.svg')} alt="flag-lang"/></li>
										<li><img src={require('../../../../assets/img/common/british-flag.svg')} alt="flag-lang"/></li>
										<li><img src={require('../../../../assets/img/common/british-flag.svg')} alt="flag-lang"/></li>
									</ul>
								</div>
							</div>
							
							<button type="button" className="btn btn--getStarted">ORder for ${selectedQuantity ? selectedQuantity.price : '100'}</button>
						</div>
						<div className="my-qr-code">
							<span className="modal-title">My Qr Code</span>
							
							<div className="qrcode-expanded">
								<img src={require('../../../../assets/img/common/qrcode-big.svg')} alt="qrcode"/>
								<div className="action-buttons">
									<a href={require('../../../../assets/img/common/qrcode-big.svg')} type="button" className="btn btn--white" download>Download SVG</a>
									<a href={require('../../../../assets/img/common/qrcode-big.png')} type="button" className="btn btn--white" download>Download PNG</a>
								</div>
							</div>
							<div className="copy-link-block">
								<div className="link-block">
									<span className="bold">Link to my menu :</span>
									<span id="link">transleat.co/Mybusiness</span>
								</div>
								
								<a href="/" className="btn btn-green">Live Check</a>
							</div>
						</div>
					</div>
				)}
			</ClickOutside>
		</Modal>
	)
});

type ProfileOptionsProps = {
	toggleModal: any => void
}

const ProfileOptions = React.memo<ProfileOptionsProps>(({toggleModal}) => {
	const [isOpened, openDropdown] = React.useState(false);
	const state = React.useContext(LayoutContext);
	
	const closeDropmenu = () => {
		state.setBlurBg(o => !o);
		openDropdown(!isOpened);
	};
	
	const onClickedOutside = () => {
		if (isOpened) {
			return closeDropmenu();
		}
	};
	return (
		<div className="options">
			<span onClick={() => toggleModal()}><QrCode/></span>
			<ClickOutside clickedOutside={onClickedOutside}>
				{({innerRef}) => (
						<div ref={innerRef} className="select-language">
							<span className={`button ${isOpened ? 'active' : ''}`} onClick={() => closeDropmenu()}>
								<SelectLanguageIcon/>
							</span>
							<ul className={`profile-dropdown ${isOpened ? 'opened' : ''}`}>
								<li className="selected">English</li>
								<li>English</li>
								<li>English</li>
							</ul>
						</div>
					)}
			</ClickOutside>
		</div>
	)
});

ProfileOptions.displayName = 'ProfileOptions';

export default Header