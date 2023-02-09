import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AcountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9bea2c30cf41b2cb99db73e81b62b2b8~c5_100x100.jpeg?x-expires=1675242000&x-signature=fzXUaxhdHizfNKbIxKd3R0XdloM%3D"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>NguyễnVănA</span>
            </div>
        </div>
    );
}

export default AccountItem;
