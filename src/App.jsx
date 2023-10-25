import { useEffect, useState } from 'react';
import './App.css'
import { Container } from './components/Container'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    console.log(theme);
  }

  return (
    <div className='h-screen dark:bg-gray-900'>
      <button onClick={handleTheme} className='p-2'>
        {theme === 'dark' ? (
          <FontAwesomeIcon icon={faSun} className="text-indigo-100"/>
        ) : (
          <FontAwesomeIcon icon={faMoon} className="text-indigo-900" />
        )}
      </button>
      <Container />
    </div >
  )
}

export default App
