import React from 'react';
import Button from '../button';
import { ActionCellContainer, ActionsContainer } from './index.style';

type Props = {
  callToActions: [{
    props?: {},
    text: string,
  }]
};

function ActionCell({ callToActions }: Props) {
  return (
    <td>
      <ActionCellContainer>
        <Button
          {...callToActions[0].props}
          htmlType="button"
          mainColor="blue"
          styleType="secondary"
          size="sm"
          wide
        >
          {callToActions[0].text}
        </Button>

        {callToActions.length > 1 && (
          <>
            <ActionsContainer>
              {callToActions.map((item, index) => {
                if (index === 0) {
                  return null;
                }
                return (
                  <Button
                    key={item.text}
                    {...item.props}
                    htmlType="button"
                    mainColor="blue"
                    styleType="tertiary"
                    size="sm"
                    wide
                  >
                    {item.text}
                  </Button>
                );
              })}
            </ActionsContainer>

          </>
        )}
      </ActionCellContainer>
    </td>
  );
}

export default ActionCell;
