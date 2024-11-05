import style from '../slideInfinite/SlideInfinite.module.css';
import style2 from '../slideInfinite/Test2.module.css';
import { ImgSlide } from '../imgSlide/ImgSlide.jsx'
import gatito1 from '../../assets/gatito1.jpg'
import gatito2 from '../../assets/gatito2.jpg'
import gatito3 from '../../assets/gatito3.jpg'
import gatito4 from '../../assets/gatito4.jpg'
import gatito5 from '../../assets/gatito5.jpg'
import gatito6 from '../../assets/gatito6.jpg'

export const SlideInfinite = () => {
    return (
        <div className={`${style.container} `}>
            <ul className={`${style.list} `}>
                <ImgSlide imgUrl={gatito1} />
                <ImgSlide imgUrl={gatito2} />
                <ImgSlide imgUrl={gatito3} />
                <ImgSlide imgUrl={gatito4} />
                <ImgSlide imgUrl={gatito5} />
                <ImgSlide imgUrl={gatito6} />
            </ul>

            <ul className={`${style.list} `}>
                <ImgSlide imgUrl={gatito4} />
                <ImgSlide imgUrl={gatito5} />
                <ImgSlide imgUrl={gatito6} />
            </ul>
        </div>
    )
}
