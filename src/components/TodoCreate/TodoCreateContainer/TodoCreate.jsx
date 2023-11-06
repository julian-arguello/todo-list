import { TodoCreateMobile } from './../TodoCreateMobile/TodoCreateMobile.jsx';
import { TodoCreateDesktop } from './../TodoCreateDesktop/TodoCreateDesktop.jsx';
import { getDesktopBreakpoint } from '../../../utilities/screenSizes';

import style from './todoCreate.module.css';

function TodoCreate() {

    return (

        <>
            <TodoCreateDesktop />
            <TodoCreateMobile />
        </>


        )
}

export { TodoCreate };