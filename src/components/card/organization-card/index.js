// @flow

import React, { type Node, useState } from 'react';
import TitledAvatar from '../../titled-avatar';
import NumericSummeryReport from '../../numeric-summery-report';
import Button from '../../button';
import Container from './index.style';

type Props = {
  title: string,
  logo: string,
  followed?: boolean,
  report: {
    heldEventsNumber: number,
    activeEventsNumber: number,
    followingNumber: number,
  },
  onClickFollow: () => void,
  renderLink: * => Node,
}

const OrganizationCard = (props: Props) => {
  const {
    title, logo, followed, report, onClickFollow, renderLink,
  } = props;

  const [isFollowed, setFollowed] = useState(followed);

  const reportData = [
    { id: 1, title: 'برگزار شده', count: report.heldEventsNumber },
    { id: 2, title: 'فعال', count: report.activeEventsNumber },
    { id: 3, title: 'دنبال‌کننده‌ها', count: report.followingNumber },
  ];

  const handleClickButton = () => {
    setFollowed(!isFollowed);
    onClickFollow();
  };

  return (
    <Container
      direction="vertical"
      hoverToLevel={3}
      maxWidth={370}
      data-test="organization-card"
    >
      <TitledAvatar
        title={title}
        avatar={logo}
        renderAvatarLink={renderLink}
      />
      <NumericSummeryReport data={reportData} />
      <Button
        styleType={isFollowed ? 'secondary' : 'primary'}
        onClick={handleClickButton}
        mainColor="blue"
        size="sm"
        wide
      >
        {isFollowed ? 'دنبال نکنید' : 'دنبال کنید'}
      </Button>
    </Container>
  );
};

OrganizationCard.defaultProps = {
  followed: false,
};

export default OrganizationCard;
