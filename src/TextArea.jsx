import React, { useState } from 'react';

function CollapsibleTextarea() {
  const [collapsed, setCollapsed] = useState(true);
  const [content, setContent] = useState('');

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <button onClick={toggleCollapse}>
        {collapsed ? 'Expand' : 'Collapse'}
      </button>
      {!collapsed && (
        <textarea
          value={content}
          onChange={handleContentChange}
          rows={5}
          cols={30}
        />
      )}
    </div>
  );
}

export default CollapsibleTextarea;
