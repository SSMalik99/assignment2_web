import { useEffect, useState } from "react";

const useCelcius = (fTemp:Number)  => {

    const [celciusTemp, setCelciusTemp] = useState(0)
    useEffect(() => {
        setCelciusTemp((+fTemp - 32) * 5 / 9);
    }, [fTemp])
    

    return [celciusTemp]

}

export default useCelcius