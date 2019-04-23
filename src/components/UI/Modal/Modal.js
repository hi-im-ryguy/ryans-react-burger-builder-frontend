import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.css';

const modal = (props) => (
    <>
        <Backdrop show={props.show} clicked={props.closeModal}></Backdrop>
        <div
            className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
            >
            {props.children}
        </div>
    </>
);

export default modal;