import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

function FocusTimer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const formatTime = () => {
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    const handleAddTime = () => {
        const AddMinutes = minutes + 5; // Add the minutes + 5 mins
        setMinutes(AddMinutes);  // updates the minutes state in React
    }

    const handleMinusTime = () => {
        const MinusMinutes = minutes - 5;
        setMinutes(MinusMinutes);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Title */}
            <div className="text-lg font-semibold mb-2">Focus Goal</div>

            {/* Description */}
            <div className="text-sm text-gray mb-4">Set your daily focus goal.</div>

            <div className="flex items-center mb-4">
                <Button onClick = {handleMinusTime} variant="outline" size="icon">
                    -
                </Button>

                <div className="text-4xl font-bold mx-4">{formatTime()}</div>

                <Button onClick= {handleAddTime} variant="outline" size="icon">
                    +
                </Button>
            </div>

            <div className="font-bold">MINS/DAY</div>

            {/* Focus Button */}
            <Button className="mt-6 w-full max-w-md border border-black text-black shadow-sm" variant = "ghost">
                FOCUS
            </Button>

        </div>
    );
}

export default FocusTimer;
