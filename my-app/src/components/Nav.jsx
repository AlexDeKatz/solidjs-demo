import { NavLink } from "solid-app-router";
import styles from "../styles/custom.module.css";
import classNames from "classnames";
import { savedRepos } from "../pages/SavedRepos";

const Nav = () => {
  return (
    <nav class="mt-5 mb-3">
      <NavLink
        href="/"
        end
        class={styles["btn-blue"]}
        activeClass={styles["btn-active"]}
      >
        Home
      </NavLink>
      <NavLink
        href="savedrepos"
        class={classNames("ml-4", styles["btn-blue"])}
        activeClass={styles["btn-active"]}
      >
        Saved ~ {savedRepos()?.length}
      </NavLink>
    </nav>
  );
};

export default Nav;
