import Link from 'next/link';
import React from 'react';

export default function test() {
    return (
        <React.Fragment>
            <Link href="/login">로그인창</Link>
            <br></br>
            <Link href="/main">메인창</Link>
        </React.Fragment>
    );
}
