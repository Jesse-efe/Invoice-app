import * as React from 'react'
import Home from './pages/Home'
import SingleInvoice from './pages/SingleInvoice'
import Baner from './components/Baner'
import { Switch, Route } from 'react-router-dom'
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
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/:invoiceId"
                            component={SingleInvoice}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App
