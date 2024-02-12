"use client";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Page() {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "Really sure?",
            "Think again!",
            "Last chance!",
            "Surely not?",
            "You might regret this!",
            "Give it another thought!",
            "Are you absolutely certain?",
            "This could be a mistake!",
            "Have a heart!",
            "Don't be so cold!",
            "Change of heart?",
            "Wouldn't you reconsider?",
            "Is that your final answer?",
            "You're breaking my heart ;(",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen -mt-16">
            <h1 className="text-center">
                Will You Be My Valentine KSteve?
            </h1>
            {yesPressed ? (
                <>
                    {/* <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" /> */}
                    <h2 className="text-4xl font-bold my-4">WOOOOHOOO!!!</h2>
                    <img src="./2.png"  alt="Description"/>                    
                    <p>ps i love u ;)</p>
                </>
            ) : (
                <>
                    {/* <img className="w-50 h-auto" src="./6.jpg" /> */}
                    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
                    </div> */}
                    <img src="./8.jpg"  alt="Description"/>

                    <div className="mt-5">
                        <Button
                            className={`btn btn-primary bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
                            style={{ fontSize: yesButtonSize }}
                            onClick={() => setYesPressed(true)}
                        >
                            Yes
                        </Button>
                        <button
                            onClick={handleNoClick}
                            className="btn btn-danger bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {noCount === 0 ? "No" : getNoButtonText()}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}