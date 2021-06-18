import * as React from 'react'
import dayjs from 'dayjs'
import Header from '../../components/Header'
import InvoiceItem from '../../components/InvoiceItem'
import { InvoiceContext } from '../../context/invoice-context'
import { SingleRecord } from '../../types'
import { currency } from '../../utils/misc'
import './style.scss'

const Home = () => {
    const invoices = React.useContext(InvoiceContext)
    return (
        <div className="home">
            <Header />
            <div className="row invoice-list">
                {invoices?.map((item: SingleRecord) => (
                    <InvoiceItem
                        id={item.id}
                        key={item.id}
                        paymentDue={dayjs(item.paymentDue).format(
                            'DD MMM YYYY'
                        )}
                        clientName={item.clientName}
                        total={currency(item.total)}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
