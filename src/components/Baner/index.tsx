import Logo from '../Logo'
import { ReactComponent as MoonIcon } from '../../assets/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/sun.svg'
import ProfilePicture from '../../assets/person.svg'
import './style.scss'

const Baner = ({
    changeMode,
    isLightMode,
}: {
    changeMode: () => void
    isLightMode: Boolean
}) => {
    const themeIcon = isLightMode ? <MoonIcon /> : <SunIcon />
    return (
        <div className="baner">
            <Logo />
            <button
                className="baner__theme-button"
                onClick={changeMode}
                aria-label="change app theme"
                title={`use ${isLightMode ? 'dark' : 'light'} mode`}
            >
                {themeIcon}
            </button>
            <div className="baner__picture">
                <img src={ProfilePicture} alt="" />
            </div>
        </div>
    )
}

export default Baner
