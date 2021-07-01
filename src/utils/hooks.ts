import * as React from 'react'
import { InvoiceContext } from '../context/invoice-context'

export const useGetSingleInvoice = (id: String) => {
    const invoices = React.useContext(InvoiceContext)
    const singleInvoice = invoices.find((invoice) => invoice.id === id)
    return singleInvoice
}
