import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';

import * as searchService from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CircleNotch } from '~/components/Icons';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        // dùng fetch:
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setSearchResult(data.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        // dùng axios + instance:
        //
        //  someInstance
        //     .get('users/search', {
        //         params: {
        //             q: debounced,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         setSearchResult(res.data.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        // dùng axios + instance + customized get method (=> res.data)
        // request
        //     .get('users/search', {
        //         params: {
        //             q: debounced,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        // dùng axios + async/await
        // const fetchApi = async () => {
        //     try {
        //         const res = await request.get('users/search', {
        //             params: {
        //                 q: debounced,
        //                 type: 'less',
        //             },
        //         });
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     } catch (error) {
        //         setLoading(false);
        //     }
        // };
        // fetchApi();

        // dùng axios + async/await + custom các apiService
        const fetchApi = async () => {
            try {
                const res = await searchService.search(debounced);
                setSearchResult(res);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        // c1: regex
        if (!/^\s/.test(searchValue)) {
            setSearchValue(searchValue);
        }
        // c2:
        // if (!searchValue.startsWith(' ')) {
        //     setSearchValue(searchValue);
        // }
    };
    return (
        // Interactive tippy element may not be accessible via keyboard navigation because
        // it is not directly after the reference element in the DOM source order.
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                // appendTo='parent' default when interactive = true
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />} */}
                    {loading && <CircleNotch width="11px" height="11px" className={cx('loading')} />}

                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            inputRef.current.blur();
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
