import {
  createBrowserRouter,
  Link,
  NavLink,
  Outlet,
  useRouteError,
} from "react-router";

const biographies = [
  {
    name: "Asher",
    role: "Drums",
    number: "01",
    text: "Asher is a drummer based in Melbourne, Australia, who first fell in love with music through his dad’s collection of 1980s and 1990s artists such as 2Pac, 50 Cent and Michael Jackson. Listening to those tracks created a powerful feeling in his chest that made him want to get up and dance, and he now aims to recreate that same joyful energy for other people. He is drawn to rap and trap because of the inspiring lyrics with deep meanings and the strong, driving background music. His main influences include Drake, J. Cole and Frank Ocean. Looking ahead, Asher wants to improve at creating catchy drum backgrounds, record and release an album of more than ten songs, and eventually tour the world while collaborating with three well-known artists. He currently plays drums in a trio with Tiara on piano and Yash on guitar.",
  },
  {
    name: "Tiara / Kasaria",
    role: "Piano",
    number: "02",
    text: "Tiara, also known as Kasaria, is a pianist from Melbourne, Australia, whose earliest musical memories come from her parents playing their favourite albums on the family CD player. As a toddler she would dance along all day, and Disney movie soundtracks later sparked her interest in singing. In June 2022 she discovered the rhythm game Hatsune Miku: Colorful Stage (Project Sekai), which completely transformed her relationship with music and inspired her to start singing and covering songs. She enjoys a wide range of J-Pop and Vocaloid tracks, choosing upbeat songs when she feels happy and calmer or metal-influenced tracks when she feels down. Her key influences include Kuriyama Yuri (Hachiya Nanashi), YurryCanon, nutlut and MICO. Tiara’s next goals are to improve her mixing skills and vocal potential, finish current cover projects, and grow through TikTok and collaborations with other musicians. She plays piano in a group with Asher on drums and Yash on guitar.",
  },
  {
    name: "Yash",
    role: "Guitar",
    number: "03",
    text: "Yash is a guitarist who grew up in Canada and first connected with music at family gatherings where acoustic guitar was always present. Early exposure to classic rock and folk records sparked a lasting curiosity that became a daily habit once he received his first electric guitar in his early teens. He mainly creates guitar-driven indie rock and alternative music with folk influences, balancing clean tones with grit or overdrive and moving freely between fingerpicking and fuller chords. The music he listens to and the music he makes feed into each other, keeping his style grounded in feel rather than polish. His core influences include John Mayer, Arctic Monkeys, Radiohead and older classic rock. Looking ahead, Yash wants to improve his home recording and mixing skills, finish and release a few original tracks or a short EP, and play more local shows around Canada while collaborating with other musicians. He currently plays guitar alongside Asher on drums and Tiara on piano.",
  },
];

const mainNav = [
  { label: "Home", to: "/" },
  { label: "Biography", to: "/biography" },
  { label: "Songs", to: "/songs" },
  { label: "Members", to: "/members" },
];

function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="backdrop-title" aria-hidden="true">
        (Moonlight Hour)
      </div>
      <div className="site-frame">
        <header className="site-header">
          <nav aria-label="Primary navigation" className="primary-nav">
            {mainNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <nav aria-label="Secondary navigation" className="secondary-nav">
            <NavLink to="/launcher">Launcher</NavLink>
          </nav>
        </header>
        <Outlet />
        <footer className="bottom-bar">
          <span>Moonlight Hour</span>
          <span>McKinnon Secondary College</span>
          <span>Built for a school project</span>
          <span>Built on the Xeno Ecosystem</span>
          <Link to="/launcher">Developer Xeno ↗</Link>
        </footer>
      </div>
    </div>
  );
}

function HomePage() {
  const songs = [
    ["01", "Wham!", "Last Christmas"],
    ["02", "Marshmello & Bastille", "Happier"],
    ["03", "Traditional", "Jingle Bells"],
  ];

  return (
    <main className="home-page">
      <section className="title-stage">
        <div className="hero-photo" aria-hidden="true" />
        <p className="hero-kicker">School Performance Project</p>
        <h1>
          Moonlight
          <br />
          Hour
        </h1>
        <p className="hero-tagline">Drums · Piano · Guitar</p>
      </section>

      <section className="welcome-section">
        <div className="section-label">
          <span>01</span>
          <p>Who we are</p>
        </div>
        <div className="welcome-copy">
          <p>
            We are a student trio from McKinnon Secondary College working on
            our Musical Futures performance project.
          </p>
          <p>
            Made up of drums, piano and guitar, we are currently preparing a
            set of songs for our end-of-semester performance.
          </p>
        </div>
      </section>

      <section className="home-songs">
        <div className="section-label">
          <span>02</span>
          <p>Our songs</p>
        </div>
        <div className="home-song-list">
          {songs.map(([number, artist, title]) => (
            <Link to="/songs" key={title} className="home-song-row">
              <span>{number}</span>
              <p>{artist}</p>
              <h2>{title}</h2>
              <span>View ↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-members">
        <div className="section-label">
          <span>03</span>
          <p>Meet the band</p>
        </div>
        <div className="home-member-grid">
          {biographies.map((person) => (
            <Link to="/biography" key={person.name} className="home-member-card">
              <span>{person.number}</span>
              <div>
                <p>{person.role}</p>
                <h2>{person.name}</h2>
              </div>
              <p>
                {person.role === "Drums" &&
                  "Driving rhythm, energy and the pulse of the trio."}
                {person.role === "Piano" &&
                  "Melody, harmony and atmosphere from behind the keys."}
                {person.role === "Guitar" &&
                  "Guitar texture shaped by indie, folk and classic rock."}
              </p>
              <span>Biography ↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function BiographyPage() {
  return (
    <Page title="Biography" index="01">
      <div className="biography-list">
        {biographies.map((person) => (
          <article className="biography-entry" key={person.name}>
            <div className="bio-heading">
              <span>{person.number}</span>
              <div>
                <h2>{person.name}</h2>
                <p>{person.role}</p>
              </div>
            </div>
            <p className="bio-copy">{person.text}</p>
          </article>
        ))}
      </div>
    </Page>
  );
}

function SongsPage() {
  const songs = [
    ["01", "Last Christmas", "04:26"],
    ["02", "Happier", "03:27"],
    ["03", "Jingle Bells", "03:14"],
  ];

  return (
    <Page title="Songs" index="02">
      <div className="track-list">
        {songs.map(([number, title, duration]) => (
          <div className="track-row" key={title}>
            <span>{number}</span>
            <h2>{title}</h2>
            <span>Moonlight Hour</span>
            <span>{duration}</span>
          </div>
        ))}
      </div>
    </Page>
  );
}

function MembersPage() {
  return (
    <Page title="The Artists" index="03">
      <div className="member-grid">
        {biographies.map((person) => (
          <Link to="/biography" className="member-card" key={person.name}>
            <span>{person.number}</span>
            <div>
              <p>{person.role}</p>
              <h2>{person.name}</h2>
            </div>
            <span>Read biography ↗</span>
          </Link>
        ))}
      </div>
    </Page>
  );
}

function LauncherPage() {
  const socialLinks = [
    ["GitHub", "https://github.com/DeveloperXeno"],
    ["Website", "https://developerxeno.vercel.app"],
    ["X / Twitter", "https://x.com/DeveloperXeno"],
    ["YouTube", "https://www.youtube.com/@developerxeno"],
  ];

  return (
    <Page title="Launcher" index="04">
      <div className="launcher-intro">
        <p>
          This experience is built upon the Xeno Launcher and the wider Xeno
          ecosystem under Developer Xeno.
        </p>
        <span>Explore the project and follow its development.</span>
      </div>
      <div className="social-list">
        {socialLinks.map(([label, href], index) => (
          <a href={href} target="_blank" rel="noreferrer" key={label}>
            <span>0{index + 1}</span>
            <h2>{label}</h2>
            <span>{href.replace("https://", "")}</span>
            <span>Visit ↗</span>
          </a>
        ))}
      </div>
    </Page>
  );
}

function Page({
  title,
  index,
  children,
}: {
  title: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <main className="inner-page">
      <div className="page-heading">
        <span>{index} / 04</span>
        <h1>{title}</h1>
      </div>
      {children}
    </main>
  );
}

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <main className="error-page">
      <p>404</p>
      <h1>Page not found.</h1>
      <Link to="/">Return home</Link>
    </main>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SiteLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },
      { path: "biography", Component: BiographyPage },
      { path: "songs", Component: SongsPage },
      { path: "members", Component: MembersPage },
      { path: "launcher", Component: LauncherPage },
    ],
  },
]);
