// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Controller } from 'react-hook-form';
import GlobalStyle from '../../globalStyle';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import Label from '../label';
import {
  Input,
  DescriptionContainer,
} from './index.style';
import { Fieldset } from '../index.style';

type Props = {
  type?: string,
  label?: string,
  htmlElementName: string,
  id?: string,
  disabled?: boolean,
  description?: string,
  register: UseFormRegister<FieldValues>;
  required?: boolean | String,
  number?: number;
  control: FormData;
}

const FileInput = ({
  type = 'text',
  label = null,
  id = null,
  disabled = false,
  description = null,
  required = false,
  number = null,
  htmlElementName,
  register,
  control,
}: Props) => (
  <ThemeProvider theme={theme}>
    <Fieldset>
      <GlobalStyle />
      <Label htmlFor={id || `${type}-${htmlElementName.split(' ').join('')}`} label={label} number={number} required={required} />
      {description && (
      <DescriptionContainer size={10} color="gray" data-test="file-input-description">
        {description}
      </DescriptionContainer>
      )}

      <Controller
        name={htmlElementName}
        control={control}
        rules={{ required: required ? 'این فیلد اجباری است' : false }} // Add required rule
        render={({ fieldState }) => (
          <>
            <Input
              id={id || `${type}-${htmlElementName.split(' ').join('')}`}
              name={htmlElementName}
              type="file"
              {...register(htmlElementName, {
                disabled,
                required: required ? 'این فیلد الزامی است' : false,
              })}
            />
            <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
          </>
        )}
      />
    </Fieldset>
  </ThemeProvider>
);
export default FileInput;
