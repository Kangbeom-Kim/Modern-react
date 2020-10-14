import React, { Component } from 'react';

class HelloClass extends Component {
    static defaultProps = {
        Content: '콘텐츠 없음'
    }
    render() {
        const { ColorOfFont, Content, isSpecial} = this.props;
        return(
            <div style={{ color: ColorOfFont }}> 
                {isSpecial && <b>*</b> }
                안녕하세요, {Content}!
            </div>
        );
    }
}

// Hello.defaultProps = {
//     Content: '콘텐츠 없음'
// } 클래스 내부에 static 으로 선언하는것도 가능하지만 이 방법도 가능

export default HelloClass;