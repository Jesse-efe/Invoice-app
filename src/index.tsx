import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { InvoiceProvider } from './context/invoice-context'
import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <InvoiceProvider>
                <App />
            </InvoiceProvider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
)
