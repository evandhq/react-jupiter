import React from 'react';
import { Text, Paragraph } from '../../typography';
import Buttons from './buttons';
import {
  Container,
  TextCenter,
  PartnershipBox,
} from './index.style';
import { Margin } from '../../spacing';
import Display from '../../display';
import Icon from '../../icon';
import Avatar from '../../avatar';

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
    logo,
    renderOrganizerLink,
    partnership,
    isFollowed = false,
    onClickFollowMe = () => false,
    onClickConnectUs = () => { },
    allEventsCount = null,
    activeEventsCount = null,
    recommendedCount = null,
    description = null,
    followersCount = '',
  } = props;

  return (
    <Container className="organizer-card">
      <Display display="flex" flexDirection="row" flexDirectionMobile="column" alignItems="start" justifyContent="space-between">
        <Display display="flex" alignItems="center" justifyContent="start" width="100%" flex="4 1">
          <Display display="flex" flexDirection="row" flexDirectionMobile="column">
            {renderOrganizerLink(<Avatar
              alt={name}
              src={logo}
              size="md"
              sizeMobile="lg"
              className="avatar"
            />)}
            <div className="mr">
              <Text size={12} textAlign="right">برگزار‌کننده:</Text>
              {' '}
              {renderOrganizerLink(
                <Text size={14} bold textAlign="right">{name}</Text>,
              )}
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
              {description && (
                <Display display="flex">
                  <Paragraph size={12} color="riverBed" bold>
                    {description.slice(0, 350).concat('...')}
                  </Paragraph>
                </Display>
              )}
              {!!recommendedCount && (
                <Text size="14" bold color="riverBed" className="recommend">
                  {` ${recommendedCount} `}
                  این برگزارکننده را توصیه کرده‌اند.
                </Text>
              )}
            </div>
          </Display>
        </Display>
        <Display display="flex" alignItems="start" flexDirection="column" justifyContent="space-between" width="100%" flex="2 1" alignSelf="stretch">
          <Display className="statistics" display="flex" alignItems="start" flexDirection="row" justifyContent="space-between" width="100%">
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
          <Display display="flex" flexDirection="row" flexDirectionMobile="column" alignItems="center" justifyContent="space-between" width="100%">
            <Buttons
              onClickFollowMe={onClickFollowMe}
              onClickConnectUs={onClickConnectUs}
              isFollowed={isFollowed}
            />
          </Display>
        </Display>
      </Display>
      <style>
        {`
          .recommend {
            display: block;
            margin: 10px auto;
          }
          @media (max-width: 768px) {
            .avatar {
              margin: 5px auto 10px;
            }
              .statistics {
                margin: 25px auto;
              }
              }
          @media (min-width: 768px) {
            .mr {
              margin-right: 15px;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default OrgnizerCard;
