import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import Link from 'next/link';
import styles from '../styles/navlink.module.scss';

const NavigationLink = ({ blok }) => {

    return <div {...sbEditable(blok)} className={blok.size == 'small' ? styles.smallNavLink : styles.navLink}>
        <Link href={`/${blok.link.cached_url}`} passHref>
            <a>
                <p>{blok.name}</p>
            </a>
        </Link>
    </div>
};

export default NavigationLink;