import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = { // defaultProps 를 통하여 info 의 기본값을 설정
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        },
    }

    state = {
        // 수정 버튼을 눌렀을 때 editing 값을 true 로 설정
        // 이 값이 true일 때에는, 기존에 텍스트 형태로 보여주던 값들을
        // input 형태로 보여줌
        editing: false,
        // input 의 값은 유동적이므로 input 값을 담기 위해서 각 필드를 위한 값 설정
        name: '',
        phone: '',
    }

    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove에 id 널어서 호출
        const {info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    // input 에서 onChage 이벤트가 발생 될 때 호출되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // editing 값이 바뀔 때 처리 할 로직
        // 수정을 눌렀을 땐, 기존의 값이 input에 나타남
        // 수정을 적용할 땐, input의 값들을 부모한테 전달

        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            // editing 값이 false -> true 로 전환 될 때, info 의 값을 state 에 넣어준다.
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if ( prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 로 전환 될 때
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }
    
    // 렌더링 최적화
    shouldComponentUpdate( nextProps, nextState ) {
        // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
        if(!this.state.editing
            && !nextProps.editing
            && nextProps.info === this.props.info) {
                return false;
            }
            // 나머지 경우엔 리렌더링
            return true;
    }

    render() {
        console.log('render PhoneInfo ' + this.props.info.id); // 최적화

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if (editing) { //수정모드
            return (
            <div style = {style}>
                <div>
                    <input
                        value={this.state.name}
                        name="name"
                        placeholder="이름"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                        value={this.state.phone}
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}
                    />
                </div>
            </div>
            );
        }

        //일반모드
        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}
export default PhoneInfo;