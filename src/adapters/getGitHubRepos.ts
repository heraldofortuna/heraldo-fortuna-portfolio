import gitHubReposService from "@services/gitHubReposService";

async function getGitHubRepos(username: string): Promise<any> {
  const repos = await gitHubReposService(username);
  if (!Array.isArray(repos)) {
    return [];
  }
  const filteredRepos = repos.filter((repo: any) => repo.homepage && repo.homepage !== "");
  const sortedRepos = filteredRepos.sort((repoA: any, repoB: any) => new Date(repoB.created_at).getTime() - new Date(repoA.created_at).getTime());
  const repostList = sortedRepos.slice(0, 6); 

  const formattedRepos = repostList.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    createdAt: repo.created_at,
    image: `https://raw.githubusercontent.com/${username}/${repo.name}/main/public/screenshot.png`,
    stars: repo.stargazers_count,
    repoUrl: repo.html_url,
    demoUrl: repo.homepage,
  }));

  return formattedRepos;
}

export default getGitHubRepos;