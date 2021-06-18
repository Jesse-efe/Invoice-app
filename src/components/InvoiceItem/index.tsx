import { InvoiceItemProps } from '../../types'
import './style.scss'

const InvoiceItem = ({
    id,
    paymentDue,
    clientName,
    total,
    status,
}: InvoiceItemProps) => {
    return (
        <div className="invoice-item" key={id}>
            <div className="invoice-item__id">
                <span>#</span>
                {id}
            </div>
            <div className="invoice-item__due-date" title={paymentDue}>
                Due {paymentDue}
            </div>
            <div className="invoice-item__customer" title={clientName}>
                {clientName}
            </div>
            <div className="invoice-item__price">£ {total}</div>
            <div className={`invoice-item__status--${status}`}>
                <span className="invoice-item__status-dot"></span>
                {status}
            </div>
        </div>
    )
}

export default InvoiceItem
