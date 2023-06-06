import './Menu.css';
import { arrButtons } from './arrButtons';

function Menu ({selectCountry}) {
    return (
        <div className="Menu">
            <div className='Buttons'>
                {arrButtons.map((el,id) => {
                    return <button onClick={
                        () => {selectCountry(el)}
                    } className='Button' key={id}>{el}</button>
                })}
            </div>
        </div>
    )
}

export default Menu;