const fs = require('fs');
const path = require('path');

function updateStoryFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove withInfo import and decorator
  content = content.replace(/import { withInfo } from '@storybook\/addon-info';/g, '');
  content = content.replace(/decorators: \[withInfo\],/g, '');
  
  // Update storiesOf to CSF format
  content = content.replace(/storiesOf\(['"]([^'"]+)['"], module\)/g, (match, title) => {
    return `export default {
  title: '${title}',
  component: ${title.split('/').pop()},
  argTypes: {
    // Add your argTypes here
  }
};`;
  });
  
  fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.stories.js')) {
      updateStoryFile(filePath);
    }
  });
}

const srcDir = path.join(__dirname, 'src');
processDirectory(srcDir); 