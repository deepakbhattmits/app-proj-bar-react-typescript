import { useEffect,useState } from "react"
const useDebounce=(str: string,interVal: number) =>{
    const [val,setVal]=useState(str);
    useEffect(() =>
    {
        const fn=setTimeout(() => {setVal(str);},interVal);
        return () =>
        {
            clearTimeout(fn);
        };
    },[str,interVal]);
    return val;    
}
export default useDebounce