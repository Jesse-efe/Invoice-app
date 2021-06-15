import * as React from 'react'
import Home from './pages/Home'
import Baner from './components/Baner'
import '../src/styles/index.scss'

const App = () => {
    const [isLightMode, setIsLightMode] = React.useState(true)
    return (
        <div className={`app--${isLightMode ? 'light' : 'dark'}`}>
            <div className="container">
                <Baner
                    changeMode={() => setIsLightMode((mode) => !mode)}
                    isLightMode={isLightMode}
                />
                <div className="main">
                    <Home />
                </div>
            </div>
        </div>
    )
}

export default App
