"use client";
import React from "react";
import ReactPlayer from "react-player/lazy";

export default function page() {
  const options = {
    height: "auto",
    width: "100%",
    playerVars: {
      controls: 0,
    },
  } as const;
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="text-5xl bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-purple-700 to-red-700 py-10 text-center">
        Video Played
      </div>
      {/* // url="https://www.youtube.com/watch?v=LXb3EKWsInQ" */}
      <div className="border">
        {/* <ReactPlayer
          className="trailer-player flex items-center justify-end"
          style={{ width: "100vw" }}
          url={`http://www.youtube.com/embed/LXb3EKWsInQ?showinfo=0`}
          playing={false}
          controls={false}
        /> */}

        {/* <iframe
          width="500"
          height="294"
          src="https://www.youtube.com/embed/YykjpeuMNEk?rel=0&modestbranding=1&fs=0&showinfo=0,"
        ></iframe> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z6ytvzNlmRo?rel=0&controls=1&amp&showinfo=0&modestbranding=0&fs=0"
        ></iframe>`,
          }}
        />
      </div>
    </div>
  );
}
