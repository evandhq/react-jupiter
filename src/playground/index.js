import React from 'react';
import styled from 'styled-components';
import '../playground.css';
import { Button } from '../components/button';
import { Text } from '../components/typography/text';
import { Heading } from '../components/typography/heading';
import { Link } from '../components/typography/link';
import { Avatar } from '../components/avatar';
import { Accordion } from '../components/accordion';
import { Table } from '../components/table';
import { TitledAvatar } from '../components/titled-avatar';
import { ShowDate } from '../components/show-date';
import { ProductMenu } from '../components/product-menu';
import { ProductProperties } from '../components/product-properties';
import { ProgressBar } from '../components/progress-bar';
import { NumericSummeryReport } from '../components/numeric-summery-report';
import '../components/icon/assets/styles.css';


const PlaygroundContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: white;
`;

const SectionTitle = styled(Heading)`
  margin-bottom: 1.5rem;
  color: #333;
`;

const Playground = () => {
  return (
    <PlaygroundContainer>
      <Section>
        <SectionTitle level={2}>Typography</SectionTitle>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Text>Regular text</Text>
        <Text color="blue">Blue text</Text>
        <Text color="red">Red text</Text>
        <Link href="https://example.com">Example Link</Link>
      </Section>

      <Section>
        <SectionTitle level={2}>Buttons</SectionTitle>
        <Button>Default Button</Button>
        <Button styleType="secondary">Secondary Button</Button>
        <Button styleType="tertiary">Tertiary Button</Button>
      </Section>

      <Section>
        <SectionTitle level={2}>Avatars</SectionTitle>
        <Avatar src="https://via.placeholder.com/150" size="sm" />
        <Avatar src="https://via.placeholder.com/150" size="md" />
        <Avatar src="https://via.placeholder.com/150" size="lg" />
      </Section>

      <Section>
        <SectionTitle level={2}>Titled Avatar</SectionTitle>
        <TitledAvatar
          title="John Doe"
          avatar="https://via.placeholder.com/40"
          avatarSize={40}
          titleSize={14}
        />
      </Section>

      <Section>
        <SectionTitle level={2}>Progress Bar</SectionTitle>
        <ProgressBar progress={50} color="#2196F3" height={8} />
      </Section>

      <Section>
        <SectionTitle level={2}>Numeric Summary Report</SectionTitle>
        <NumericSummeryReport
          title="Total Users"
          value={1234}
          textColor="#000000"
        />
      </Section>

      <Section>
        <SectionTitle level={2}>Product Menu</SectionTitle>
        <ProductMenu
          items={[
            { id: 1, label: 'Dashboard', icon: 'home' },
            { id: 2, label: 'Profile', icon: 'user' },
            { id: 3, label: 'Settings', icon: 'settings' },
          ]}
          onItemClick={(id) => console.log('Clicked:', id)}
        />
      </Section>

      <Section>
        <SectionTitle level={2}>Product Properties</SectionTitle>
        <ProductProperties
          properties={[
            { id: 1, label: 'Category', value: 'Electronics', icon: 'category' },
            { id: 2, label: 'Brand', value: 'Apple', icon: 'brand' },
            { id: 3, label: 'Model', value: 'iPhone 13', icon: 'model' },
          ]}
          isHorizontal={false}
          color="#000000"
          iconColor="#666666"
        />
      </Section>

      <Section>
        <SectionTitle level={2}>Show Date</SectionTitle>
        <ShowDate
          date={new Date()}
          format="YYYY-MM-DD"
          fontSize={16}
          color="#000000"
        />
      </Section>

      <Section>
        <SectionTitle level={2}>Table</SectionTitle>
        <Table
          columns={[
            { id: 'name', label: 'Name' },
            { id: 'age', label: 'Age' },
            { id: 'city', label: 'City' },
          ]}
          data={[
            { id: 1, name: 'John Doe', age: 30, city: 'New York' },
            { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
            { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
          ]}
        />
      </Section>
    </PlaygroundContainer>
  );
};

export default Playground; 