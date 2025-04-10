import React from "react";

export const Practice = () => {
    {/*
        Practice Tasks:
Dynamic Greetings:

Create a React component that takes a user's name as a prop and displays a greeting dynamically.
Example: "Good Morning, John!" (Use a function to determine the time of the day).
Show/Hide Content Button:

Create a button that toggles visibility for a paragraph.
Color Switcher:

Create a component where clicking a button changes the background color dynamically.
Counter App:

Create a simple counter with increment and decrement buttons.
Login Status Display:

Use a boolean state to display either "Welcome, User!" or "Please Log In".
      */  }



    {/* Dynamic Greetings:

Create a React component that takes a user's name as a prop and displays a greeting dynamically.
Example: "Good Morning, John!" (Use a function to determine the time of the day).
Show/Hide Content Button:*/}

    const getTimeofday = () => {
        const hour = new Date().getHours()

        if (hour < 12) {
            return "Morning";
        }
        else if (hour < 18) {
            return "afternoon"
        }
        else {
            return "evening";
        }
    }

    const Greeting = (props) => {
        const time = getTimeofday();
        const greet = `Good ${time}, ${props.name}!`;;

        return (
            <>
                <h1>{greet}</h1>

            </>
        );
    }


    const rootElement = document.getElementById('root');
    ReactDOM.render(<Greeting name="John" />, rootElement);

}