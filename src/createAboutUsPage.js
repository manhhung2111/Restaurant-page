export function createAboutUsContent() {
  let title = createTitle();
  let script = createScript();
  return { title, script };
}

function createTitle() {
  const title = document.createElement("div");
  title.textContent = "About Us";
  title.classList.add("about-us-title");
  return title;
}

function createScript() {
  const script = document.createElement("div");
  script.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, in
    laudantium ad molestias laboriosam voluptatum sint accusamus nobis illum
    quam, eius nulla rerum eligendi minus iusto unde modi ab fugit.
    <br />
    Esse nihil eveniet repudiandae aliquam labore sed iusto, animi impedit
    qui nobis minima corrupti quidem molestiae alias excepturi neque error
    saepe dolorem ut? Officia, pariatur enim praesentium voluptas sunt
    temporibus? Repellat, maiores eius fuga molestias hic in vel dolor
    cupiditate velit corrupti ea reiciendis inventore nostrum consectetur
    dolorum quis voluptas eum? Laudantium harum voluptatem nesciunt dicta
    maiores culpa similique quidem! Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Quis beatae quia aspernatur quae aut, nostrum
    reprehenderit dicta dignissimos, quas ipsam explicabo sequi rem?
    Corporis adipisci voluptas a modi maiores rem! Ipsa, dicta iste iure
    porro placeat quibusdam vero magni nisi laboriosam veniam, nesciunt enim
    similique temporibus iusto corrupti, est laudantium provident quasi.
    <br />Autem facere quibusdam earum iste adipisci ad quos! Alias cumque
    numquam omnis, labore architecto animi perferendis, nam dolorum nemo,
    nihil cupiditate rem distinctio! Eligendi blanditiis, vel laboriosam
    quisquam amet corporis nulla hic? Perferendis veniam quas sapiente ab
    quis.`;
    script.classList.add('about-us-script');
    return script;
}
