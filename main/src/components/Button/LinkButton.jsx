import React from 'react'
import './LinkButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LinkButton({ href, text, faIcon }) {
    return (
        <a className="link-btn" href={href} type="button" download target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="faIcon" icon={faIcon} size="lg"/> {text}
        </a>
    )
}

export default LinkButton
