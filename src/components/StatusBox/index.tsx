import { AllStatus } from '../../types'
import './style.scss'

const StatusBox = ({ status }: { status: AllStatus }) => {
    return (
        <div className={`status-box status-box--${status}`}>
            <span className="status-box__dot"></span>
            {status}
        </div>
    )
}

export default StatusBox
