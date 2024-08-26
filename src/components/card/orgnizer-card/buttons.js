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
        </LTRContainer>
      </Responsive>

      <Responsive option={{ lessThan: '768px' }}>
        <Display display="flex" justifyContent="space-evenly" width="100%">
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
          <Button
            className="follow-button"
            styleType="secondary"
            htmlType="button"
            size="sm"
            width="100px"
            onClick={onClickFollowMe}
          >
            {isFollowed ? 'دنبال میکنید' : 'دنبال کنید'}
          </Button>
        </Display>
      </Responsive>
    </>
  );
};

export default Buttons;
