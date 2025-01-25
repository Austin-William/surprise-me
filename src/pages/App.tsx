import { useEffect, useState } from 'react';

import '../styles/App.scss';

function App() {
    const [count, setCount] = useState(0);
    const [displayCounter, setDisplayCounter] = useState(false);
    const [isYes, setIsYes] = useState(false);
    const [shortMessage, setShortMessage] = useState("");
    const [yesMessage, setYesMessage] = useState("");
    const [urlGif, setUrlGif] = useState("https://media.giphy.com/media/ZdHsPsHUdWr882Uu85/giphy.gif");

    const name = process.env.REACT_APP_NAME || "you";
    const creator = process.env.REACT_APP_CREATOR_NAME || "the creator";

    function handleClick(state: boolean) {
        if (state === false && isYes === false) {
            setCount(count + 1);
            handleDisplayGift();
            saveClick();
        } else {
            setDisplayCounter(true);
            setIsYes(true);
            setShortMessage("I love you !");
            saveYesPressed();
            setUrlGif("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGphYW5sOXBjdDN5eG1wdzBicWV2ZHJmZ2R6ODhna3FkbHRkODk0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yc2pHdAoxVOrJ2m5Ha/giphy.gif");
        }
    }

    function handleDisplayGift() {
        switch (isYes === false) {
            case count === 0:
                setShortMessage("I'm waiting for your answer ...");
                setYesMessage("Yes !!! Let's go !");
                setUrlGif("https://media.giphy.com/media/ZdHsPsHUdWr882Uu85/giphy.gif");
                break;
            case count === 1:
                setShortMessage("I'm still waiting ...");
                setYesMessage("Maybe a miss click ? ...");
                setUrlGif("https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif");
                break;
            case count === 2:
                setShortMessage("I'm still waiting again ...");
                setYesMessage("I'm sure you wanted to press yes ...");
                setUrlGif("https://media.giphy.com/media/SUA0a5MTWM9ZVjtvWz/giphy-downsized-large.gif");
                break;
            case count === 3:
                setShortMessage("Why are you waiting so long ? ...");
                setYesMessage("Ah");
                setUrlGif("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWFpM3I5aTg0d2YxeDc2eW1uczJrNHcyeWprZ2h3bjh5Y2lzYmd2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cPKWZB2aaB3rO/giphy.gif");
                break;
            case count === 4:
                setShortMessage("Maybe you should answer yes ...");
                setYesMessage("That's a little bit too much, don't you think ?");
                setUrlGif("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXRobzc3N285M3I3enU5cTdhYmF3dzQ3NTZ3M29kZnRuMXhmdHBpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9lfcoPvOIrSqoufkq1/giphy.gif");
                break;
            case count >= 20:
                setShortMessage("Ok I give up");
                setYesMessage("You deserve something that I don't want to think about ...");
                setUrlGif("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazRuOGxzdnhhb2JzN2ltNzFkMHB6eGJiZTRsMGJ1d2h2Nnk2a2VveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LKTTAzGboJGzC/giphy.gif");
                break;
            case count >= 10:
                setShortMessage("It's too long ...");
                setYesMessage("That's a lot of clicks");
                setUrlGif("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc25rMzQwcGJhc3BoOGhrajlrbmQzaGJtMnVkbHdlb3FjbTZyeTh2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vyTnNTrs3wqQ0UIvwE/giphy.gif");
                break;
            case count >= 5:
                setShortMessage("It's a little bit long ...");
                setYesMessage("Well ... That's a lot of clicks");
                setUrlGif("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTU5Mmx6NWJ2ejJvNHR3YWRtd3lxZW14OTRrdHRsNHJpZWF2NnMxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XNX9uw7fykn5e/giphy.gif");
                break;
            default:
                setUrlGif("https://media.giphy.com/media/ZdHsPsHUdWr882Uu85/giphy.gif");
                setShortMessage("Ah");
                setYesMessage("Ah");
                break;
        }
    }

    function getSavedClicks() {
        const clicks = localStorage.getItem("clicks");
        if (clicks) {
            setCount(parseInt(clicks));
            handleDisplayGift();
        }
    }

    function saveClick() {
        const clicks = localStorage.getItem("clicks");
        if (clicks) {
            localStorage.setItem("clicks", (parseInt(clicks) + 1).toString());
        } else {
            localStorage.setItem("clicks", "1");
        }
    }

    function saveYesPressed() {
        const yesPressed = localStorage.getItem("yesPressed");
        if (yesPressed) {
            localStorage.setItem("yesPressed", (parseInt(yesPressed) + 1).toString());
        } else {
            localStorage.setItem("yesPressed", "1");
        }
    }

    function getYesPressed() {
        const yesPressed = localStorage.getItem("yesPressed");
        if (yesPressed) {
            setIsYes(true);
            setDisplayCounter(true);
            setShortMessage("가보자고");
            setYesMessage("I love you !");
        }
    }

    function reset() {
        setCount(0);
        setDisplayCounter(false);
        setIsYes(false);
        setShortMessage("");
        setYesMessage("");
        setUrlGif("https://media.giphy.com/media/ZdHsPsHUdWr882Uu85/giphy.gif");
        localStorage.removeItem("clicks");
        localStorage.removeItem("yesPressed");
    }

    useEffect(() => {
        getSavedClicks();
        getYesPressed();
    }, [count, shortMessage, yesMessage]);

    return (
        <div className="app">
            {/* <header className='app-header'>
                <h1>
                    Hello {name} !
                </h1>
            </header> */}
            <section className='app-container'>
                <h1 className='app-container-title'>
                    ❤️{name}❤️
                </h1>
                <h1 className='app-container-title'>
                    Do yo want to be my Valentine ?
                </h1>
                <span className='app-container-message'>
                    {shortMessage}
                </span>
                <div className='app-container-images'>
                    <img className='app-container-images-gif' src={urlGif} alt="gif" />
                    {
                        isYes && (
                            <img className='app-container-images-gif' src="https://media.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif" alt="i_love_you" />
                        )
                    }
                </div>
                <div className='app-container-buttons'>
                    <button onClick={() => handleClick(true)}>Yes</button>
                    <button onClick={() => handleClick(false)}>No</button>
                </div>
                <div className='app-container-surprise'>
                    {
                        displayCounter && (
                            <>
                                <p>
                                    You pressed
                                    <span>
                                        {count}
                                    </span>
                                    times button "No"
                                </p>
                                <p>
                                    {yesMessage}
                                </p>
                            </>
                        )
                    }
                </div>
                <img className='app-container-image-background app-container-image-background-1' src="images/1.png" alt="heart" />
                <img className='app-container-image-background app-container-image-background-2' src="images/2.png" alt="heart" />
                <img className='app-container-image-background app-container-image-background-3' src="images/3.png" alt="heart" />
            </section>
            <footer className='app-footer'>
                <span>
                    © 2025
                </span>
                <h1>
                    Made with <span role='img' aria-label='heart'>❤️</span> by {creator}
                </h1>
                <button onClick={reset}>
                    If you want to reset ....
                </button>
            </footer>
        </div>
    );
}

export default App;
