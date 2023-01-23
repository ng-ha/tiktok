import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cc105db1a5ae3080014a9122820093b7~c5_100x100.jpeg?x-expires=1674579600&x-signature=VueWNLmoEYELJG4pdWpkGz8bBwA%3D"
                    alt="avatar"
                />
                <Button primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('user-name')}>
                    <strong>schizo</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('full-name')}>schizophrene</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>1B </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
