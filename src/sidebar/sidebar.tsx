import React from "react";
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h3>Sidebar Content</h3>
      <p>This is the content inside the sidebar.</p>
    </div>
  );
};

export default Sidebar;
