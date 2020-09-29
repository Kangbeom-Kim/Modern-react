import React from 'react';

export default function Hello({Content, ColorOfFont}) {
    return <div style={{ color: ColorOfFont }}> 안녕하세요, {Content}!</div>
}

Hello.defaultProps = {
    Content: '콘텐츠 없음'
}