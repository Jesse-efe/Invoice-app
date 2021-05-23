import logo from '../../assets/logo.svg'
import './style.scss'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} className="logo__image" alt="logo" />
            <div className="logo__child"></div>
        </div>
    )
}

export default Logo
