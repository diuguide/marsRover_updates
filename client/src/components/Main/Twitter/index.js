import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Twitter = () => {
  return (
    <div className="twitter-container">
      <div className="twitter-post">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="NASAPersevere"
          options={{ height: 400, tweetLimit: 5 }}
        />
      </div>
    </div>
  );
};
export default Twitter;
