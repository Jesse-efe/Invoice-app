import { currency } from '../../utils/misc'
import { Item } from '../../types'
import './style.scss'

const SingleInvoiceTable = ({
    invoiceItems,
    total,
}: {
    invoiceItems: Item[]
    total: number
}) => {
    return (
        <div className="invoice-details-table">
            <table className="invoice-table">
                <thead>
                    <tr className="table-gap hide-on-mobile">
                        <th className="data-left">Item Name</th>
                        <th className="data-center">QTY.</th>
                        <th className="data-right">Price</th>
                        <th className="data-right">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceItems.map((item) => (
                        <tr key={Math.random()+item.name}>
                            <td
                                className="data-left td-bold text-capitalize"
                                title={item.name}
                            >
                                {item.name}
                                <span>
                                    {item.quantity} x £ {currency(item.price)}
                                </span>
                            </td>
                            <td className="data-center hide-on-mobile">
                                {item.quantity}
                            </td>
                            <td
                                className="data-right hide-on-mobile"
                                title={`£ ${currency(item.price)}`}
                            >
                                £ {currency(item.price)}
                            </td>
                            <td
                                className="data-right td-bold"
                                title={`£ ${currency(item.total)}`}
                            >
                                £ {currency(item.total)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-bottom">
                <span className="table-bottom__text">Amount Due</span>
                <span className="table-bottom__value">£ {currency(total)}</span>
            </div>
        </div>
    )
}

export default SingleInvoiceTable
