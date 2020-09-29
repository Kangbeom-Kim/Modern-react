import React from 'react';

export default function Hello({Content, ColorOfFont, isSpecial }) {
    return (
        <div style={{ color: ColorOfFont }}> 
            {isSpecial && <b>*</b> }
            안녕하세요, {Content}!
        </div>
    );
}

Hello.defaultProps = {
    Content: '콘텐츠 없음'
}