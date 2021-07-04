/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파주 강아지 카페']);
  let [따봉,따봉변경] = useState(0);
  let [modal,modal변경] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{글제목[0]} <span onClick={ () => {따봉변경(따봉+1)} }>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>5월 25일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>7월 4일 발행</p>
        <hr/>
      </div>
      <button onClick={ () => { modal변경(!modal) }  }> 버튼 </button>
      {
        modal === true
        ? <Modal/>
        : null 
      }
    </div>
  );
}

function Modal() {
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>세부내용</p>
    </div>
  )
}


export default App;
