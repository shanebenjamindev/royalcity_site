import React from 'react'

export default function Comfort(props) {
    const { data } = props
    const amenitiesToRender =
        [
            {
                key: 'mayGiat', icon: (
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="2em"
                        width="2em"
                    >
                        <path d="M14.83 11.17a4.008 4.008 0 010 5.66 4.008 4.008 0 01-5.66 0l5.66-5.66M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2m1 2a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m3 0a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m2 4a6 6 0 00-6 6 6 6 0 006 6 6 6 0 006-6 6 6 0 00-6-6z" />
                    </svg>
                ), text: 'Máy giặt'
            },
            {
                key: 'bep', icon: (<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 30"
                    height="2em"
                    width="2em" >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 3h8l-1 9H5zM7 18h2v3H7zM20 3v12h-5c-.023-3.681.184-7.406 5-12zM20 15v6h-1v-3M8 12v6" />
                </svg>), text: 'Bếp'
            },
            {
                key: 'thangMay',
                icon: (<svg
                    fill="currentColor"
                    viewBox="0 0 16 20"
                    height="2em"
                    width="2em"
                >
                    <path d="M3 2a1 1 0 011-1h8a1 1 0 011 1v13h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V2zm1 13h8V2H4v13z" />
                    <path d="M9 9a1 1 0 102 0 1 1 0 00-2 0z" />
                </svg>)
                , text: 'Thang máy'
            },
            {
                key: 'wifi',
                icon: (<svg
                    viewBox="0 0 1024 1300"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                >
                    <path d="M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 00-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 00-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 00-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 10128 0 64 64 0 10-128 0z" />
                </svg>),
                text: "Wifi"
            },
            {
                key: 'tivi',
                icon: (
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 30"
                        height="2em"
                        width="2em"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 4 H20 A1 1 0 0 1 21 5 V15 A1 1 0 0 1 20 16 H4 A1 1 0 0 1 3 15 V5 A1 1 0 0 1 4 4 z" />
                        <path d="M7 20h10M9 16v4M15 16v4" />
                    </svg>
                ),
                text: "TV"
            },
            {
                key: 'dieuHoa',
                icon: (
                    <svg
                        viewBox="0 0 24 30"
                        fill="currentColor"
                        height="2em"
                        width="2em"
                    >
                        <path d="M22 22H2v-2h20v2m0-16H2V3h20v3m-2 1v12h-3v-8s-2.5-1-5-1-5 1-5 1v8H4V7h16m-5.5 7.67h-.03l.34.55.06.12c.42 1.01.13 2.16-.66 2.9-.71.66-1.71.83-2.63.71-.87-.11-1.68-.66-2.13-1.42-.15-.23-.26-.5-.32-.76L9 16.11c-.04-.96.34-1.97 1.06-2.57-.33.72-.25 1.62.24 2.25l.06.08c.08.07.19.1.28.05.09-.03.16-.12.16-.22l-.04-.14c-.53-1.39-.08-3.01 1.03-3.93.31-.25.71-.48 1.08-.58-.41.82-.26 1.88.38 2.52l.89.73.36.37m-1.39 2.77c.26-.24.42-.64.39-1v-.19c-.12-.6-.65-.79-1-1.25l-.24-.45c-.13.3-.14.58-.09.91.06.34.2.63.12.98-.09.39-.39.78-.92.91.3.29.78.52 1.27.36l.47-.27z" />
                    </svg>
                ),
                text: "Hệ thống sửi"
            },
            {
                key: "doXe",
                icon: (
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="2em"
                        width="2em"
                        {...props}
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm4 2h3.5a3.5 3.5 0 010 7H11v3H9V7zm2 2v3h1.5a1.5 1.5 0 000-3H11z" />
                    </svg>
                ),
                text: "Đỗ xe",
            },
            {
                key: "banUi",
                icon: (
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        height="2em"
                        width="2em"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M12 15h.01M9 6h7.459a3 3 0 012.959 2.507l.577 3.464.81 4.865A1 1 0 0119.82 18H3a7 7 0 017-7h9.8M9 15h.01M15 15h.01" />
                    </svg>
                ),
                text: "Bàn ủi",
            },
            {
                key: "banLa",
                icon: (
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        height="2em"
                        width="2em"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M12 15h.01M9 6h7.459a3 3 0 012.959 2.507l.577 3.464.81 4.865A1 1 0 0119.82 18H3a7 7 0 017-7h9.8M9 15h.01M15 15h.01" />
                    </svg>
                ),
                text: "Bàn là",
            },
            {
                key: "hoBoi",
                icon: (
                    <svg fill="none" viewBox="0 0 15 15" height="2em" width="2em">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M5.636 1C4.15 1 3 2.203 3 3.727V4h6v-.364C9 1.57 10.633 0 12.682 0v1C11.167 1 10 2.14 10 3.636V10H9V9H3v3H2V3.727C2 1.688 3.56 0 5.636 0v1zM3 8h6V5H3v3z"
                            clipRule="evenodd"
                        />
                        <path
                            fill="currentColor"
                            d="M7.44 13.442c-.895.504-1.877 1.058-3.485 1.058-1.483 0-2.614-.762-3.33-1.568l.75-.664c.584.66 1.462 1.232 2.58 1.232 1.339 0 2.128-.442 3.004-.935l.01-.007c.895-.504 1.877-1.058 3.485-1.058 1.531 0 2.884.82 3.852 1.572l-.612.79c-.923-.716-2.052-1.362-3.24-1.362-1.339 0-2.128.442-3.004.935l-.01.007z"
                        />
                    </svg>
                ),
                text: "Hồ bơi",
            },
            {
                key: "maySayKho",
                icon: (
                    <svg
                        viewBox="0 0 24 30"
                        fill="currentColor"
                        height="2em"
                        width="2em"
                    >
                        <path d="M10 12.73A70.39 70.39 0 0017 11V4s-6.5-2-9.5-2a5.5 5.5 0 00-1.38 10.82L7 19h1a3 3 0 001.46 2.33A3.15 3.15 0 0111 24h1a4.12 4.12 0 00-1.91-3.45C9.39 20 9 19.63 9 19h1M4 7.5A3.5 3.5 0 017.5 4 37.08 37.08 0 0115 5.5v4A37.08 37.08 0 017.5 11 3.5 3.5 0 014 7.5M22 9a4.32 4.32 0 01-2.22-.55A3.4 3.4 0 0018 8V7a4.32 4.32 0 012.22.55A3.4 3.4 0 0022 8m0-2a3.4 3.4 0 01-1.78-.45A4.32 4.32 0 0018 5v1a3.4 3.4 0 011.78.45A4.32 4.32 0 0022 7m0 3a3.4 3.4 0 01-1.78-.45A4.32 4.32 0 0018 9v1a3.4 3.4 0 011.78.45A4.32 4.32 0 0022 11M9 7.5A1.5 1.5 0 117.5 6 1.5 1.5 0 019 7.5z" />
                    </svg>
                ),
                text: "Máy sấy khô"
            },
            {
                key: "gym",
                icon: (
                    <svg fill="none" viewBox="0 0 24 30" height="2em" width="2em">
                        <path
                            fill="currentColor"
                            d="M20.274 9.869l-3.442-4.915 1.639-1.147 3.441 4.915-1.638 1.147zM18.39 12.409L16.67 9.95l-8.192 5.736 1.72 2.457-1.638 1.148-4.588-6.554 1.638-1.147 1.72 2.458 8.192-5.736-1.72-2.458 1.638-1.147 4.588 6.553-1.638 1.148zM20.765 7.083l1.638-1.147-1.147-1.638-1.638 1.147 1.147 1.638zM7.168 19.046l-3.442-4.915-1.638 1.147 3.441 4.915 1.639-1.147zM4.382 18.555l-1.638 1.147-1.147-1.638 1.638-1.147 1.147 1.638z"
                        />
                    </svg>
                ),
                text: "Phòng tập thể hình"
            }
        ];

    const renderComfort = () => {
        return amenitiesToRender.map((amenity) => {
            if (data[amenity.key]) {
                return (
                    <div className='d-flex col-6 my-1 p-0 ' key={amenity.key}>
                        {amenity.icon}
                        {amenity.text}
                    </div>
                );
            }
            return null;
        });
    }

    return (
        <div>
            <h5 className='main__Title'><b>Nơi này có những gì cho bạn</b></h5>
            <div className='d-flex flex-wrap py-2'>
                {renderComfort()}
            </div>
            <button className='btn btn-outline-dark'>Hiển thị tất cả 75 tiện nghi</button>
        </div>
    )
}
