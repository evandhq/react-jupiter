import React from 'react';
import { Heading, Text, Paragraph } from '../../typography';
import Avatar from '../../avatar';
import Buttons from './buttons';
import {
  Container,
  TextCenter,
  ResponsiveFlex,
  PartnershipBox,
} from './index.style';
import { Margin } from '../../spacing';
import Display from '../../display';
import Responsive from '../../responsive';
import defaultTheme from '../../themes';
import Icon from '../../icon';

type Props = {
  name: string,
  logo: string,
  description?: string,
  followersCount?: string,
  allEventsCount?: string,
  recommendedCount?: string,
  activeEventsCount?: string,
  isFollowed?: boolean,
  onClickFollowMe?: () => boolean,
  onClickConnectUs?: () => void,
  renderOrganizerLink: * => Node,
  partnership: string
}

const OrgnizerCard = (props: Props) => {
  const {
    name,
    description,
    logo,
    followersCount,
    onClickFollowMe,
    onClickConnectUs,
    isFollowed,
    allEventsCount,
    activeEventsCount,
    recommendedCount,
    renderOrganizerLink,
    partnership,
  } = props;

  return (
    <Container>
      <ResponsiveFlex>
        <Display display="flex" alignItems="center" justifyContent="start" width="100%">
          <Display display="flex" flexDirection="column">
            <Margin bottom={3}>
              <Text size={12} bold textAlign="right">
                برگزار‌کننده:
              </Text>
            </Margin>
            {renderOrganizerLink(<Avatar
              alt={name}
              src={logo}
              size="md"
            />)}
          </Display>
          <Margin right={4}>
            <Display display="flex">
              {renderOrganizerLink(
                <Text
                  strong
                  size="md"
                  level={4}
                >
                  <Display display="inline-block">
                    {` ${name} `}
                    {!!partnership
                  && (
                    <PartnershipBox>
                      <Icon
                        name={partnership}
                        color="yellow"
                        stickyRight
                      />
                      {partnership === 'partner' ? 'همیار' : 'همکار'}
                      {' '}
                      ایوند
                    </PartnershipBox>
                  )}
                  </Display>
                </Text>,
              )}
            </Display>
          </Margin>
        </Display>
        <Responsive option={{ lessThan: defaultTheme.breakpoints.sm }}>
          <Margin top={5} />
        </Responsive>
        {(activeEventsCount || allEventsCount) && (
        <Display display="flex" alignItems="center" justifyContent="space-between">
          {followersCount && (
            <Display display="block">
              <Margin left={6}>
                <TextCenter>
                  <Text size={16} bold>
                    {followersCount}
                  </Text>
                  <br />
                  <Text size={12} bold>
                    دنبال کننده
                  </Text>
                </TextCenter>
              </Margin>
            </Display>
          )}
          {allEventsCount && (
            <Display display="block">
              <Margin left={6} right={6}>
                <TextCenter>
                  <Text size={16} bold>
                    {allEventsCount}
                  </Text>
                  <br />
                  <Text size={12} bold>
                    کل رویدادها
                  </Text>
                </TextCenter>
              </Margin>
            </Display>
          )}

          {activeEventsCount && (
            <Display display="block">
              <Margin left={4} right={6}>
                <TextCenter>
                  <Text size={16} bold>
                    {activeEventsCount}
                  </Text>
                  <br />
                  <Text size={12} bold>
                    رویداد فعال
                  </Text>
                </TextCenter>
              </Margin>
            </Display>
          )}
        </Display>
        )}
      </ResponsiveFlex>
      {description && (
        <Display display="flex">
          <Responsive option={{ lessThan: defaultTheme.breakpoints.sm }}>
            <Margin top={5} />
          </Responsive>
          <Paragraph size={12} color="riverBed" bold>
            {description.slice(0, 350).concat('...')}
          </Paragraph>
        </Display>
      )}
      <ResponsiveFlex>
        {!!recommendedCount && (
          <Heading level={4} size="md" color="riverBed" bold>
            {` ${recommendedCount} `}
            این برگزارکننده را توصیه کرده‌اند.
          </Heading>
        )}
        <Responsive option={{ greaterThan: '768px' }}>
          <Display display="flex" justifyContent="end" width={recommendedCount ? '50%' : '100%'}>
            <Buttons
              onClickFollowMe={onClickFollowMe}
              onClickConnectUs={onClickConnectUs}
              isFollowed={isFollowed}
            />
          </Display>
        </Responsive>
        <Responsive option={{ lessThan: '768px' }}>
          <Display display="flex" justifyContent="center" width="100%">
            <Buttons
              onClickFollowMe={onClickFollowMe}
              onClickConnectUs={onClickConnectUs}
              isFollowed={isFollowed}
            />
          </Display>
        </Responsive>
      </ResponsiveFlex>
    </Container>
  );
};

OrgnizerCard.defaultProps = {
  isFollowed: false,
  onClickFollowMe: () => false,
  onClickConnectUs: () => { },
  allEventsCount: null,
  activeEventsCount: null,
  recommendedCount: null,
  description: null,
  followersCount: '',
};

export default OrgnizerCard;
