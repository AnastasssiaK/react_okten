import style from "../../App.module.css";

const User = ({user, setUserDetails,trigger}) => {
    const {id, name} = user;
    const click = () => {
        setUserDetails(user);
        trigger()
    }

    return (
        <div className={style.user}>
            {id}. {name}
            <button className={style.userMoreBtn} onClick={() => click()}>More details</button>
        </div>
    );
};

export {User};