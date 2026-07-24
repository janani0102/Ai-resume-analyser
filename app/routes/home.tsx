
import type { Route} from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMate" },
    { name: "description", content: "Land more Interviews with me. I'll optimize your resume in seconds" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
<section className="main-section">
  <div className="page-heading">
    <h1>Track your Applications <br/>& Resume Ratings</h1>
    <h2>Transform your resume with instant Ai-powered feedback</h2>
  </div>

</section>
  </main>
}
