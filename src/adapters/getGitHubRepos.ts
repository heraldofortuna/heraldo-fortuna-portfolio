import gitHubReposService from "@services/gitHubReposService";
import formatGitHubDate from "@utils/formatGitHubDate";

async function getGitHubRepos(username: string): Promise<any> {
  const repos = await gitHubReposService(username);
  const filteredRepos = repos.filter((repo: any) => repo.stargazers_count > 0);
  const sortedRepos = filteredRepos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);

  const formattedRepos = sortedRepos.map((repo: any) => ({
    name: repo.name,
    description: repo.description || 'No description provided',
    date: formatGitHubDate(repo.created_at),
    image: `https://raw.githubusercontent.com/${username}/${repo.name}/main/public/screenshot.png`,
    stars: repo.stargazers_count,
    url: repo.html_url,
  }));

  return formattedRepos;
}

export default getGitHubRepos;