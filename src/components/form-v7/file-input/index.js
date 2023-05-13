// @flow

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import Label from '../label';
import {
  Input,
  LabelContainer,
  DescriptionContainer,
  PasswordIcon,
} from './index.style';

type Props = {
  label?: string,
  htmlElementName: string,
  id?: string,
  disabled?: boolean,
  description?: string,
  errorMessage?: string,
  register?: any,
  required?: boolean | String,
  number?: number;
}

const FileInput = (props: Props) => {
  const {
    type,
    label,
    htmlElementName,
    id,
    disabled,
    description,
    errorMessage,
    register,
    required,
    number,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Label htmlFor={id || `${type}-${htmlElementName.split(' ').join('')}`} label={label} number={number} required={required} />
      {description && (
        <DescriptionContainer size={10} color="gray" data-test="file-input-description">
          {description}
        </DescriptionContainer>
      )}
      <Input
        id={id || `${type}-${htmlElementName.split(' ').join('')}`}
        name={htmlElementName}
        type={'file'}
        {...register(htmlElementName, {
          disabled,
          required: !!required ? 'این فیلد الزامی است' : false
        })}
      />
      <ErrorMsg errorMessage={errorMessage} />
    </ThemeProvider>
  );
};

FileInput.defaultProps = {
  type: 'text',
  label: null,
  id: null,
  placeholder: null,
  disabled: false,
  description: null,
  errorMessage: '',
  register: null,
  required: false,
  number: null,
};

export default FileInput;
