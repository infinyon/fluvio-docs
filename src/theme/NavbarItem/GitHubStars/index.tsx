import React from 'react';

import styles from './styles.module.css';

export default function GitHubStars(): JSX.Element {
  return (
    <li className={`${styles.githubStars} custom-button`}>
        <a href="https://gitHub.com/infinyon/fluvio/" target="_blank">
          <img src="https://img.shields.io/github/stars/infinyon/fluvio?style=social" alt="GitHub stars"/>
        </a>
    </li>
  );
}
