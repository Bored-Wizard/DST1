import React from 'react';
import './styles.css';
import { updateState } from "../../redux/component1/actions";
import { useSelector, useDispatch} from 'react-redux';

const GameL1 = () => {

    const compState = useSelector(state => state.component1reducer);
    const dispatch = useDispatch();
    const updateReduxState = (object) => {
        dispatch(updateState({...object}))
    }
    return (
        <div className={`GameL1 ${compState.game1position}`}>
            <div className="btn" onClick={() => {updateReduxState({game1position: "left-full opacity-0"})}}>
                <span className="pointer-events-none">L1 Close</span>
            </div>
        </div>
    )
}

export default GameL1
