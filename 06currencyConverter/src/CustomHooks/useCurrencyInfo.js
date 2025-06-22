//any fn which returns an array can be referred as a custom hook and it can also use built in hooks suchas usecallback , useefect
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;