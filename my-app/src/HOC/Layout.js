import React from "react";
import classes from "./Layout.module.scss";
import Header from "../Containers/Header/Header";
import Footer from "../Containers/Footer/Footer";
import Main from '../Containers/Main/Main'

const Layout = () => {
  return (
    <div className={classes.container}>
      <Header className={classes.header}/>
      <Main className={classes.Main}/>
      <Footer className={classes.footer}/>
    </div>
  );
};

export default Layout;
