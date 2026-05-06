import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { VERTICAL_CARD, HORIZONTAL_CARD, HORIZONTAL_MOBILE_CARD } from './constants';
import ShowDate from '../../show-date';
import { Text } from '../../typography';
import TitledAvatar from '../../titled-avatar';
import EventCardLabel from './event-card-label';
import Icon from '../../icon';

const finishedClockLabelUrl = 'https://static.evand.net/assets/images/other/finished-clock-label.svg';
// const defaultCoverUrl = 'https://static.evand.net/assets/images/defaults/event-cover.jpg';
const defaultCoverUrl = 'https://evand.com/images/defaults/events-cover/cover-1.jpg';

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
  hasFile = false,
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
    <div
      className="relative flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 max-w-68 min-h-90"
      dir="rtl"
      data-test="vertical-card"
      {...rest}
    >
      {renderEventLink(
        coverImage || (
          <img
            className="w-full min-w-68 h-auto min-h-36 aspect-[16/9] object-cover"
            data-test="vertical-cover"
            src={cover || defaultCoverUrl}
            loading="lazy"
            onError={(e) => { e.target.onerror = null; e.target.src = defaultCoverUrl; }}
            alt={title}
          />
        )
      )}
      {hasFile && (
        <span className="absolute top-32 left-0 bg-purple-800 w-fit text-white px-2 py-1 rounded text-xs z-10">
          حاوی ویدیوی ضبط‌ شده رویداد
        </span>
      )}
      <div
        className="flex flex-col justify-between p-3 px-4 pb-4 min-h-44 max-h-48 text-right"
        data-test="vertical-content"
        style={finished && !hasFile ? { backgroundImage: `url(${finishedClockLabelUrl})`, backgroundSize: 'cover' } : {}}
      >
        <div>
          <div className="flex flex-row justify-between" data-test="vertical-date-bookmark">
            <div className="inline-flex items-center flex-wrap gap-1">
              {(finished && !hasFile) && <EventCardLabel type="finished" />}
              {!finished && ads && <EventCardLabel type="ads" />}
              {!!partnership?.status && (
                <span className="inline-flex items-center justify-center bg-yellow-400/15 rounded min-w-14 h-6 text-yellow-400 text-xs">
                  <Icon name={partnership?.status} color="yellow" stickyLeft marginRight={3} />
                  {' '}
                  {partnership?.status === 'colleague' ? 'همکار' : 'همیار'}
                </span>
              )}
              {date && <ShowDate date={date} color="gray" fontSize="12" />}
              {showDate && (
                <Text size="12" color="gray" data-test="show-date">{showDate}</Text>
              )}
            </div>
            <Icon
              name={bookmarked ? 'bookmark' : 'bookmark-border'}
              size="lg"
              color="gray"
              onClick={clickBookmark}
              className="ml-0 cursor-pointer"
            />
          </div>
          {renderEventLink(
            <h2 className="m-0 overflow-hidden h-14 text-sm font-semibold leading-snug text-gray-900 text-right">
              {title}
            </h2>
          )}
          <ul className="flex flex-col flex-wrap m-0 p-0 list-none">
            {productPropertiesList.map(({ iconName: propIconName, text: propText }, index) => (
              <li key={`${propIconName}-${index.toString()}`} className="my-0.5 first:mt-0 last:mb-0">
                <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                  <Icon name={propIconName} size="sm" color="gray" />
                  <span>{propText}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        {(organization && organization.logo !== 'unset') && (
          <div dir="rtl">
            <TitledAvatar title={organization.name} titleSize={12} avatar={organization.logo} avatarSize="xs" renderAvatarLink={renderOrganizationLink} />
          </div>
        )}
      </div>
    </div>
  );

  const renderHorizontalCard = () => (
    <div
      className="relative flex flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 max-w-xl h-28"
      dir="rtl"
      data-test="horizontal-card"
      {...rest}
    >
      {renderEventLink(
        <img
          className="w-52 min-w-52 h-auto object-cover"
          data-test="horizontal-cover"
          src={cover || defaultCoverUrl}
          loading="lazy"
          alt={title}
        />
      )}
      <div className="flex flex-col p-4 justify-between flex-1 min-w-64 text-right" data-test="horizontal-content">
        <div className="flex flex-row justify-between">
          <div className="inline-block">
            {(finished && !hasFile) && <EventCardLabel type="finished" />}
            {!finished && ads && <EventCardLabel type="ads" />}
            {date && <ShowDate date={date} color="gray" fontSize="12" />}
            {showDate && (
              <Text size="12" color="gray" data-test="show-date">{showDate}</Text>
            )}
          </div>
          <Icon
            name={bookmarked ? 'bookmark' : 'bookmark-border'}
            size="lg"
            color="gray"
            onClick={clickBookmark}
            className="ml-0 cursor-pointer"
            data-test={bookmarked ? 'bookmark' : 'bookmark-border'}
          />
        </div>
        {renderEventLink(
          <h2 className="text-sm font-semibold leading-snug text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis m-0 text-right">
            {title}
          </h2>
        )}
        <ul className="flex flex-row flex-wrap m-0 p-0 list-none">
          {productPropertiesList.map(({ iconName: propIconName, text: propText }, index) => (
            <li key={`${propIconName}-${index.toString()}`} className="min-w-1/2 my-0.5 first:mt-0 last:mb-0">
              <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                <Icon name={propIconName} size="sm" color="gray" />
                <span>{propText}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderHorizontalMobileCard = () => (
    <div
      className="relative flex flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 max-w-xl h-28"
      dir="rtl"
      data-test="horizontal-mobile-card"
      {...rest}
    >
      {renderEventLink(
        <img
          className="w-36 min-w-36 h-full object-cover"
          data-test="horizontal-mobile-cover"
          src={cover || defaultCoverUrl}
          loading="lazy"
          alt={title}
        />
      )}
      <div className="flex flex-col p-4 justify-between flex-1 min-w-64 text-right" data-test="horizontal-content">
        <div className="flex flex-row justify-between">
          <div className="inline-block">
            {(finished && !hasFile) && <EventCardLabel type="finished" />}
            {!finished && ads && <EventCardLabel type="ads" />}
            {date && <ShowDate date={date} color="gray" fontSize="10" />}
            {showDate && (
              <Text size="10" color="gray" data-test="show-date">{showDate}</Text>
            )}
          </div>
          <Icon
            name={bookmarked ? 'bookmark' : 'bookmark-border'}
            size="sm"
            color="gray"
            onClick={clickBookmark}
            className="ml-0 cursor-pointer"
            data-test={bookmarked ? 'bookmark' : 'bookmark-border'}
          />
        </div>
        {renderEventLink(
          <h4 className="text-xs font-semibold leading-snug text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis m-0 text-right">
            {title}
          </h4>
        )}
        <ul className="flex flex-row flex-wrap m-0 p-0 list-none">
          {productPropertiesList.map(({ iconName: propIconName, text: propText }, index) => (
            <li key={`${propIconName}-${index.toString()}`} className="min-w-1/2 my-0.5 first:mt-0 last:mb-0">
              <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                <Icon name={propIconName} size="sm" color="gray" />
                <span>{propText}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
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

  return renderCard();
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
