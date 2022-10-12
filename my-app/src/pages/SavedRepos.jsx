import { createSignal, For } from "solid-js";
import RepoCard from "../components/RepoCard";

const reposFromLocalStorage = JSON.parse(
  sessionStorage.getItem("savedRepos") || "[]"
);
const [savedRepos, setSavedRepos] = createSignal(reposFromLocalStorage);

function SavedRepos() {
  return (
    <div>
      <h2>Your saved Repos</h2>
      <For each={savedRepos()}>{(repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
}

export { setSavedRepos, savedRepos };
export default SavedRepos;
