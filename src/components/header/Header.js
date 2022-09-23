import React, { useState } from 'react'
import './header.scss'
import NavItem from './NavItem'
const Headers = () => {
    const [active, setActive] = useState(1)
    const data = [
        {
            id: 1,
            value: "home",
            link: "#"
        },
        {
            id: 2,
            value: "spaces",
            link: '#feature'
        },
        {
            id: 3,
            value: "products&services",
            link: '#product'
        },
        {
            id: 4,
            value: "showrooms",
            link: "#project"
        },
        {
            id: 5,
            value: "company",
            link: '#serviceOverview'
        },
        {
            id: 6,
            value: "media",
            link: '#media'
        },
        {
            id: 7,
            value: "Contact",
            link: '#contact'
        },
        {
            id: 8,
            value: "Contact",
            link: '#contact'
        }
    ]

    return (
        <div className='header'>

            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="53" viewBox="0 0 150 53">
                    <path d="M36.0755 39.2804H3.58838C3.07706 39.2804 2.60226 39.1891 2.16398 39.0065C1.72571 38.8239 1.34222 38.5774 1.01351 38.2669C0.703067 37.9382 0.456537 37.5547 0.273922 37.1164C0.0913073 36.6782 0 36.2034 0 35.692V0H7.12197V32.1584H36.0755V39.2804Z" />
                    <path d="M72.8086 29.2823C72.8086 30.5058 72.6534 31.6106 72.3429 32.5967C72.0325 33.5646 71.6216 34.4229 71.1103 35.1716C70.5989 35.902 70.0054 36.5321 69.3298 37.0616C68.6541 37.573 67.9419 37.993 67.1932 38.3217C66.4627 38.6504 65.714 38.8969 64.947 39.0613C64.1983 39.2074 63.4861 39.2804 62.8104 39.2804H49.9635C48.9774 39.2804 47.8999 39.1069 46.7312 38.76C45.5625 38.413 44.4759 37.8469 43.4715 37.0616C42.4854 36.2581 41.6545 35.2264 40.9788 33.9663C40.3214 32.688 39.9927 31.1267 39.9927 29.2823V19.6402C39.9927 17.8141 40.3214 16.271 40.9788 15.0109C41.6545 13.7326 42.4854 12.7009 43.4715 11.9156C44.4759 11.1121 45.5625 10.5369 46.7312 10.1899C47.8999 9.84293 48.9774 9.66945 49.9635 9.66945H62.8104C64.6366 9.66945 66.1888 9.99815 67.4671 10.6556C68.7454 11.313 69.7772 12.1439 70.5624 13.1483C71.3477 14.1344 71.9138 15.2118 72.2607 16.3805C72.626 17.5493 72.8086 18.6358 72.8086 19.6402V29.2823ZM65.6866 19.695C65.6866 18.7089 65.4401 17.9784 64.947 17.5036C64.454 17.0288 63.7418 16.7914 62.8104 16.7914H50.0183C49.0687 16.7914 48.3473 17.038 47.8543 17.531C47.3612 18.0058 47.1147 18.7089 47.1147 19.6402V29.2823C47.1147 30.2136 47.3612 30.9258 47.8543 31.4189C48.3473 31.9119 49.0687 32.1584 50.0183 32.1584H62.8104C63.7783 32.1584 64.4996 31.9119 64.9744 31.4189C65.4492 30.9258 65.6866 30.2136 65.6866 29.2823V19.695Z" />
                    <path d="M111.185 42.1292C111.185 43.3527 111.03 44.4484 110.719 45.4163C110.409 46.4024 109.998 47.2607 109.487 47.9911C108.976 48.7399 108.382 49.3699 107.706 49.8812C107.031 50.4108 106.318 50.8399 105.57 51.1686C104.839 51.4973 104.091 51.7347 103.324 51.8808C102.575 52.0452 101.863 52.1274 101.187 52.1274H88.3401V45.0054H101.187C102.155 45.0054 102.876 44.7589 103.351 44.2658C103.826 43.7727 104.063 43.0605 104.063 42.1292V19.6402C104.063 18.7089 103.826 18.0058 103.351 17.531C102.876 17.038 102.155 16.7914 101.187 16.7914H88.3401C87.4635 16.7914 86.7696 17.0653 86.2582 17.6132C85.7469 18.1428 85.4913 18.8184 85.4913 19.6402V29.2823C85.4913 30.2136 85.7378 30.9258 86.2309 31.4189C86.7239 31.9119 87.4452 32.1584 88.3948 32.1584H101.187V39.2804H88.3401C87.6644 39.2804 86.9522 39.2074 86.2035 39.0613C85.4547 38.8969 84.706 38.6504 83.9573 38.3217C83.2268 37.993 82.5238 37.573 81.8481 37.0616C81.1724 36.5321 80.5789 35.902 80.0676 35.1716C79.5563 34.4229 79.1454 33.5646 78.835 32.5967C78.5245 31.6106 78.3693 30.5058 78.3693 29.2823V19.6402C78.3693 18.9645 78.4423 18.2523 78.5884 17.5036C78.7528 16.7549 78.9993 16.0153 79.328 15.2848C79.6567 14.5361 80.0767 13.8239 80.5881 13.1483C81.1176 12.4726 81.7477 11.8791 82.4781 11.3678C83.2268 10.8564 84.0851 10.4456 85.053 10.1351C86.0209 9.82467 87.1165 9.66945 88.3401 9.66945H101.187C101.863 9.66945 102.575 9.75162 103.324 9.91598C104.091 10.0621 104.839 10.2995 105.57 10.6282C106.318 10.9569 107.031 11.386 107.706 11.9156C108.382 12.4269 108.976 13.057 109.487 13.8057C109.998 14.5361 110.409 15.3853 110.719 16.3531C111.03 17.321 111.185 18.4167 111.185 19.6402V42.1292Z" />
                    <path d="M150 29.2823C150 30.5058 149.845 31.6106 149.534 32.5967C149.224 33.5646 148.813 34.4229 148.302 35.1716C147.79 35.902 147.197 36.5321 146.521 37.0616C145.846 37.573 145.133 37.993 144.385 38.3217C143.654 38.6504 142.905 38.8969 142.138 39.0613C141.39 39.2074 140.678 39.2804 140.002 39.2804H127.155C126.169 39.2804 125.091 39.1069 123.923 38.76C122.754 38.413 121.667 37.8469 120.663 37.0616C119.677 36.2581 118.846 35.2264 118.17 33.9663C117.513 32.688 117.184 31.1267 117.184 29.2823V19.6402C117.184 17.8141 117.513 16.271 118.17 15.0109C118.846 13.7326 119.677 12.7009 120.663 11.9156C121.667 11.1121 122.754 10.5369 123.923 10.1899C125.091 9.84293 126.169 9.66945 127.155 9.66945H140.002C141.828 9.66945 143.38 9.99815 144.659 10.6556C145.937 11.313 146.969 12.1439 147.754 13.1483C148.539 14.1344 149.105 15.2118 149.452 16.3805C149.817 17.5493 150 18.6358 150 19.6402V29.2823ZM142.878 19.695C142.878 18.7089 142.632 17.9784 142.138 17.5036C141.645 17.0288 140.933 16.7914 140.002 16.7914H127.21C126.26 16.7914 125.539 17.038 125.046 17.531C124.553 18.0058 124.306 18.7089 124.306 19.6402V29.2823C124.306 30.2136 124.553 30.9258 125.046 31.4189C125.539 31.9119 126.26 32.1584 127.21 32.1584H140.002C140.97 32.1584 141.691 31.9119 142.166 31.4189C142.641 30.9258 142.878 30.2136 142.878 29.2823V19.695Z" />
                </svg>
            </div>

            <div className={data.length > 7 ? 'dropDown' : 'nav'}>
                {data.length > 7 ? (
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
                ) : (<></>)}
                <div className={data.length > 7 ? 'dropDownBox' : ''}>
                    {
                        data.map((item) =>
                            <NavItem key={item.id} isDropDown={data.length > 7 ? true : false} item={item} active={active} setActive={setActive} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Headers