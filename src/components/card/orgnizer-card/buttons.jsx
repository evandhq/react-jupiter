import React from 'react';
import Button from '../../button';
import {
  LTRContainer,
} from './index.style';

const Buttons = (props) => {
  const {
    onClickFollowMe,
    onClickConnectUs,
    isFollowed,
  } = props;

  return (
    <LTRContainer>
      <Button
        className="follow-button"
        styleType="primary"
        mainColor="blue"
        htmlType="button"
        size="sm"
        width="100px"
        onClick={onClickFollowMe}
        style={{ marginLeft: '12px' }}
      >
        {isFollowed ? 'دنبال میکنید' : 'دنبال کنید'}
      </Button>
      <Button
        styleType="secondary"
        htmlType="button"
        mainColor="blue"
        width="100px"
        size="sm"
        onClick={onClickConnectUs}
      >
        تماس
      </Button>
    </LTRContainer>
  );
};

export default Buttons;
