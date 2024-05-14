import React from 'react';
import Modal from 'react-modal';
import GlobalStyle from '../globalStyle';
import { StyledIcon, StyledWrapper } from './index.style';
import Icon from '../icon';
import theme from './theme';

type Props = {
  children: * => Node,
  isOpen: boolean,
  hasCloseButton?: boolean,
  disabledClose?: boolean,
  onRequestClose?: () => void,
  onAfterOpen?: () => void,
  modalWidth?: string,
  modalWidthMobile?: string,
  fullHeight?: boolean
}

// bind modal to the body of the app
Modal.setAppElement('body');

function JupiterModal(props: Props) {
  const {
    isOpen,
    onRequestClose,
    onAfterOpen,
    children,
    hasCloseButton,
    disabledClose,
    modalWidth,
    fullHeight,
    modalWidthMobile,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={!disabledClose}
      overlayClassName="modal"
      className="overlay"
    >
      <GlobalStyle />
      <StyledWrapper>
        {(!disabledClose && hasCloseButton) && (
          <StyledIcon onClick={onRequestClose} aria-hidden="true">
            <Icon name="close" size="md" />
          </StyledIcon>
        )}
        {children}
      </StyledWrapper>
      <style>
        {`
          .modal {
            position: relative;
            width: ${modalWidth};
            transform: translate(0,0);
            height: ${fullHeight ? '100%' : 'auto'};
          }
          @media(max-width: 767px){
            .modal {
              width: ${modalWidthMobile};
            }
          }
          .ReactModal__Overlay {
            opacity: 0;
            transition: opacity 100ms ease-in-out;
          }
          
          .ReactModal__Overlay--after-open{
            opacity: 1;
          }
          
          .ReactModal__Overlay--before-close{
            opacity: 0;
          }
          .overlay {
            background: ${theme.overlayColor};
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            width: 100%;
            pointer-events: auto;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid rgba(0,0,0,.2);
            border-radius: .3rem;
            outline: 0;
            padding: 1rem;
          }
        `}
      </style>
    </Modal>
  );
}

JupiterModal.defaultProps = {
  onRequestClose: () => {},
  onAfterOpen: () => {},
  hasCloseButton: true,
  disabledClose: false,
  modalWidth: '80%',
  modalWidthMobile: '100%',
  fullHeight: false,
};

export default JupiterModal;
