//@flow
import * as React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

type ModalProps = {
	className?: string,
	isShowed: boolean,
	children: React.Node
}

class Modal extends React.Component<ModalProps> {
	componentDidMount() {
		if (this.props.className) {
			if (modalRoot !== null) {
				modalRoot.classList.add(this.props.className);
			}
		}
		if (this.props.isShowed) {
			if (modalRoot !== null) {
				modalRoot.classList.add('showed');
			}
		}
	}

	componentDidUpdate(prevProps: ModalProps) {
		if (prevProps.isShowed !== this.props.isShowed) {
			if (modalRoot !== null) {
				if (document.body !== null) {
					document.body.classList.toggle('menuOpened');
				}
				modalRoot.classList.toggle('showed');
			}
		}
	}

	componentWillUnmount() {
		if (modalRoot !== null) {
			if (this.props.className) {
				modalRoot.classList.remove(this.props.className);
			}
			modalRoot.classList.remove('showed');
		}

		if (document.body !== null) {
			document.body.classList.remove('menuOpened');
		}
	}

	render(): React.Portal | null {
		if (modalRoot !== null) {
			return createPortal(this.props.children, modalRoot);
		}

		return null;
	}
}

export default Modal;
