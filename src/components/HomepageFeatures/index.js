import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Resources",
    img: require("../../../static/img/code.png").default,
    description: (
      <>
        Unofficial Propel contains resources and tools to make your
        implimentation better and easier! <br/>Check out the resources page...
      </>
    ),
  },
  {
    title: "Propel User Group",
    img: require("../../../static/img/pug.png").default,
    description: (
      <>
        Join the Community! <br />
        The{" "}
        <a href="https://pug.unofficialpropel.com" target="_blank">
          Propel User Group
        </a>{" "}
        is a place to collaborate with fellow Propel users.
      </>
    ),
  },
  {
    title: "Disclaimer",
    img: require("../../../static/img/warning.webp").default,
    description: (
      <>
        This is an unofficial set of resources created by end-users and <strong>not officially supported by Propel</strong>. <br/>There should be no expectation of support from the vendor or any other party.
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <span>
          <img className={styles.featureImg} alt={title} src={img} />
        </span>
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
