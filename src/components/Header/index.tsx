import caret from '../../assets/caret.svg'
import add from '../../assets/add.svg'
import './style.scss'

const Header = () => {
    return (
        <header className="header row">
            <div className="header__box">
                <h1 className="header__title">Invoices</h1>
                <span className="header__summary--tablet">
                    There are 7 total invoices
                </span>
                <span className="header__summary--phone">7 invoices</span>
            </div>
            <button className="header__filter" title="Filter invoices">
                Filter <span className="hide-on-mobile">&nbsp; by ststus</span>
                <img src={caret} alt="caret" className="header__filter-arrow" />
            </button>
            <button className="header__add-btn btn btn--purple">
                <img src={add} alt="plus" className="header__add-btn-icon" />
                New <span className="hide-on-mobile">&nbsp; Invoice</span>
            </button>
        </header>
    )
}

export default Header
