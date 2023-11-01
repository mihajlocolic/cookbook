import {useState, useEffect} from 'react';

const ScrollTop = () => {
    const [showButton, setShowButton] = useState(false)

    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        const handleScrollButton = () => {
            window.scrollY > 300 ? setShowButton(true) : setShowButton(false)
        }
        window.addEventListener('scroll', handleScrollButton)
        return () => {
            window.removeEventListener('scroll', handleScrollButton)
        }
    }, [])
    return {showButton, handleScrollToTop}  
}
 
export default ScrollTop;