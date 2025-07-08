import React, {useState} from 'react';
import InputArrayCom from '../component/InputArrayCom';
import ButtonArrayCom from '../component/ButtonArrayCom';
import UIArrayCom from '../component/UIArrayCom';

function ReactArray() {
    const [itemlist, setItemlist] = useState([]);
    const [input, setInput] = useState('');

    const AddItem = () => {
        setItemlist([...itemlist, input]);
        setInput('');
        console.log(itemlist);
        // document.getElementById("itemlist").innerHTML += `<li>${input}</li>`
    }

    const DeleteItem = () => {
        setItemlist(itemlist.slice(0, -1))
        console.log(itemlist)
        // 뒤에서 부터 삭제
        // const itemlist_item = document.getElementById("itemlist");
        // itemlist_item.removeChild(itemlist_item.lastChild);
    }

    return (
        <>
        <div className='m-4'>
            <InputArrayCom input={input} setInput={setInput} />
            <ButtonArrayCom function={AddItem} name={"추가"} color={"blue"} />
            <ButtonArrayCom function={DeleteItem} name={"삭제"} color={"red"} />
        </div>
        <UIArrayCom itemlist={itemlist}/>
        </>
    )
}

export default ReactArray;