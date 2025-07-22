import React from 'react';
import GlobalStyle from '../globalStyle';
import Avatar from '../avatar';
import {
  Container, SmallTitle,
} from './index.style';

const TitledAvatar = ({
  title,
  avatar,
  renderAvatarLink = () => false,
  avatarSize = 'md',
  titleSize = 12,
}) => {
  const renderTitle = () => (
    <SmallTitle size={titleSize}>{title}</SmallTitle>
  );

  if (renderAvatarLink) {
    return renderAvatarLink(
      <Container data-test="titled-avatar">
        <GlobalStyle />
        <Avatar src={avatar} size={avatarSize} sizeMobile={avatarSize} round />
        {renderTitle()}
      </Container>,
    );
  }

  return (
    <Container data-test="titled-avatar">
      <GlobalStyle />
      <Avatar src={avatar} size={avatarSize} sizeMobile={avatarSize} round />
      {renderTitle()}
    </Container>
  );
};

export default TitledAvatar;
