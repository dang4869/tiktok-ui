import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/layouts/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const renderPreview = (props) => {
    return (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <div className={cx('preview')}>
                    <AccountPreview />
                </div>
            </PopperWrapper>
        </div>
    );
};

function AcountItem() {
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1679108400&x-signature=ye2tYjwK%2BH7fRsx18BJQnQF8uJU%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>theanh28entertainment</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </p>
                        <p className={cx('name')}>theanh28 Entertainment</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AcountItem.propTypes = {};

export default AcountItem;
