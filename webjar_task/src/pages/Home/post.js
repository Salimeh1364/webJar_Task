import style from '../Home/style/posts.module.css'
import imagee from '../../asset/img/work.png';
import Date from '../../asset/img/date.png';
import Comment from '../../asset/img/comment.png';
import Author from '../../asset/img/author.png';



export const BelogPost = ({
  title,
  body,
  author,
  date,
  comment,
}) => {
  const handleClick = () => {
    console.log("first");
  };

  return (
    <div onClick={handleClick} className={style.container}>
      <div className={style.imgBox}>
        <img src={imagee} />
      </div>
      <div className={style.contentBox}>

      <div className={style.textBody}>
        <p className={style.titleText}>{title}</p>
        <p className={style.bodyText}>{body}</p>
      </div>

        <div className={style.footerBox}>
          <div className={style.textButton}>
            <button  className={style.textButton}>بیشتر</button>
          </div>
             
            <div className={style.iconRow} style={{width:"7vw"}}><p>{author} </p> <img src={Author} alt = 'author'/></div>
            <div className={style.iconRow} style={{width:"4vw"}}><p>{comment}</p> <img src={Comment} alt='comment'/></div>
            <div className={style.iconRow} ><p>{date} </p> <img src={Date} alt='date'/></div>
            
        </div>

        </div>
    </div>
  );
};
