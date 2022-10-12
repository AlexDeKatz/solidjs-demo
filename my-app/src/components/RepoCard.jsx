import { savedRepos, setSavedRepos } from "../pages/SavedRepos";
import style from "../styles/custom.module.css";

const savedRepo = (repo) => {
  setSavedRepos([repo, ...savedRepos()]);
  sessionStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const unSaveRepo = (repoId) => {
  const filteredRepo = savedRepos()?.filter((item) => item.id !== repoId);
  setSavedRepos(filteredRepo);
  sessionStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const isRepoSaved = (repoId) =>
  savedRepos()?.filter((item) => item.id === repoId)?.length > 0;

const RepoCard = ({ repo }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </div>
        <p class="text-gray-700 text-base">{repo.description}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          &#11088; stars: {repo.stargazers_count}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          owner: {repo?.owner?.login}
        </span>
      </div>
      <div>
        {isRepoSaved(repo.id) ? (
          <button class={style["btn-red"]} onClick={() => unSaveRepo(repo.id)}>
            Unsave
          </button>
        ) : (
          <button class={style["btn-active"]} onClick={() => savedRepo(repo)}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};
export default RepoCard;
