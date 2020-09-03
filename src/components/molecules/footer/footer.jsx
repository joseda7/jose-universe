import React from 'react'
import { Link } from "gatsby"

import './footer.scss'

export default function Footer() {
    // const isDisabled = false;
    return (
        <footer>
            <Link to='page-2'>
                OTRA PÁGINA
            </Link>
        </footer>
    )
}
