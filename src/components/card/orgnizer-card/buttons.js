import React from 'react';
import Button from '../../button';
import {
  LTRContainer,
} from './index.style';

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
