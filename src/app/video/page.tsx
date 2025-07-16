// pages/index.tsx
import React from "react";
import Head from "next/head";
import {
  Medal,
  Handshake,
  MessageCircle,
  Bell,
  Hand,
  ThumbsUp,
  Trophy,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

type VideoData = {
  title: string;
  url?: string; // If it's a YouTube embed or video URL
  icon: JSX.Element;
};

const videoGroups: VideoData[][] = [
  [
    {
      title: "Great Achievement by Bansal Alumni Smriti Bhardwaj",
      url: "",
      icon: <Medal />,
    },
    {
      title: "JEE ADVANCED Topper Mridul Agarwal AIR 1 2021",
      url: "",
      icon: <Medal />,
    },
    {
      title: "Topper Harshvardhan Agarwal AIR 9 in JEE ADVANCED 2020",
      url: "",
      icon: <Medal />,
    },
  ],
  [
    {
      title: "Victory Celebration and Road show at Latur, Maharashtra",
      url: "",
      icon: <Hand />,
    },
    {
      title:
        "Remembering Shri V.K. Bansal Sir on his Birth Anniversary | 26th October",
      url: "https://",
      icon: <Bell />,
    },
    {
      title: "Sameer Sir’s Reinstating Teachings of Bansal Sir",
      url: "",
      icon: <Handshake />,
    },
  ],
  [
    {
      title:
        "Bansal Open Opportunity & Scholarship Test For JEE | NEET | 2023-2024",
      url: "",
      icon: <ThumbsUp />,
    },
    {
      title: "Thank You! message By Shiv Bharuka (AIR 253 JEE ADV 2021)",
      url: "",
      icon: <Handshake />,
    },
    {
      title: "Felicitation Function 2023",
      url: "",
      icon: <Trophy />,
    },
  ],
  [
    {
      title: "Parent’s Review, Rishiya Mittal Mother of Manan Mittal",
      url: "https://www.bansal.ac.in/wp-content/uploads/2024/07/Honest-Parent-Review-Meet-Rishiya-Mittal-Mother-of-Manan-Mittal-who-studing-in-JEE.mp4#t=1",
      icon: <MessageCircle />,
    },
    {
      title: "Honest review from student of 2016 batch",
      url: "https://www.bansal.ac.in/wp-content/uploads/2024/07/Honest-Student-Review-Meet-Tejaswini-Agarwal-Ex.-Bansalite.mp4#t=1",
      icon: <MessageCircle />,
    },
    {
      title:
        "Parent's Honest Review, Meet Sarika Totla Mother of Bhushan Totla",
      url: "https://www.bansal.ac.in/wp-content/uploads/2024/07/Honest-Parent-Review-Meet-Sarika-Totla-Mother-of-Bhushan-Totla-who-studing-in-JEE.mp4#t=1",
      icon: <MessageCircle />,
    },
  ],
];

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Video Gallery</title>
      </Head>

      {/* Banner */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4">Video Gallery</h1>
        <p className="lead">A Day in the Life: Experience Bansal Classes</p>
      </div>

      <div className="container my-5">
        <h3 className="text-center mb-4 fw-bold">
          The Bansal Journey: Transforming Education
        </h3>

        {videoGroups.map((group, idx) => (
          <div className="row mb-5 justify-content-center" key={idx}>
            {group.map((video, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 border-primary shadow-sm">
                  <div className="text-center pt-2">
                    <div className="border border-primary rounded-circle d-inline-block p-2 mb-2">
                      {video.icon}
                    </div>
                  </div>
                  <div className="ratio ratio-16x9">
                    {video.url?.includes("youtube") ||
                    video.url?.includes("embed") ? (
                      <iframe
                        src={video.url}
                        title={video.title}
                        allowFullScreen
                        className="rounded"
                      />
                    ) : (
                      <video controls className="rounded w-100 h-100">
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                  <div className="card-body">
                    <p className="card-text text-center">{video.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
