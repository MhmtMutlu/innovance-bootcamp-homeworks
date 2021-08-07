import { useEffect } from 'react'

function useKeyPress(func) {
  useEffect(() => {
    // Add event listeners
    window.addEventListener("keydown", func);
    // Remove event listeners on cleanup
    return () => window.removeEventListener("keydown", func);
  }, [func])
}

export default useKeyPress;
