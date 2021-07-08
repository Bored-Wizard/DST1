import React from 'react';
import './styles.css';
import { updateState } from "../../redux/component1/actions";
import { useSelector, useDispatch} from 'react-redux';
import GameL1 from '../GameL1';
import GameL2 from '../GameL2';


const Home = () => {

    const compState = useSelector(state => state.component1reducer);
    const dispatch = useDispatch();
    const updateReduxState = (object) => {
        dispatch(updateState({...object}))
    }

    return (
        <div className="Home">
            <div className="btn m-3" onClick={() => {updateReduxState({game1position: "left-0 opacity-100"})}}>
                <span className="pointer-events-none">GameL1</span>
            </div>
            <div className="btn m-3" onClick={() => {updateReduxState({game2position: "left-0 opacity-100"})}}>
                <span className="pointer-events-none">GameL2</span>
            </div>
            <GameL1 />
            <GameL2 />
        </div>
    )
}

export default Home
