'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import styles from './Breadcrumb.module.css'

type BreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    capitalizeLinks?: boolean,
    translatedLink: string
}

const Breadcrumb = ({homeElement, separator, translatedLink}: BreadCrumbProps) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )

    return (
        <div>
            <ul className={styles.containerClasses}>
                <li className={styles.listClasses}><Link href={'/'}>{homeElement}</Link></li>
                {pathNames.length > 0 && separator}
            {
                pathNames.map( (link, index) => {
                    const href = `/${pathNames.slice(0, index + 1).join('/')}`
                    return (
                        <React.Fragment key={index}>
                            <Link href={href} className={styles.itemClasses}>{translatedLink}</Link>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Breadcrumb