import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";


function FocusTimer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);

    const formatTime = () => {
        const formattedMinutes = minutes.toString().padStart(2,"0");
        const formattedSeconds = seconds.toString().padStart(2,"0");
        return `${formattedMinutes}:${formattedSeconds}`; 
    
};

    return (
        <div className="flex flex-col items-center justify-center">
            <div className = "text-4xl font-bold">
                {formatTime()}
            </div>
            <div className = "text-sm mt-2">
                FOCUS SESSION
            </div>
        </div> 
    );
}

export default FocusTimer;

