import React from 'react';
import { Text, Paragraph } from '../../typography';
import Buttons from './buttons';
import {
  Container,
  TextCenter,
  PartnershipBox,
} from './index.style';
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
        <Display display="flex" flexDirection="row" flexDirectionMobile="column" justifyContent="start" width="100%" flex="4 1">
          <Display display="flex" flex="1 1" className="avatar">
            {renderOrganizerLink(<Avatar
              alt={name}
              src={logo}
              size="md"
              sizeMobile="lg"
              round
            />)}
          </Display>
          <div className="mr">
            <Display display="flex" alignItems="baseline">
              {renderOrganizerLink(
                <Text size={14} textAlign="right" bold>
                  برگزار‌کننده:
                  {' '}
                  {name}
                </Text>,
              )}
            </Display>
            {!!partnership
            && (
              <PartnershipBox>
                <Icon
                  name={partnership}
                  color="yellow"
                  stickyRight
                />
                <span>
                  {partnership === 'partner' ? 'همیار' : 'همکار'}
                  {' '}
                  ایوند
                </span>
              </PartnershipBox>
            )}
            {description && (
              <Display display="flex">
                <Paragraph size={12} color="riverBed">
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
        <Display display="flex" alignItems="start" flexDirection="column" justifyContent="space-between" width="100%" flex="2 1" alignSelf="stretch">
          <Display className="statistics" display="flex" alignItems="start" flexDirection="row" justifyContent="space-evenly" width="100%">
            {followersCount && (
              <Display display="block">
                <TextCenter>
                  <Text size={16} bold>
                    {followersCount}
                  </Text>
                  <br />
                  <Text size={12} bold>
                    دنبال کننده
                  </Text>
                </TextCenter>
              </Display>
            )}
            {allEventsCount && (
              <Display display="block">
                <TextCenter>
                  <Text size={16} bold>
                    {allEventsCount}
                  </Text>
                  <br />
                  <Text size={12} bold>
                    کل رویدادها
                  </Text>
                </TextCenter>
              </Display>
            )}
            {activeEventsCount && (
              <Display display="block">
                <TextCenter>
                  <Text size={16} bold>
                    {activeEventsCount}
                  </Text>
                  <br />
                  <Text size={12} bold>
                    رویداد فعال
                  </Text>
                </TextCenter>
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
            margin: 10px 0;
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
              display: flex;
              flex-direction: column;
              flex: 5 1;
              min-height: 123px;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default OrgnizerCard;
