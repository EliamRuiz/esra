import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const sections = [
    {
      id: "1",
      title: "Hunter/Spearo",
      image: "./spearo.jpeg",
      text: "Spearfishing isn't just a sport for me—it's a way of life. The ocean is my second home, where adventure meets serenity. I live for the thrill of freediving, gliding silently through the water, and becoming one with the marine world. Boating out at sunrise, sharing the sea with family, and respecting the life I take—this is what fuels my passion. Every catch is an honor, every meal a reminder of the hunter's deep connection to food. I truly believe everyone should hunt and eat something at least once in their life—to understand nature's cycle firsthand. I also collaborate on my brother's spearfishing YouTube channel, 'Nos Vemos en el agua', where we share our love for the ocean, epic dives, and the stories behind every catch. Dive in and join the adventure! 🌊🐟",
    },
    {
      id: "2",
      title: "Devout Christian",
      image: "./church.jpeg",
      text: "My life is centered on Christ, my Savior, who has given me purpose, hope, and the strength to pursue holiness in all I do. My faith isn't just something I believe—it's how I live. I strive to honor God in every aspect of my life, appreciating the gift of life and recognizing the deep value of every human being. Being a Christian has shaped me in countless ways. It has given me the opportunity to grow as a public speaker, participate in Bible studies, and take on leadership roles—both in my local church and on a national level as a youth leader. But more than anything, it has taught me the importance of serving others. Whether it's helping the homeless, mentoring young people, or simply being there for those in need, I believe that faith is meant to be lived out in action. My mission is to love, lead, and serve, always pointing back to the One who made it all possible.",
    },
    {
      id: "3",
      title: "Casual Gamer",
      image: "./gaming.jpeg",
      text: "I started gaming in my teens, mostly grinding first-person shooters on consoles back in the day. Fast forward to adulthood, and I built my own PC with a simple setup: 3070ti, i5 12600kf, 16GB RAM, and a 1TB SSD—nothing too fancy, but it gets the job done. These days, I don't game as much as I used to. It's more about hanging out and playing with friends now, rather than focusing on a specific game. Still, multiplayer shooters are where I feel most at home. It's all about the fun, the team vibes, and just enjoying the game together.",
    },
    {
      id: "4",
      title: "Sci-Fi fan",
      image: "./ashoka.jpg",
      text: "I'm all about sci-fi movies, and Star Wars holds a special place in my heart—especially The Clone Wars animated series. Ahsoka Tano's character arc is hands down my favorite, though Anakin and Obi-Wan are still my favorites from the OG and Prequels. When it comes to Avatar, I know some call it 'blue people Pocahontas', but for me, the world of Pandora is absolutely mesmerizing—James Cameron nailed it. While sci-fi is my jam, I'm a huge movie lover in general and always appreciate good cinematography, except maybe horror. A great film is a work of art!",
    },
  ];

  const [currentImage, setCurrentImage] = useState(sections[0].image);
  const sectionRefs = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      let minDistance = Infinity;
      let closestImage = sections[0].image;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top - 100); // Offset for accuracy

          if (distanceFromTop < minDistance) {
            minDistance = distanceFromTop;
            closestImage = sections[index].image;
          }
        }
      });

      if (closestImage !== currentImage) {
        setCurrentImage(closestImage);
      }
    };

    const scrollContainer = contentRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Run once on mount
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currentImage]);

  return (
    <div className="relative flex flex-col md:flex-row sm:flex-row h-screen overflow-hidden">
      {/* Dynamic Image Section (Left Side) */}
      <div className="w-full sm:w-1/2 h-screen flex items-center justify-center bg-slate-300">
        <motion.img
          key={currentImage}
          src={currentImage}
          alt="Dynamic Section Image"
          className="w-full h-auto max-w-[300px] sm:max-w-[450px] max-h-[350px] sm:max-h-[600px] object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Scrollable Text Section (Right Side) */}
      <div className="w-full sm:w-1/2 h-screen p-6 overflow-hidden">
        <div
          ref={contentRef}
          className="h-full overflow-y-auto bg-white bg-opacity-90 shadow-lg rounded-lg p-6 snap-y snap-mandatory"
        >
          <h1 className="text-6xl text-center font-bold text-gray-700 justify-center">
            About Me...
          </h1>
          <div className="flex justify-center">
            <img
              src="./arrow.png"
              alt="Description"
              className="w-12 h-12 object-cover rounded-lg shadow-lg mt-20"
            />
          </div>
          {/* Scrollable Sections */}
          <div className="pt-24">
            {sections.map((section, index) => (
              <div className="min-h-screen flex justify-center align-middle">
                <div
                  key={section.id}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="flex flex-col px-4 py-6 bg-gray-100 rounded-lg shadow-md lg:snap-center md:snap-center  mx-4 my-6 w-fit max-w-full h-fit"
                >
                  <h2 className="text-2xl font-semibold text-gray-700">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{section.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
