import gitHubReposService from "@services/gitHubReposService";
import formatGitHubDate from "@utils/formatGitHubDate";

async function getGitHubRepos(username: string): Promise<any> {
  const repos = await gitHubReposService(username);
  const filteredRepos = repos.filter((repo: any) => repo.homepage && repo.homepage !== "");
  const sortedRepos = filteredRepos.sort((repoA: any, repoB: any) => new Date(repoB.created_at).getTime() - new Date(repoA.created_at).getTime());
  const repostList = filteredRepos.slice(0, 6); 

  const formattedRepos = repostList.map((repo: any) => ({
    name: repo.name,
    description: repo.description || 'No description provided',
    date: formatGitHubDate(repo.created_at),
    image: `https://raw.githubusercontent.com/${username}/${repo.name}/main/public/screenshot.png`,
    stars: repo.stargazers_count,
    repoUrl: repo.html_url,
    demoUrl: repo.homepage,
  }));

  return formattedRepos;
}

export default getGitHubRepos;