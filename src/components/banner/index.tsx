import style from './banner.module.css';

const Banner = ({linkImage}) => {
    return (
        <div className={style.banner} 
            style={{
                backgroundImage: `url('${linkImage}')`
            }}
        >

        </div>
    );
}

export default Banner;