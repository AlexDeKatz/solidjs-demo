import { repos, setUsername, username } from "../App";
import styles from "../styles/custom.module.css";
import classNames from "classnames";
import { For } from "solid-js";
import RepoCard from "../components/RepoCard";

function Home() {
  const fetchWithUsername = (event) => {
    event.preventDefault();
    const usernameInput = document.querySelector("#usernameInput");
    setUsername(usernameInput.value);
  };

  return (
    <div>
      <form class="mb-3" onSubmit={(event) => fetchWithUsername(event)}>
        <input
          type="text"
          class="p-1 align-middle border-solid border-black border-2"
          id="usernameInput"
          required
        />
        <button class={classNames(styles["btn-dark"], "ms-3", "w-auto")}>
          Fetch
        </button>
      </form>
      <h3>Github repos for {username()}</h3>
      <For each={repos()}>{(repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
}
export default Home;
