import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import subwayMap from './subwayMap.png';
function Main() {
  const navigate = useNavigate();
  let sideOpen = false;
  return (
    <div className="Main">
      <a>=</a>
      <ul className="SebuList">
        <li>설정</li>
        <li>길찾기</li>
      </ul>
      <div className="Search">
        <span className="Side">=</span>
        <textarea
          className="Input"
          placeholder="이곳에 이름을 입력하세요"
        ></textarea>
        <hr />
      </div>
      <div className="Image">
        <img src={subwayMap} useMap="#subwayMap" alt="Subway Map" />
      </div>
      <button onClick={() => navigate('/side')}>Go to Side Page</button>
    </div>
  );
}

export default Main;
