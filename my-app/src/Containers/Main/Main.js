import React from "react";
import classes from "./Main.module.scss";
import {Search} from "../../Components/Search/Search";

const Main = () => {
  return (
    <main className={classes.Main}>
      <Search />
    </main>
  );
};

export default Main;
