import styles from './tech.module.scss';
import code from 'icons/code.jpg';
import type { ILanguageProps } from 'data/strings';
import SimpleParallax from 'simple-parallax-js';

const Technologies = ({ strings }: ILanguageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.blur}>
        <div className={`flex-center ${styles.textContainer}`}>
          <div className={styles.text}>{strings.techText}</div>
        </div>
      </div>
      <SimpleParallax>
        <img className={styles.image} src={code} alt="code" />
      </SimpleParallax>
    </div>
  );
};

export default Technologies;
