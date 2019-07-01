/* function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
 
const element = <HelloMessage />;
 
ReactDOM.render(
    element,
    document.getElementById('example')
); */

/* function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}
 
const element = <HelloMessage name="Runoob"/>;
 
ReactDOM.render(
    element,
    document.getElementById('example')
); */
/* function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
    return (
    <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
    </div>
    );
}
 
ReactDOM.render(
     <App />,
    document.getElementById('example')
); */


/* class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
   
    componentDidMount(){
        this.timerID  = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmouna(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date : new Date()
        });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
   
  ReactDOM.render(
    <Clock />,
    document.getElementById('example')
  ); */


  /* function FormattedDate(props) {
    return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
  }
   
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
   
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
   
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
   
    tick() {
      this.setState({
        date: new Date()
      });
    }
   
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <FormattedDate date={this.state.date} />
        </div>
      );
    }
  }
   
  function App() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
   
  ReactDOM.render(<App />, document.getElementById('example')); */

  /* class HelloMessage extends React.Component{
      render(){
          return(
            <h1>Hello,{this.props.name}</h1>
          );
          
      }
  }
  HelloMessage.defaultProps = {
      name:'Runoob'
  };
  const element = <HelloMessage/>;
  ReactDOM.render(
      element,
      document.getElementById('example')
  ); */

  /* class WebSite extends React.Component{
      constructor(){
          super();

          this.state = {
              name : "百度",
              site : "http://www.baidu.com"
          }
      }
      render(){
          return(
              <div>
                  <Name name = {this.state.name}/>
                  <Link site = {this.state.site}/>
              </div>
          );
      }
  }

  class Name extends React.Component{
      render(){
          return(
              <h1>{this.props.name}</h1>
          );
      }
  }

  class Link extends React.Component{
      render() {
          return (
              <a href = {this.props.site}>
                {this.props.site}
              </a>
          );
      }
  }

  ReactDOM.render(
      <WebSite />,
      document.getElementById('example')
  ); */

  /* 向事件处理程序传递参数
    通常我们会为事件处理程序传递额外的参数。例如，若是 id 是你要删除那一行的 id */

/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */

/* const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('example')
); */

/* React 组件 API
设置状态：setState
替换状态：replaceState
设置属性：setProps
替换属性：replaceProps
强制更新：forceUpdate
获取DOM节点：findDOMNode
判断组件挂载状态：isMounted */

/* class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {clickCount: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(function(state) {
        return {clickCount: state.clickCount + 1};
      });
    }
    render () {
        
      return (
          <div>
            <button onClick={this.handleClick}>点我！</button>
            <h2>点击次数为: {this.state.clickCount}</h2>
          </div>
        
        );
    }
  }
  ReactDOM.render(
    <Counter />,
    document.getElementById('example')
  ); */

  class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 0};
        this.setNewNumber = this.setNewNumber.bind(this);
    }
    
    setNewNumber() {
      this.setState({data: this.state.data + 1})
    }
    render() {
        return (
           <div>
              <button onClick = {this.setNewNumber}>INCREMENT</button>
              <Content myNumber = {this.state.data}></Content>
           </div>
        );
      }
  }
   
   
  class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
         console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
           console.log('Component WILL UNMOUNT!')
    }
   
      render() {
        return (
          <div>
            <h3>{this.props.myNumber}</h3>
          </div>
        );
      }
  }
  ReactDOM.render(
     <div>
        <Button />
     </div>,
    document.getElementById('example')
  );