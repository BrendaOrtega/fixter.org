import React, { Component } from 'react';
import styles from './Card.module.css';


export const Card = ({ image, project, description, tag }) => {
    return (
        <div className={styles.card} style={{ backgroundImage: `url("${image}")` }}>
            <span className={styles.tag}>{tag}</span>
            <div>
                <h2 className={styles.title}>{project}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};