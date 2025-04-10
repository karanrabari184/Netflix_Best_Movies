const Profile_card = (props) => {

    return (
        <>
            <li>
                <h2>Name : {props.name}</h2>
                <h2>Age : {props.age}</h2>
                <h2> {props.greeting}</h2>
                <div>{props.children}</div>
            </li>

        </>
    )
}
export default Profile_card;