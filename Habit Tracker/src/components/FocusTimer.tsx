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
        if (AddMinutes <= 120) { // Is the result is less than 120
            setMinutes(AddMinutes); // If it is update the state
        }
        // Do nothing once it hits the limit (else)
    }

    const handleMinusTime = () => {
        const MinusMinutes = minutes - 5; // Calculate potential new value
        if (MinusMinutes >= 5) { // Check if subtracting 5 stays at or above the 5-minute minimum
            setMinutes(MinusMinutes); // If it is subtract by 5 and update the state
        }
        
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Title */}
            <div className="text-lg font-semibold mb-2">Focus Goal</div>

            {/* Description */}
            <div className="text-sm text-gray mb-4">Set your daily focus goal.</div>

            {/* ADD/MINUS Button */}
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
