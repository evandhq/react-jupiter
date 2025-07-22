import React from 'react';
import TitledAvatar from '../titled-avatar';
import { ButtonContainer, StyledButton } from './index.style';
import Responsive from '../responsive';
import generalTheme from '../themes';

const ProductOwner = ({
  name,
  avatar,
  isLoading,
  isFollowed = false,
  renderTitledAvatarLink = null,
  renderDescriptionLink = null,
  onClickFollowMe = () => false,
  onClickConnectUs = () => {},
}) => (
  <div data-test="product-owner">
    <Responsive option={{ lessThan: generalTheme.breakpoints.sm }}>
      <TitledAvatar
        title={name}
        avatar={avatar}
        avatarSize={generalTheme.sizes.small}
        titleSize={10}
        renderAvatarLink={renderTitledAvatarLink}
      />
    </Responsive>
    <Responsive option={{ greaterThan: generalTheme.breakpoints.sm }}>
      <TitledAvatar
        title={name}
        avatar={avatar}
        avatarSize={generalTheme.sizes.small}
        titleSize={12}
        renderAvatarLink={renderTitledAvatarLink}
      />
    </Responsive>
    <Responsive option={{ greaterThan: generalTheme.breakpoints.md }}>
      <ButtonContainer>
        <StyledButton
          className="follow-button"
          styleType={isFollowed ? 'secondary' : 'primary'}
          htmlType="button"
          mainColor="blue"
          size={generalTheme.sizes.small}
          isLoading={isLoading}
          onClick={onClickFollowMe}
        >
          {isFollowed ? 'دنبال میکنید' : 'دنبال کنید' }
        </StyledButton>
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
          styleType="tertiary"
          htmlType="button"
          size="sm"
          renderLink={renderDescriptionLink}
        >
          توضیحات
        </StyledButton>
      </ButtonContainer>
    </Responsive>
  </div>
);

export default ProductOwner;
