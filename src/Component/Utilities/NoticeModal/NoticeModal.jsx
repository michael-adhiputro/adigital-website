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
                    Modal Title !
                </h3>
                <FontAwesomeIcon className="notice-title-icon" icon={['fas', 'exclamation-triangle']} />
                <CloseButton onClick={(event) => closeNotice(event)} />
            </Modal.Header>
            <Modal.Body className="notice-modal-body">
                <p className="notice-desc">
                    Modal.
                </p>
                <p className="notice-desc">
                    <b>Modal.</b>
                </p>
            </Modal.Body>
        </Modal>
    );
}

export default NoticeModal;