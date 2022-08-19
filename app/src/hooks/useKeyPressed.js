import {useState, useEffect} from 'react'

function useKeyPressed() {

    const [keyPressed, setKeyPressed] = useState(false)

    useEffect(() => {
        window.addEventListener("keydown", ({ key }) => {
            if (key === "Enter") {
                setKeyPressed(true)
            }
        });
        return () => {
            window.removeEventListener("keyup", ({ key }) => {
                if (key === "Enter") {
                    setKeyPressed(false)
                }
            });
        }
    }, [])

    return keyPressed
}

export default useKeyPressed