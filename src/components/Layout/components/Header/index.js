import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAmerica,
    faCircleQuestion,
    faKeyboard,
    faInbox,
    faGear,
    faUser,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import avatar from '~/assets/images/avatar.jpg';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        title: 'English',
        children: {
            title: 'Language',
            // title của menu header, cho trường hợp menu có nhiều cấp hơn
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Spanish',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Arabic',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'French',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Persian',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'German',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Russian',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Malay',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Portuguese',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Italian',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Turkish',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Lahnda',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tamil',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Urdu',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Korean',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Hindi',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Bengali',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Telugu',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Marathi',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

function Header() {
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@user',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);

        switch (menuItem.type) {
            case 'language':
                //logic...
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy offset={[0, 4.5]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon width="34px" height="34px" />
                                </button>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faInbox} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>
                                <FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image src={avatar} className={cx('user-avatar')} alt="avatar" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
