import React, {useState} from 'react';
import LightMode from '../component/LightMode';
import Darkmode from '../component/Darkmode';


function Loginmode() {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled((prev) => !prev);
    };

    return (
        <>
            <button onClick={toggle}>버튼</button>
            {isToggled ? (
                <LightMode />
            ) : (
                <Darkmode />
            )}
            <LightMode />
        </>
        
    )
}

export default Loginmode;