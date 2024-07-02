import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import GlobalStyle from '../../globalStyle';
import { VERTICAL_CARD, HORIZONTAL_CARD, HORIZONTAL_MOBILE_CARD } from './constants';
import ShowDate from '../../show-date';
import { Text } from '../../typography';
import TitledAvatar from '../../titled-avatar';
import EventCardLabel from './event-card-label';
import {
  VerticalCardContainer,
  VerticalCover,
  VerticalContentContainer,
  DateLabelContainer,
  DateBookmarkContainer,
  BookmarkIcon,
  VerticalPlacePrice,
  VerticalTitle,
  HorizontalCardContainer,
  HorizontalCover,
  HorizontalMobileCover,
  HorizontalContentContainer,
  HorizontalTitle,
  HorizontalPlacePrice,
  PartnershipBox,
} from './index.style';
import Icon from '../../icon';

const finishedClockLabelUrl = 'https://evand-storage.oss-eu-central-1.aliyuncs.com/assets/images/other/finished-clock-label.svg';
const defaultCoverUrl = 'https://static.evand.net/assets/images/defaults/event-cover.jpg';
const EventCard = ({
  title,
  price,
  place,
  renderEventLink,
  clickBookmark,
  bookmarked = false,
  cover = '',
  type = VERTICAL_CARD,
  ads = false,
  finished = false,
  organization = undefined,
  renderOrganizationLink = () => false,
  date = '',
  showDate = '',
  partnership = {
    status: '',
  },
  coverImage = null,
  ...rest
}) => {
  // date param used on main evand and because it wrong to use moment-jalali in react jupiter
  // we ommmit it in evand-next and use showDate param instead but its still used in evand
  // TODO: remove date params if no longer needed (in evand project)
  // TODO: remove ShowDate component and remove used places
  // TODO: remove moment-jalali from this package after removing ShowDate

  // in new form of event-card we dont show organazation info as a titled-avatar
  // TODO: if the new form was accepted and remove old one from evand clean these parts
  const productPropertiesList = [
    { iconName: 'place', text: place },
    { iconName: 'ticket', text: price },
  ];
  if (organization && organization.logo === 'unset') {
    productPropertiesList.push({ iconName: 'supervisor-account', text: organization.name });
  }

  const renderVerticalCard = () => (
    <VerticalCardContainer
      direction={type}
      hoverToLevel={3}
      maxWidth={270}
      {...rest}
    >
      {renderEventLink(coverImage || <VerticalCover data-test="vertical-cover" src={cover || defaultCoverUrl} loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = defaultCoverUrl; }} />) }
      <VerticalContentContainer
        data-test="vertical-content"
        background={finished ? finishedClockLabelUrl : null}
      >
        <div>
          <DateBookmarkContainer data-test="vertical-date-bookmark">
            <DateLabelContainer>
              {finished && <EventCardLabel type="finished" />}
              {!finished && ads && <EventCardLabel type="ads" />}
              {!!partnership?.status && (
              <PartnershipBox>
                <Icon name={partnership?.status} color="yellow" stickyLeft marginRight={3} />
                {' '}
                {partnership?.status === 'colleague' ? 'همکار' : 'همیار'}
              </PartnershipBox>
              )}
              {date && <ShowDate date={date} color="gray" fontSize="12" />}
              {showDate && (
                <Text size="12" color="gray" data-test="show-date">{showDate}</Text>
              )}
            </DateLabelContainer>
            <BookmarkIcon
              name={bookmarked ? 'bookmark' : 'bookmark-border'}
              size="lg"
              color="gray"
              onClick={clickBookmark}
            />
          </DateBookmarkContainer>
          { renderEventLink(<VerticalTitle level={2} size="sm">{title}</VerticalTitle>)}
          <VerticalPlacePrice list={productPropertiesList} />
        </div>
        {(organization && organization.logo !== 'unset') && (
          <TitledAvatar title={organization.name} titleSize={10} avatar={organization.logo} avatarSize="sm" renderAvatarLink={renderOrganizationLink} />
        )}
      </VerticalContentContainer>
    </VerticalCardContainer>
  );

  const renderHorizontalCard = () => (
    <HorizontalCardContainer
      direction={type}
      hoverToLevel={3}
      maxWidth={560}
      {...rest}
    >
      {renderEventLink(<HorizontalCover data-test="horizontal-cover" src={cover || defaultCoverUrl} loading="lazy" />) }
      <HorizontalContentContainer data-test="horizontal-content">
        <DateBookmarkContainer>
          <DateLabelContainer>
            {finished && <EventCardLabel type="finished" />}
            {!finished && ads && <EventCardLabel type="ads" />}
            {date && <ShowDate date={date} color="gray" fontSize="12" />}
            {showDate && (
              <Text size="12" color="gray" data-test="show-date">{showDate}</Text>
            )}
          </DateLabelContainer>
          <BookmarkIcon
            name={bookmarked ? 'bookmark' : 'bookmark-border'}
            size="lg"
            color="gray"
            onClick={clickBookmark}
            data-test={bookmarked ? 'bookmark' : 'bookmark-border'}
          />
        </DateBookmarkContainer>
        { renderEventLink(<HorizontalTitle level={2} size="sm">{title}</HorizontalTitle>) }
        <HorizontalPlacePrice list={productPropertiesList} isHorizontal />
      </HorizontalContentContainer>
    </HorizontalCardContainer>
  );

  const renderHorizontalMobileCard = () => (
    <HorizontalCardContainer
      direction={type}
      hoverToLevel={3}
      maxWidth={560}
      {...rest}
    >
      {renderEventLink(<HorizontalMobileCover data-test="horizontal-mobile-cover" src={cover || defaultCoverUrl} loading="lazy" />) }
      <HorizontalContentContainer data-test="horizontal-content">
        <DateBookmarkContainer>
          <DateLabelContainer>
            {finished && <EventCardLabel type="finished" />}
            {!finished && ads && <EventCardLabel type="ads" />}
            {date && <ShowDate date={date} color="gray" fontSize="10" />}
            {showDate && (
              <Text size="10" color="gray" data-test="show-date">{showDate}</Text>
            )}
          </DateLabelContainer>
          <BookmarkIcon
            name={bookmarked ? 'bookmark' : 'bookmark-border'}
            size="sm"
            color="gray"
            onClick={clickBookmark}
            data-test={bookmarked ? 'bookmark' : 'bookmark-border'}
          />
        </DateBookmarkContainer>
        { renderEventLink(<HorizontalTitle level={4} size="sm">{title}</HorizontalTitle>) }
        <HorizontalPlacePrice list={productPropertiesList} isHorizontal />
      </HorizontalContentContainer>
    </HorizontalCardContainer>
  );

  const renderCard = () => {
    switch (type) {
      case HORIZONTAL_CARD:
        return renderHorizontalCard();
      case HORIZONTAL_MOBILE_CARD:
        return renderHorizontalMobileCard();
      case VERTICAL_CARD:
      default:
        return renderVerticalCard();
    }
  };

  return (
    <>
      <GlobalStyle />
      {renderCard()}
    </>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool,
  type: PropTypes.string,
  price: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  showDate: PropTypes.string,
  cover: PropTypes.string,
  ads: PropTypes.bool,
  finished: PropTypes.bool,
  organization: oneOfType([
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    }),
    PropTypes.undefined,
  ]),
  renderEventLink: PropTypes.func.isRequired,
  renderOrganizationLink: PropTypes.func,
  clickBookmark: PropTypes.func.isRequired,
  partnership: PropTypes.shape({
    status: PropTypes.string,
  }),
  coverImage: PropTypes.node || null,
};

export default EventCard;
