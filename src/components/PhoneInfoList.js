import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }
    render() {
        const { data, onRemove } = this.props;
        const list = data.map(  // data 라는 배열을 가져와서 map 을 통하여 JSX 로 변환
            info => (
            <PhoneInfo 
                key={info.id}   // key 는 리액트에서 배열을 렌더링을 할 때 꼭 필요한 값
                info={info}
                onRemove={onRemove}
            />)
        );
        return(
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;