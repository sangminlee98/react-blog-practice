/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파주 강아지 카페']);
  let [따봉,따봉변경] = useState(0);
  let [modal,modal변경] = useState(false);
  let [누른제목,누른제목변경] = useState(0);
  let [입력값,입력값변경] = useState('');
  
    return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {
        글제목.map(function(a,i){
          return(
            <div className="list" key={i}>
            <h3 onClick={()=>{누른제목변경(i)}} >{a} <span onClick={ () => {따봉변경(따봉+1)} }>👍</span> {따봉}</h3>
            <p>5월 25일 발행</p>
            <hr/>
      </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e) => {입력값변경(e.target.value)} }/>
        <button onClick={ () => {
          var newArray = [...글제목];
          newArray.unshift(입력값);
          글제목변경(newArray);
        }} >저장</button>
      </div>

      <button onClick={ () => { modal변경(!modal) }  }> 열고닫기 </button>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}/>
        : null 
      }
    </div>
  );
}

//신문법 component 만드는 법
function Modal(props) {
  return(
    <div className="modal">
      <h4>제목 : {props.글제목[props.누른제목]}</h4>
      <p>날짜</p>
      <p>세부내용</p>
    </div>
  )
}

//옛날문법 component 만드는 법
class Profile extends React.Component {
  constructor(){
    super()
    this.state = { name1 : 'kim', age : 12}
  }
  changeName() {
    this.setState( { name1 : 'Lee'});
  }
  render(){
    return(
      <>
        <div>안녕 나는 {this.state.name1}이고 {this.state.age}살이야</div>
        <button onClick={ ()=> {this.setState({name1 : 'Park'})} } >변경1</button>
        <button onClick={this.changeName.bind(this)} >변경2</button>  {/*changeName함수를 ArrowFunction으로 만들면 bind(this)안해도됨*/}
      </>
    )
  }
}


export default App;
