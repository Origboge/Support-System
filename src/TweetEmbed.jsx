// src/TweetEmbed.jsx

import React, { useEffect } from 'react';

// The function provided by the Twitter widget script to render the tweets
const loadTwitterWidgets = () => {
  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load();
  }
};

const TweetEmbed = ({ tweetId }) => {
  useEffect(() => {
    // ... (Script loading logic remains the same)
    if (!document.getElementById('twitter-wjs')) {
      const script = document.createElement('script');
      script.id = 'twitter-wjs';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = loadTwitterWidgets;
      document.body.appendChild(script);
    } else {
      loadTwitterWidgets();
    }
  }, [tweetId]);

  const tweetUrl = `https://twitter.com/i/status/${tweetId}`;
  
  // src/TweetEmbed.jsx (The core return statement)

// ...
  return (
    <div className="w-full"> 
        <blockquote 
            className="twitter-tweet" 
            data-dnt="true"
            data-theme="dark" // ✅ Must be here
            data-conversation="none" // Removes replies/context
            // OPTIONAL: You can try adding a dark link color
            // data-link-color="#8b5cf6" // Tailwind's purple-500
        >
            <a href={tweetUrl}>Loading Tweet...</a>
        </blockquote>
    </div>
  );
// ...
};

export default TweetEmbed;