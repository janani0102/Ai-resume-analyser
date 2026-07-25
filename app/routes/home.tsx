
import type { Route} from "./+types/home";
import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import {resumes} from "../../constants";
import {usePuterStore} from "~/lib/puter";
import {useEffect,useState} from "react";
import {Link, useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMate" },
    { name: "description", content: "Land more Interviews with me. I'll optimize your resume in seconds" },
  ];
}

export default function Home() {
    const {auth}=usePuterStore();
    const navigate = useNavigate();

    useEffect(()=>{
      if(!auth.isAuthenticated) navigate("/auth?next=/");
    },[auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section  py-15">
      <div className="page-heading">
        <h1>Track your Applications <br/>& Resume Ratings</h1>
        <h2>Transform your resume with instant Ai-powered feedback</h2>
      </div>
      {
          resumes.length>0 && (
              <div className="resumes-section">
                {resumes.map((resume)=>(
                    <ResumeCard key={resume.id} resume={resume} />


                ))}
              </div>
          )}
    </section>

  </main>
}
