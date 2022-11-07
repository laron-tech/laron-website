const base = "https://api.github.com/orgs/laron-tech/members";

export interface Person {
  login: string;
  name?: string;
  avatar_url: string;
  url: string;
}

export async function getMembers(): Promise<Person[]> {
  const response = await fetch(base);
  const data = await response.json();
  let members: Person[] = [];
  for (let member of data) {
    let res = await fetch(member.url);
    let data = await res.json();
    members.push({
      login: data.login,
      name: data.name,
      avatar_url: data.avatar_url,
      url: data.blog || data.html_url,
    });
  }
  return members;
}
