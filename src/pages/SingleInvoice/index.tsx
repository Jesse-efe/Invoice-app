import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { useGetSingleInvoice } from '../../utils/hooks'
import caret from '../../assets/back-caret.svg'
import StatusBox from '../../components/StatusBox'
import SingleInvoiceTable from '../../components/SingleInvoiceTable'
import './style.scss'

const SingleInvoice = () => {
    const { invoiceId } = useParams<{ invoiceId: string }>()
    const invoiceData = useGetSingleInvoice(invoiceId)

    if (!invoiceData) return <div>Invoice not found</div>
    const {
        id,
        description,
        createdAt,
        paymentDue,
        senderAddress,
        clientName,
        clientEmail,
        clientAddress,
        items,
        total,
    } = invoiceData
    return (
        <div className="single-invoice">
            <div className="row">
                <Link to="/" className="go-back">
                    <img
                        src={caret}
                        alt="back caret"
                        className="go-back__arrow"
                    />
                    Go back
                </Link>
                <div className="single-invoice-top row-box">
                    <span>Status</span>
                    <StatusBox status="pending" />
                    <button className="btn btn--grey hide-on-mobile">
                        Edit
                    </button>
                    <button className="btn btn--red hide-on-mobile">
                        Delete
                    </button>
                    <button className="btn btn--purple hide-on-mobile">
                        Mark as Paid
                    </button>
                </div>
                <div className="single-invoice-body row-box">
                    <div className="single-invoice-row">
                        <div className="info-block">
                            <span className="info-block__id-value mb-8">
                                <span className="id-hash">#</span>
                                {id}
                            </span>
                            <span
                                className="info-block__name"
                                title={description}
                            >
                                {description}
                            </span>
                        </div>
                        <div className="address-block address-block--from">
                            <span title={senderAddress.street}>
                                {senderAddress.street}
                            </span>
                            <span title={senderAddress.city}>
                                {senderAddress.city}
                            </span>
                            <span title={senderAddress.postCode}>
                                {senderAddress.postCode}
                            </span>
                            <span title={senderAddress.country}>
                                {senderAddress.country}
                            </span>
                        </div>
                    </div>
                    <div className="single-invoice-row single-invoice-row--second">
                        <div className="date-box">
                            <div className="info-block mb-32">
                                <span className="info-block__name mb-12">
                                    Invoice Date
                                </span>
                                <span className="info-block__value">
                                    <time dateTime={createdAt}>
                                        {dayjs(createdAt).format('DD MMM YYYY')}
                                    </time>
                                </span>
                            </div>
                            <div className="info-block">
                                <span className="info-block__name mb-12">
                                    Payment Due
                                </span>
                                <span className="info-block__value">
                                    <time dateTime={paymentDue}>
                                        {dayjs(paymentDue).format(
                                            'DD MMM YYYY'
                                        )}
                                    </time>
                                </span>
                            </div>
                        </div>
                        <div className="bill-to-box">
                            <div className="info-block">
                                <span className="info-block__name mb-12">
                                    Bill To
                                </span>
                                <span
                                    className="info-block__value mb-8 text-capitalize"
                                    title={clientName}
                                >
                                    {clientName}
                                </span>
                                <div className="address-block">
                                    <span title={clientAddress.street}>
                                        {clientAddress.street}
                                    </span>
                                    <span title={clientAddress.city}>
                                        {clientAddress.city}{' '}
                                    </span>
                                    <span title={clientAddress.postCode}>
                                        {clientAddress.postCode}
                                    </span>
                                    <span title={clientAddress.country}>
                                        {clientAddress.country}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="email-box">
                            <div className="info-block">
                                <span className="info-block__name mb-12">
                                    Sent to
                                </span>
                                <span
                                    className="info-block__value"
                                    title={clientEmail}
                                >
                                    {clientEmail}
                                </span>
                            </div>
                        </div>
                    </div>
                    <SingleInvoiceTable invoiceItems={items} total={total} />
                </div>
            </div>
        </div>
    )
}

export default SingleInvoice
