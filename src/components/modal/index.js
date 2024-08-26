import React, {useState, useEffect} from 'react';
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
  fullHeight?: boolean,
  className?: String,
}

// bind modal to the body of the app
Modal.setAppElement('body');

function JupiterModal({
  onRequestClose = () => {},
  onAfterOpen = () => {},
  hasCloseButton = true,
  disabledClose = false,
  modalWidth = '80%',
  modalWidthMobile = '100%',
  fullHeight = false,
  isOpen,
  className = '',
  children,
}: Props) {
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 99,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '990px',
      padding: '20px',
      backgroundColor: 'white',
      height: fullHeight ? '100%' : 'auto',
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'auto',
      backgroundClip: 'padding-box',
      border: '1px solid rgba(0,0,0,.2)',
      borderRadius: '.2rem',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={!disabledClose}
      overlayClassName="modal"
      className={`content ${className}`}
      style={customStyles}
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
          .content {
            width: ${modalWidth};
          }
          @media(max-width: 767px){
            .content {
              width: ${modalWidthMobile};
            }
          }
        `}
      </style>
    </Modal>
  );
}

export default JupiterModal;
