import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import getIconFileName from './utils';
import { Text } from '../typography';
import theme from './theme';
import FileImgIcon from './fileImgIcon';
import {
  Wrapper, InfoWrapper, VerticalDivider,
} from './index.style';

const FileItem = ({
  type = 'zip',
  title = 'فایل دانلودی',
  description = '',
  price,
  fileSize = '',
  onClick = () => null,
}) => {
  const [isActive, setActivateValue] = useState(false);

  function startHover() {
    setActivateValue(true);
  }

  function endHover() {
    setActivateValue(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper
        data-test="file-item"
        isActive={isActive}
        onMouseEnter={startHover}
        onMouseLeave={endHover}
        onClick={onClick}
      >
        <FileImgIcon
          iconFileName={getIconFileName(type, !isActive)}
        />

        <InfoWrapper>
          <Text
            size={14}
            bold
            data-test="file-item-title"
          >
            { title }
          </Text>

          {description ? (
            <Text
              size={10}
              data-test="file-item-desc"
              bold
            >
              { description }
            </Text>
          ) : (
            <br />
          )}

          <div>
            {fileSize && (
              <>
                <Text
                  size={10}
                  data-test="file-item-size"
                >
                  { fileSize }
                </Text>
                <VerticalDivider />
              </>
            )}

            <Text
              size={10}
              data-test="file-item-price"
            >
              {price}
            </Text>
          </div>

        </InfoWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

export default FileItem;
