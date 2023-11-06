import React from 'react';
import { Controller } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import ErrorMsg from '../errorMsg';
import Icon from '../../icon';
import Button from '../../button';
import Label from '../label';
import { Input } from '../text-input/index.style';
import Display from '../../display';
import { Fieldset } from '../index.style';

type Props = {
  htmlElementName: String,
  label: String,
  imageUrl: string,
  control: FormData;
  classNames?: String,
  fetchData: () => {},
  loading?: boolean,
  number?: number,
};

function Captcha(props: Props) {
  const {
    htmlElementName,
    label,
    classNames,
    imageUrl,
    control,
    fetchData,
    loading,
    number,
  } = props;

  const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g]; const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

  const fixNumbers = (str) => {
    let result = str;
    if (typeof str === 'string') {
      for (let i = 0; i < 10; i++) {
        result = result.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return result;
  };

  return (
    <ThemeProvider theme={theme}>
      <Fieldset>
        <div className={classNames}>
          <Controller
            name={htmlElementName}
            control={control}
            rules={{
              required: 'این فیلد اجباری است',
              pattern: {
                value: /^[۰۱۲۳۴۵۶۷۸۹0-9]{4}$/,
                message: 'لطفا فقط عدد وارد کنید.',
              },
            }}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState }) => {
              return (
                <Display display="block">
                  <Label htmlFor={htmlElementName} label={label} number={number} required />
                  <Display display="flex">
                    <Display display="flex" width="100%">
                      <Input
                        id={`${'text'}-${htmlElementName.split(' ').join('')}`}
                        name={htmlElementName}
                        type="text"
                        rtl={false}
                        value={value}
                        onChange={(e) => {
                          onChange(fixNumbers(e.target.value));
                        }}
                        className="captcha-input"
                      />
                      <img
                        width="auto"
                        height="40px"
                        src={imageUrl}
                        alt="captcha-img"
                        loading="lazy"
                        data-test="captcha-img"
                      />
                    </Display>
                    <Button type="button" size="sm" styleType="tertiary" onClick={fetchData} disabled={loading}>
                      <Icon name={loading ? 'loading' : 'refresh'} />
                    </Button>
                  </Display>
                  <ErrorMsg errorMessage={fieldState && fieldState.error?.message} />
                </Display>
              );
            }}
          />
        </div>
      </Fieldset>
    </ThemeProvider>
  );
}

Captcha.defaultProps = {
  classNames: '',
  loading: false,
  number: null,
};

export default Captcha;
