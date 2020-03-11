import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = { // defaultProps 를 통하여 info 의 기본값을 설정
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }
    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove에 id 널어서 호춣
        const {info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;