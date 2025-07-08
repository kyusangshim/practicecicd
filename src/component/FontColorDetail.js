import React from 'react';

function FontColorDetail(props) {
    return (
        <div>
            <main>
                <h1 style={{color: props.color}}>{props.type} 프로젝트</h1>
            </main>
        </div>
    );
}
export default FontColorDetail;
