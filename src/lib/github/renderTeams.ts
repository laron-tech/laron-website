export async function renderTeams(): Promise<void> {
  let teamRes = await fetch('https://api.github.com/orgs/laron-tech/members');
  let teamData = await teamRes.json();

  let teamContainer = document.createElement('div');
  teamContainer.classList.add('grid', 'grid-flow-row', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-4', 'mt-8');

  teamData.forEach(async (member: any) => {
    let memberRes = await fetch(member.url);
    let memberData = await memberRes.json();

    let card = document.createElement('div');
    card.classList.add('px-2', 'py-8', 'rounded-lg', 'bg-gray-800', 'flex', 'flex-col', 'items-center');
    let img = document.createElement('img');
    img.classList.add('rounded-full', 'mx-auto', 'w-1/3', 'object-cover');
    img.src = memberData.avatar_url;
    img.alt = memberData.name;
    let name = document.createElement('p');
    name.classList.add('text-center', 'text-white', 'font-bold', 'mt-2', 'text-lg');
    name.innerText = memberData.name;
    let link = document.createElement('a');
    link.classList.add('text-center', 'text-orange-600', 'mt-2', 'underline', 'decoration-orange-600');
    link.href = memberData.blog || memberData.html_url;
    link.target = '_blank';
    link.innerText = memberData.blog || memberData.html_url;
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(link);
    teamContainer.appendChild(card);
  });
  document.querySelector('#core-team .inner')?.appendChild(teamContainer);
}
