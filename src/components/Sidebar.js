import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li onClick={() => navigate('/Main')}>goto main page</li>
      </ul>
    </div>
  );
}

export default Sidebar;
