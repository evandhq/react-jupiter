// @flow

import React, { type Node } from 'react';
import GlobalStyle from '../globalStyle';
import Avatar from '../avatar';
import {
  Container, Title, SmallTitle,
} from './index.style';

type Props = {
  title: string,
  avatar: string,
  renderAvatarLink?: * => Node,
  avatarSize?: 'sm' | 'md',
  titleSize?: 10 | 12,
};

const TitledAvatar = ({
  title,
  avatar,
  renderAvatarLink = undefined,
  avatarSize = 'md',
  titleSize = 12,
}: Props) => {
  const renderTitle = () => {
    if (titleSize === 10) {
      return <SmallTitle size={10}>{title}</SmallTitle>;
    }
    return <Title level={4} size="md">{title}</Title>;
  };

  if (renderAvatarLink) {
    return renderAvatarLink(
      <Container data-test="titled-avatar">
        <GlobalStyle />
        <Avatar src={avatar} size={avatarSize} round />
        {renderTitle()}
      </Container>,
    );
  }

  return (
    <Container data-test="titled-avatar">
      <GlobalStyle />
      <Avatar src={avatar} size={avatarSize} round />
      {renderTitle()}
    </Container>
  );
};

export default TitledAvatar;
