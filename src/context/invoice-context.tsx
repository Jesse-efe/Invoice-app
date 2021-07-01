import * as React from 'react'
import { SingleRecord } from '../types'
import initialData from '../utils/initialData'

export const InvoiceContext = React.createContext<SingleRecord[] | []>([])

export const InvoiceProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const storedRecords = localStorage.getItem('invoiceList')
    const invoiceItems: SingleRecord[] = storedRecords
        ? JSON.parse(storedRecords)
        : initialData
    return (
        <InvoiceContext.Provider value={invoiceItems}>
            {children}
        </InvoiceContext.Provider>
    )
}
