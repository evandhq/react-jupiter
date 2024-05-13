import React from 'react';
import Button from '../../button';
import Responsive from '../../responsive';
import {
  LTRContainer,
  StyledButton,
} from './index.style';
import Display from '../../display';

type Props = {
  isFollowed: boolean,
  onClickFollowMe: () => boolean,
  onClickConnectUs: () => void,
}

const Buttons = (props: Props) => {
  const {
    onClickFollowMe,
    onClickConnectUs,
    isFollowed,
  } = props;

  return (
    <>
      <Responsive option={{ greaterThan: '768px' }}>
        <LTRContainer>
          <StyledButton
            styleType="secondary"
            htmlType="button"
            mainColor="blue"
            size="sm"
            onClick={onClickConnectUs}
          >
            تماس
          </StyledButton>
          <StyledButton
            className="follow-button"
            styleType="primary"
            htmlType="button"
            size="sm"
            onClick={onClickFollowMe}
          >
            {isFollowed ? 'دنبال میکنید' : 'دنبال کنید'}
          </StyledButton>
        </LTRContainer>
      </Responsive>

      <Responsive option={{ lessThan: '768px' }}>
        <Display display="flex" justifyContent="center" width="100%">
          <Button
            styleType="secondary"
            htmlType="button"
            mainColor="blue"
            size="sm"
            onClick={onClickConnectUs}
            wide
          >
            تماس
          </Button>
          <Button
            className="follow-button"
            styleType="secondary"
            htmlType="button"
            size="sm"
            onClick={onClickFollowMe}
            wide
          >
            {isFollowed ? 'دنبال میکنید' : 'دنبال کنید'}
          </Button>
        </Display>
      </Responsive>
    </>
  );
};

export default Buttons;
