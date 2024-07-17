import React, { useState } from 'react';
import { Text } from '@visx/text';
import { scaleLog } from '@visx/scale';
import { Wordcloud } from '@visx/wordcloud';

const colors = ['#143059', '#2F6B9A', '#82a6c2'];

const wordFreq = (text) => {
  const words = text.replace(/[^a-zA-Z\s]/g, '').toLowerCase().split(/\s+/);
  const freqMap = {};

  words.forEach(word => {
    if (word) {
      freqMap[word] = (freqMap[word] || 0) + 1;
    }
  });

  return Object.entries(freqMap).map(([text, value]) => ({ text, value }));
};

const WordCloud = ({ height }) => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const resumeText = `
    CAMERON ANGELERI | +1 509 995 0242 | Seattle, WA 98109 | cam.angeleri@gmail.com | LinkedIn URL | GitHub URL
    PROFILE
    Full Stack Developer expertise creating scalable web applications. Strong proficiency JavaScript, Python, C#, frameworks  React, Flask, Node.js. Skilled database management MySQL, MongoDB. Passionate user experience design, project management, agile methodologies.

    TECHNICAL SKILLS
    • Programming Languages: JavaScript, Python, C#, Java
    • Frontend: React, Tailwind CSS, Bootstrap, HTML, CSS
    • Backend: Node.js, Express, Flask
    • Databases: MySQL, MongoDB, NoSQL
    • Tools: GitHub, VSCode, Figma, Canva, Microsoft 365, SalesForce
    • Methodologies: Agile, Scrum, Project Management

    TECHNICAL PROJECTS
    • PETMATCH: Full-Stack Application connecting pet adopters rescue animals. Technologies: Node.js, Express, MongoDB, React.
    • DREAM MARKET: Flask application showcasing products Stripe integration. Focused mobile UX, responsive design.
    • ANGELERI ART MUSEUM: SPA featuring artworks from Metropolitan Museum of Art. Implemented accessible design principles, RESTful APIs.
    Single Page Applications React

    PROFESSIONAL EXPERIENCE
    • Trauma-Informed Yoga Instructor: Designed e-commerce website, increasing traffic establishing profitable business.
    • Sales Development Representative at DocuSign: Managed CRM tools, drove sales initiatives, engaged stakeholders.
    • Account Manager at Williams Sonoma Inc: Led corporate rebranding, enhanced team productivity, achieved significant sales growth.

    EDUCATION
    Full-Stack Coding Bootcamp | Coding Dojo | Seattle, WA
    Skills: Python, Flask, JavaScript, Node.js, MongoDB, React, C#.
  `;

  const words = wordFreq(resumeText);

  const fontScale = scaleLog({
    domain: [Math.min(...words.map(w => w.value)), Math.max(...words.map(w => w.value))],
    range: [10, 100],
  });

  const fontSizeSetter = (datum) => fontScale(datum.value);

  return (
    <div className="wordcloud" style={{ width: '100%', height }}>
      <Wordcloud
        words={words}
        width={window.innerWidth} // Use window width to ensure full width
        height={height}
        fontSize={fontSizeSetter}
        font="Impact"
        padding={2}
        spiral="archimedean"
        rotate={0}
        random={() => 0.5}
      >
        {(cloudWords) =>
          cloudWords.map((w, i) => (
            <Text
              key={w.text}
              fill={hoveredWord === w.text ? '#e1ad01' : colors[i % colors.length]} 
              textAnchor="middle"
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
              fontSize={w.size}
              fontFamily={w.font}
              onMouseEnter={() => setHoveredWord(w.text)} // Set hovered word
              onMouseLeave={() => setHoveredWord(null)} // Reset hovered word
              onClick={() => alert(`You clicked on: ${w.text}`)} // Click event
            >
              {w.text}
            </Text>
          ))
        }
      </Wordcloud>
      <style jsx>{`
        .wordcloud {
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        .wordcloud svg {
          margin: 1rem 0;
          cursor: pointer;
          width: 100%; /* Fill container width */
        }
      `}</style>
    </div>
  );
};

export default WordCloud;
