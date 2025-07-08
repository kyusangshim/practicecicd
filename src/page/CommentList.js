import React from 'react';
import Comment from './Comment';
import InputCom from '../component/InputCom';

const comments = [
    {author: '홍길동', content: '안녕하세요.'},
    {author: '이영희', content: '반가워요.'},
    {author: '김철수', content: '안녕하세요.'},
    {author: '박영희', content: '반가워요.'},
    {author: '최영희', content: '반가워요.'},
    {author: '이영희', content: '반가워요.'},
    {author: '김철수', content: '안녕하세요.'},
    {author: '박영희', content: '반가워요.'},
]

function CommentList() {
    return (
        <div>
            {comments.map((comment, index) => (
                <>
                <Comment key={index} author={comment.author} content={comment.content} />
                <InputCom />
                </>
                
            ))}
            
        </div>
    )
}

export default CommentList;