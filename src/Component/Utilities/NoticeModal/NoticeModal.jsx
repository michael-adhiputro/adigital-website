import { useState } from "react";
import { Modal } from 'react-bootstrap';
import Init from '../../../Init/Init';

import './NoticeModal.scss';

const { FontAwesomeIcon, config } = Init;

const CloseButton = (props) => {
    const click = (event) => {
        props.onClick(event);
    }
    
    return (
        <button className="notice-modal-close-btn" onClick={click}>
            <FontAwesomeIcon icon={['fas', 'times']} />
        </button>
    );
}

const NoticeModal = (props) => {
    const [ isShow, setIsShow ] = useState(true);
    const closeNotice = () => {
        setIsShow(false);
    }
    
    return (
        <Modal
            show={ isShow }
            onHide={ closeNotice }
            className="notice-modal"
            // size={'lg'}
        >
            <Modal.Header  
                className="notice-modal-header"
            >
                {/* 
                    Exclamation Triangle
                    Waspada Penipuan!
                    Exclamation Triangle
                */}
                <FontAwesomeIcon className="notice-title-icon" icon={['fas', 'exclamation-triangle']} />
                <h3 className="notice-title">
                    Waspada Penipuan !
                </h3>
                <FontAwesomeIcon className="notice-title-icon" icon={['fas', 'exclamation-triangle']} />
                <CloseButton onClick={(event) => closeNotice(event)} />
            </Modal.Header>
            <Modal.Body className="notice-modal-body">
                {/* 
                    Jangan sampai data pribadi kamu jatuh ke tangan yang salah.

                    PT Waterfront Sekuritas Indonesia tidak pernah meminta data diri, OTP, atau transfer uang ke rekening pribadi.
                */}
                <p className="notice-desc">
                    Jangan sampai data pribadi kamu jatuh ke tangan yang salah.
                </p>
                <p className="notice-desc">
                    PT Waterfront Sekuritas Indonesia tidak pernah meminta <b>data diri, OTP, atau transfer uang ke rekening pribadi.</b>
                </p>
            </Modal.Body>
            <Modal.Footer className="notice-modal-footer">
                {/* 
                   Verifikasi ke CS kami di
                   
                   [Icon] No HP [Icon] No WhatsApp [Icon] Website
                */}
                <span className="notice-contact-label">
                    Verifikasi ke CS kami di
                </span>
                <div className="notice-contact-list">
                    <div className="notice-contact-item">
                        <FontAwesomeIcon className="notice-contact-item-icon" icon={['fas', 'phone']} /> <span className="notice-contact-item-text"> +62 21 2506355 </span>
                    </div>
                    <div className="notice-contact-item">
                        <FontAwesomeIcon className="notice-contact-item-icon" icon={['fab', 'whatsapp']} /> <span className="notice-contact-item-text"> +62 81383476308 </span>
                    </div>
                    <div className="notice-contact-item">
                        <FontAwesomeIcon className="notice-contact-item-icon" icon={['fas', 'globe']} /> <span className="notice-contact-item-text"> www.waterfrontsekuritas.com </span>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default NoticeModal;