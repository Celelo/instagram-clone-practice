import style from '../imgSlide/ImgSlide.module.css';


export const ImgSlide = ({imgUrl}) => {
    return (
        <li className={style.slide_item}>
            <img src={imgUrl} alt="gatitos" className={style.slide_img}/>
        </li>
    )
}