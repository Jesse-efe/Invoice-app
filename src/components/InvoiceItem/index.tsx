import { Link } from 'react-router-dom'
import { InvoiceItemProps } from '../../types'
import StatusBox from '../StatusBox'
import './style.scss'

const InvoiceItem = ({
    id,
    paymentDue,
    clientName,
    total,
    status,
}: InvoiceItemProps) => {
    return (
        <Link to={`/${id}`}>
            <div className="invoice-item row-box" key={id}>
                <div className="invoice-item__id">
                    <span className="id-hash">#</span>
                    {id}
                </div>
                <div className="invoice-item__due-date" title={paymentDue}>
                    Due {paymentDue}
                </div>
                <div className="invoice-item__customer" title={clientName}>
                    {clientName}
                </div>
                <div className="invoice-item__price">£ {total}</div>
                <StatusBox status={status} />
            </div>
        </Link>
    )
}

export default InvoiceItem
