import * as React from 'react'
import Logo from '../src/components/Logo'
import { ReactComponent as MoonIcon } from '../src/assets/moon.svg'
import { ReactComponent as SunIcon } from '../src/assets/sun.svg'
import ProfilePicture from '../src/assets/person.svg'
import '../src/styles/index.scss'

const App = () => {
    const [isLightMode, setIsLightMode] = React.useState(true)
    const themeIcon = isLightMode ? <MoonIcon /> : <SunIcon />
    return (
        <div className={`app--${isLightMode ? 'light' : 'dark'}`}>
            <div className="container">
                <div className="baner">
                    <Logo />
                    <button
                        className="baner__theme-button"
                        onClick={() => setIsLightMode((mode) => !mode)}
                        aria-label="change app theme"
                        title={`use ${isLightMode ? 'dark' : 'light'} mode`}
                    >
                        {themeIcon}
                    </button>
                    <div className="baner__picture">
                        <img src={ProfilePicture} alt="" />
                    </div>
                </div>
                <div className="main"></div>
            </div>
        </div>
    )
}

export default App
