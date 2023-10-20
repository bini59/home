import { useEffect } from "react"
import useViewStore from "../store/viewStore"

export const useClickOutside = (id, callback) => {
    const { setIsActive } = useViewStore();
    useEffect(() => {
        const handleClick = (event) => {
            const element = document.getElementById(id);
            const activeElement = document.getElementById(id + "Active");

            if ((activeElement && activeElement.contains(event.target))) {
                if (!element) setIsActive(true, id);
                else setIsActive(false, id);
            }
            else if ((element && !element.contains(event.target))) {
                try {
                    setIsActive(false, id);    
                }
                catch (e) {
                    console.log("Error: 해당 컴포넌트는 활성화되지 않는 컴포넌트입니다.\nComponent id : ", id);
                }
                if(typeof callback === "function") callback()
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [id, callback])
}