import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import img from '~/assets/images/avatar.jpg';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={img} alt="Avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Schizophrene.</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>itsactuallyschizo</span>
            </div>
        </div>
    );
}

export default AccountItem;
