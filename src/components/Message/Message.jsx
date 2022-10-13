import style from './Message.module.css';

export const Message = ({name, text}) => {
    return <div className={style.message}>
        <h4>From: {name}</h4>
        <p><span style={{fontWeight: "bold"}}>message: </span> {text}</p>
    </div>

}