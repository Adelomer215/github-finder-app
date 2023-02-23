const VITE_REACT_APP_GITHUB_TOOKEN = "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";
const VITE_GITHUB_API_URL = "https://api.github.com";

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const respons = await fetch(`${VITE_GITHUB_API_URL}/search/users?${params}`, {
    headers: { Authorization: `token ${VITE_REACT_APP_GITHUB_TOOKEN}` },
  });

  const { items } = await respons.json();
  return items;
};

export const getUser = async (login) => {
  const respons = await fetch(`${VITE_GITHUB_API_URL}/users/${login}`, {
    headers: { Authorization: `token ${VITE_REACT_APP_GITHUB_TOOKEN}` },
  });

  if (respons.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await respons.json();
    return data;
  }
};

export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const respons = await fetch(
    `${VITE_GITHUB_API_URL}/users/${login}/repos?${params}`,
    {
      headers: { Authorization: `token ${VITE_REACT_APP_GITHUB_TOOKEN}` },
    }
  );

  const data = await respons.json();
  return data;
};
