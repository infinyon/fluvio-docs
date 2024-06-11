import React from 'react';

import styles from './styles.module.css';

export default function GitHubStars(): JSX.Element {
  return (
    <li className={styles.githubStars}>
        <a href="https://gitHub.com/infinyon/fluvio/stargazers/">
          <img src="https://img.shields.io/github/stars/infinyon/fluvio?style=social" alt="GitHub stars"/>
        </a>
    </li>
  );
}
