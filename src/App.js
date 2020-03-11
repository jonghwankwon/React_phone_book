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

  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
        data = {information}
        onRemove={this.handleRomve}/>
      </div>
    );
  }
}

export default App;
