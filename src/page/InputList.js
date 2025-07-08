import React from 'react';
import InputTypeCom from '../component/InputTypeCom';
import ButtonCom from '../component/ButtonCom';


let itemList = [
    {
      label: '이름',
      type: 'text',
      placeholder: '이름을 입력하세요'
    },
    {
      label: '이메일',
      type: 'email',
      placeholder: '이메일을 입력하세요'
    },
    {
      label: '비밀번호',
      type: 'password',
      placeholder: '비밀번호를 입력하세요'
    },
    {
      label: '나이',
      type: 'number',
      placeholder: '나이를 입력하세요'
    }
  ];

function InputList() {
    return (
        <div>
            {itemList.map((item) => (
                <div className='flex flex-row items-center'>
                    <InputTypeCom
                        label={item.label}
                        type={item.type}
                        placeholder={item.placeholder}
                    />
                    <ButtonCom label={item.label} />
                </div>
            ))}
        </div>
    );
}

export default InputList;