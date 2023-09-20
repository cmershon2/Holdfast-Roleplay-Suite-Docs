import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Deploy',
    Svg: require('@site/static/img/undraw_server_push_re_303w.svg').default,
    description: (
      <>
        Deploy the online <a href='https://github.com/cmershon2/Holdfast-Roleplay-Microservice'>Holdfast Roleplay Microservice</a> to your desired hosting provider.
      </>
    ),
  },
  {
    title: 'Manage Content',
    Svg: require('@site/static/img/undraw_personal_data_re_ihde.svg').default,
    description: (
      <>
        Manage your content using the easy to use drag and drop editor.
      </>
    ),
  },
  {
    title: 'Build Your World',
    Svg: require('@site/static/img/undraw_outer_space_re_u9vd.svg').default,
    description: (
      <>
        Build your own world in Unity 3D & connect it to your content.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
