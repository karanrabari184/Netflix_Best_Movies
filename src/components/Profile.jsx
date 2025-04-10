import Profile_card from "./Profile_card";
const Profile = () => {
    return (
        <>
            <Profile_card
                name="Alice"
                age={10}
                greeting={
                    <div>
                        <strong>Hi Alice How Are You!</strong>
                    </div>
                }
            >
                <button>Contact</button>

            </Profile_card>


            <Profile_card
                name="BOB"
                age={20}
                greeting={
                    <div>
                        <strong>Hi BOB How Are You!</strong>
                    </div>
                }
            >
                <button>Contact</button>

            </Profile_card>
        </>
    );
}

export default Profile;