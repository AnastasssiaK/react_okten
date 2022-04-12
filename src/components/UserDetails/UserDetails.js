import style from "../../App.module.css";

const UserDetails = ({userDetails, getUserId}) => {
    const {id, username, email, address:{street, suite, city, zipcode}} = userDetails;

    return (
        <div className={style.users_details}>
            <h4>{id}</h4>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <ul>
                <p>Address:</p>
                <li>Street: {street}</li>
                <li>Suite: {suite}</li>
                <li>City: {city}</li>
                <li>Zipcode: {zipcode}</li>
            </ul>
            <button className={style.postMoreBtn} onClick={()=> getUserId(id)}>Get Posts</button>
        </div>
    );
};

export  {UserDetails};

// "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"