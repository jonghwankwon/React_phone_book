import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
    id = 2
    state = {
      information: [
      {
        id: 0,
        name: '백승대',
        phone: '010-0000-0001'
      },
      {
        id: 1,
        name: '이덕노',
        phone: '010-0000-0002'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
    console.log(data);
  }

  handleRomve = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ? { ...info, ...data} // 새 객체를 만들어서 기존의 값과 전달 받은 data를 덮어씀
        : info // 기존의 값을 그대로 유지
      )
    })
  }

  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
        data = {information}
        onRemove={this.handleRomve}
        onUpdate={this.handleUpdate}/>
      </div>
    );
  }
}

export default App;
