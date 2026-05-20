"use client"; // 🚀 এখানে ছোট হাতের অক্ষরে পারফেক্ট ডিরেক্টিভ দেওয়া হয়েছে

import React, { useState } from "react";
import Image from "next/image";

const TutorImage = ({ photoUrl, tutorName, styles, initials }) => {
  const [isError, setIsError] = useState(false);

  let finalSrc = photoUrl;

  // ImgBB ইউআরএল ব্যাকআপ লজিক
  if (finalSrc && finalSrc.includes("ibb.co") && !finalSrc.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
    const urlParts = finalSrc.split("/");
    const imageId = urlParts[urlParts.length - 1] || urlParts[urlParts.length - 2];
    finalSrc = `https://i.ibb.co/${imageId}/image.png`;
  }

  const hasImage = finalSrc && !isError;

  return (
    <>
      {hasImage ? (
        <Image
          src={finalSrc}
          alt={tutorName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top z-10 bg-white group-hover:scale-105 transition-transform duration-300"
          priority={false}
          unoptimized
          onError={() => setIsError(true)} // 🛠️ ক্লায়েন্ট সাইড ইভেন্ট হ্যান্ডলার
        />
      ) : null}

      {/* ব্যাকআপ ইনিশিয়াল টেক্সট */}
      <h2
        style={{ display: hasImage ? "none" : "block" }}
        className={`text-4xl font-black tracking-wider ${styles.text} absolute z-0 select-none`}
      >
        {initials}
      </h2>
    </>
  );
};

export default TutorImage;