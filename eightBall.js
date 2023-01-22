import React, {useState} from 'react';
import './eightBall.css'





const EightBall = ({ answers }) => {
    const genRandom = () => Math.floor(Math.random() * 20)
    const [idx, setIdx] = useState(genRandom())
    const [msg, setMsg] = useState('Think of a question')
    const [color, setColor] = useState('black')
    
    const setValues = () => {
        setIdx(genRandom())
        setMsg(answers[idx].msg)
        setColor(answers[idx].color)
    }

    return (
        <div>
            <div className='eightBall' style={{'backgroundColor':color}}>
                <h2 className='eightBallText'>{msg}</h2>
            </div>
            <button onClick={setValues}>Shake Ball</button>
        </div>
    )
}

export default EightBall