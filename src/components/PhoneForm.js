import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value    // onChange 이벤트가 발생하면, e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있다.
        })
    }

    handleSubit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault(); //  이벤트가 해야 하는 작업을 방지시킨다는 의미
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}    // onChange 는 input 의 텍스트 값이 바뀔때마다 발생하는 이벤트
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;