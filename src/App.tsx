import * as React from 'react'
import Home from './pages/Home'
import Baner from './components/Baner'
import { InvoiceProvider } from './context/invoice-context'
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
                    <InvoiceProvider>
                        <Home />
                    </InvoiceProvider>
                </div>
            </div>
        </div>
    )
}

export default App
