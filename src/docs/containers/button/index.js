import React from 'react';
import styled from 'styled-components';

import Components, { Button, Typography } from '../../../components';

const {
  Heading, Text, Paragraph, Title, Link,
} = Typography;

const NewTitle = styled(Heading)`
  color: red;
`;

const ButtonPage = () => (
  <>
    <div>
      <div>Button</div>
      <Components.Button1 displayText="پرداخت" />
      <Button props="props value" borderRadius={3} rounded />
      <NewTitle level={1}>تست جدید هدینگ</NewTitle>
      <Heading level={1}>سلام</Heading>
      <Heading level={2}>سلام</Heading>
      <Heading level={3}>سلام</Heading>
      <Heading level={4}>سلام</Heading>
      <Heading level={5}>سلام</Heading>
      <Text size={16} strong>تکست ساده</Text>
      <div />
      <Text emphasized color="white">تکست ساده</Text>
      <div />
      <Text color="red" hover underline>تکست ساده</Text>
      <div />
      <Text color="green">تکست ساده</Text>
      <div />
      <Text color="blue">تکست ساده</Text>
      <div />
      <Text underline>تکست ساده</Text>
      <div />
      <Text marked>آنجایی</Text>
      <div />
      <Text lineThrough underline>تکست میکس</Text>
      <div />
      <Text label>آنجایی</Text>
      <div />
      <Text>تکست ساده</Text>
      <div />
      <Text strong emphasized>تکست ساده</Text>
      <div />
      <Text>تکست ساده</Text>
      <div />
      <Link to="/">تکست ساده</Link>
      <div />
      <Link to="http://yahoo.com" external>تکست ساده لینک خارجی</Link>
      <div />
      <Text>تکست ساده</Text>
      <div />
      <Text>تکست ساده</Text>
      <div />
      <Text>تکست ساده</Text>
      <div />
      <Text>تکست ساده</Text>
      <div />
      <Text>تکست ساده</Text>
      <div />
      <Text>تکست ساده</Text>
      <div />
      <Text>تکست ساده</Text>
      <div />
      <Text subScript>نویسنده</Text>
      <Title size="large">عنوان بزرگ</Title>
      <Title>عنوان بزرگ</Title>
      <Title size="small">عنوان کوچک</Title>
    </div>
    <Paragraph>
      طراحان معمولاً برای طراحی، ابتدا از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفاً به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از
      <Text marked>آنجایی</Text>
       که طراحان عموماً
      <Text subScript>نویسنده</Text>
        متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
    </Paragraph>
    <Paragraph size={24}>
      طراحان معمولاً برای طراحی، ابتدا از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفاً به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از
      <Text supScript> نویسنده </Text>
      که طراحان عموماً نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
    </Paragraph>
    <Paragraph>
      طراحان معمولاً برای طراحی، ابتدا از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفاً به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموماً نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
    </Paragraph>
    <p style={{ border: '1px solid blue', margin: 0 }}>
      طراحان معمولاً برای طراحی، ابتدا از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفاً به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان
      <Text subScript> نویسنده </Text>
      موماً نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
    </p>
    <Paragraph>
      طراحان معمولاً برای طراحی، ابتدا از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفاً به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموماً نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
    </Paragraph>
  </>
);

export default ButtonPage;
