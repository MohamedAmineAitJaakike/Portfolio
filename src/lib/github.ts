export const GITHUB_OWNER = "MohamedAmineAitJaakike";

async function ghFetch(path: string) {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (token) headers["Authorization"] = `token ${token}`;

  try {
    const res = await fetch(`https://api.github.com${path}`, { headers });
    if (!res.ok) {
      console.warn(`GitHub API warning: ${res.status} ${res.statusText} for ${path}`);
      return null;
    }
    return res.json();
  } catch (error) {
    console.warn(`GitHub API fetch error for ${path}:`, error instanceof Error ? error.message : String(error));
    return null;
  }
}

export async function getGithubRepos(includeReadme: boolean = true) {
  const repos = await ghFetch(`/users/${GITHUB_OWNER}/repos?per_page=100&type=owner&sort=updated`);
  
  if (!repos || !Array.isArray(repos)) {
    console.warn("GitHub API returned no repos, returning empty array");
    return [];
  }

  // Fetch languages, README for each repo in parallel
  const enriched = await Promise.all(
    repos.map(async (r: any) => {
      const langs = await ghFetch(`/repos/${GITHUB_OWNER}/${r.name}/languages`).catch(() => null);
      const languages = Object.keys(langs || {});

      let readme: string | undefined = undefined;
      if (includeReadme) {
        try {
          const readmeRes: any = await ghFetch(`/repos/${GITHUB_OWNER}/${r.name}/readme`);
          if (readmeRes && readmeRes.content) {
            const buff = Buffer.from(readmeRes.content, readmeRes.encoding || "base64");
            readme = buff.toString("utf8").substring(0, 300); // First 300 chars as preview
          }
        } catch (e) {
          // ignore
        }
      }

      return {
        id: r.id,
        name: r.name,
        description: r.description || "",
        html_url: r.html_url,
        languages,
        stargazers_count: r.stargazers_count || 0,
        readme,
        fork: r.fork || false,
        archived: r.archived || false,
      };
    }),
  );

  // Keep only relevant, non-fork, non-archived
  return enriched.filter((r) => !r.fork && !r.archived).sort((a, b) => b.stargazers_count - a.stargazers_count);
}

export async function getGithubRepoDetails(repoName: string) {
  const r = await ghFetch(`/repos/${GITHUB_OWNER}/${repoName}`);
  
  if (!r) {
    // Return a default object if API fails
    return {
      id: 0,
      name: repoName,
      full_name: `${GITHUB_OWNER}/${repoName}`,
      description: "Project details unavailable",
      html_url: `https://github.com/${GITHUB_OWNER}/${repoName}`,
      homepage: null,
      stargazers_count: 0,
      languages: [],
      readme: null,
    };
  }
  
  const langs = await ghFetch(`/repos/${GITHUB_OWNER}/${repoName}/languages`).catch(() => null);
  // try README
  let readme = null;
  try {
    const readmeRes: any = await ghFetch(`/repos/${GITHUB_OWNER}/${repoName}/readme`);
    if (readmeRes && readmeRes.content) {
      const buff = Buffer.from(readmeRes.content, readmeRes.encoding || "base64");
      readme = buff.toString("utf8");
    }
  } catch (e) {
    // ignore
  }

  return {
    id: r.id,
    name: r.name,
    full_name: r.full_name,
    description: r.description || "",
    html_url: r.html_url,
    homepage: r.homepage || null,
    stargazers_count: r.stargazers_count || 0,
    languages: Object.keys(langs || {}),
    readme,
  };
}

export default getGithubRepos;
