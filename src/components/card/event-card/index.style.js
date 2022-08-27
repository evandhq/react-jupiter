import styled from 'styled-components';
import CardTemplate from '../card-template';
import { Heading } from '../../typography';
import ProductProperties from '../../product-properties';
import Icon from '../../icon';


/* Common event card styles */

export const Link = styled.a`
  text-decoration: none;
`;

export const DateBookmarkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const DateLabelContainer = styled.div`
  display: inline-block;
  & > * {
    vertical-align:middle;
  }
`;

export const BookmarkIcon = styled(Icon)`
  margin-left: 0;
  &:hover {
    cursor: pointer;
  }
`;


/* Vertical event card styles */
export const VerticalCardContainer = styled(CardTemplate)`
  background: white;
  a {
    text-decoration: none;
  }
`;

export const VerticalCover = styled.img`
  width: 100%;
  min-width: 270px;
  height: auto;
  min-height: 150px;
`;

export const VerticalContentContainer = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 16px 16px;
  min-height: 180px;
  max-height: 200px;
  direction: rtl;
  text-align: right;
`;

export const VerticalTitle = styled(Heading)`
  margin: 0;
  overflow: hidden;
  height: 60px;
`;

export const VerticalPlacePrice = styled(ProductProperties)`
  margin: 4px 0;
`;


/* Horizontal event card styles */

export const HorizontalCardContainer = styled(VerticalCardContainer)`
  height: 116px;
`;

export const HorizontalCover = styled.img`
  width: 206px;
  min-width: 206px;
  height: auto;
`;

export const HorizontalMobileCover = styled.img`
  width: 146px;
  min-width: 146px;
  height: 100%;
`;

export const HorizontalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  flex: 1;
  min-width: 250px;
`;

export const HorizontalMobileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  flex: 1;
  min-width: 0px;
`;

export const HorizontalTitle = styled(Heading)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HorizontalPlacePrice = styled(ProductProperties)``;

export const PartnershipBox = styled.div`
  background: #FFC72724;
  border-radius: 5px;
  margin-left: 5px;
  color: #FFD324;
  display: inline-flex;
  align-items: center;
  min-width: 60px;
  height: 25px;
  justify-content: center;
`;
