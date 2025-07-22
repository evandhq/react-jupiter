import React from 'react';

function TabPanel({ children, label, tabKey }) {
  return (
    <div className={`${label}-${tabKey}`} data-test="tabs-panel">
      {children}
    </div>
  );
}

export default TabPanel;
