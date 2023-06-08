import './Main.css';
import { useState } from 'react';

function Main({ pics }) {
    const [showText, setShowText] = useState(true);
    return (
        <div className="Main">
            {pics.map((el) => {
                const { id, pic, title, country, description } = el;
                return (
                    <div className='Card' key={id}>
                        <div className='Card-title'>
                            <h2>{country}</h2>
                            <h3>{title}</h3>
                        </div>
                        <div className='Card-pic'>
                            <img src={pic}></img>
                        </div>

                        <div className='Card-description'>
                            {el.showMore ? description : description.substring(0, 65)}
                            <button
                                className='Button-show-more'
                                onClick={() => {
                                    el.showMore = !el.showMore;
                                    setShowText(!showText);
                                }}>{el.showMore ? '... show less' : '... show more'}</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Main;