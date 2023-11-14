import { useEffect, useRef } from "react"

export const useResize = (ref, setWidth) => {
    const observer = useRef(null);

    useEffect(() => {
        if (ref.current === null) {
            throw new Error("Ref is null")
        }
        // ResizeObserver를 이용해서 ref의 width변화를 감지
        observer.current = new ResizeObserver((entries) => {
            for (let entry of entries) {
                console.log(`Element size changed: ${entry.target.offsetWidth}`)
                setWidth(entry.target.offsetWidth)
            }
        })
    
        observer.current.observe(ref.current)
    
        return () => {
            observer.current.disconnect()
        }
    }, [ref, setWidth])
}