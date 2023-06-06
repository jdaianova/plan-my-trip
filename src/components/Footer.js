import './Footer.css';
import bus from '../img/bus.png';
import plain from '../img/plain.png';
import tg from '../img/tg.png';
import fb from '../img/fb.png';
import inst from '../img/inst.png';

function Footer() {
    return (
        <>
            <div className="Footer">
                <div className='Footer-container'>
                    <img src={plain} alt='plain'></img>
                    <div className='Social-media'>
                        <a href='#!'>
                            <img src={tg} alt='telegram'></img>
                        </a>
                        <a href='#!'>
                            <img src={fb} alt='telegram'></img>
                        </a>
                        <a href='#!'>
                            <img src={inst} alt='telegram'></img>
                        </a>
                    </div>
                    <img src={bus} alt='bus'></img>
                </div>
            </div>
        </>
    )
}

export default Footer;