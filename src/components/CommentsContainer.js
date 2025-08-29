import React from "react";
const commentsData = [
  {
    name: "Steve Jobs",
    text: "This video is insanely great. Needs a black turtleneck ending though.",
    replies: [
      {
        name: "Bill Gates",
        text: "Relax Steve, not everything has to be ‘insanely great’. Sometimes it’s just... okay.",
        replies: [
          {
            name: "Elon Musk",
            text: "You two argue too much. I’ll buy YouTube and fix it. 🚀",
            replies: [
              {
                name: "Mark Zuckerberg",
                text: "Please don’t. I’m still trying to figure out legs for the Metaverse.",
                replies: [],
              },
              {
                name: "Jeff Bezos",
                text: "Guys, let’s just watch it in space. Prime delivery to orbit in 2 days.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shah Rukh Khan",
    text: "Picture abhi baaki hai mere dost! 🔥",
    replies: [
      {
        name: "Salman Khan",
        text: "Bro, at least let me do one dance sequence before the credits roll.",
        replies: [],
      },
      {
        name: "Amitabh Bachchan",
        text: "Beta, I should’ve had the voice-over intro. Respect your elders.",
        replies: [],
      },
    ],
  },
  {
    name: "Lionel Messi",
    text: "This video dribbles better than half the defenders I’ve faced.",
    replies: [
      {
        name: "Cristiano Ronaldo",
        text: "SIUUUUUU! But I’d score more likes than you, Leo.",
        replies: [
          {
            name: "Neymar Jr",
            text: "Guys, stop fighting. Let me roll around dramatically in the replies. 🤕",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Abraham Lincoln",
    text: "Four score and seven views ago, this video was uploaded…",
    replies: [
      {
        name: "Barack Obama",
        text: "Let me be clear. This is the most presidential video I’ve seen.",
        replies: [
          {
            name: "Donald Trump",
            text: "Wrong. Fake views! I would’ve made a way better video. Believe me!",
            replies: [
              {
                name: "Joe Biden",
                text: "Come on, man. Just enjoy the video. Let’s get ice cream 🍦",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Albert Einstein",
    text: "E = mc² but here it’s Entertainment = many comments² 🤯",
    replies: [],
  },
  {
    name: "Oprah Winfrey",
    text: "You get a like! You get a like! EVERYONE gets a like! 🙌",
    replies: [],
  },
  {
    name: "Michael Jackson",
    text: "Shamone! This video makes me want to moonwalk across YouTube.",
    replies: [
      {
        name: "Freddie Mercury",
        text: "Is this the real life? Is this just fantasy? Either way, great video!",
        replies: [],
      },
      {
        name: "Elvis Presley",
        text: "Thank ya, thank ya very much. I’d sing on this video if I could.",
        replies: [],
      },
    ],
  },
  {
    name: "Taylor Swift",
    text: "I’m just gonna write a breakup song about this video… it’s THAT emotional. 🎶",
    replies: [
      {
        name: "Kanye West",
        text: "Yo Taylor, I’m really happy for you… but I think Beyoncé had the best comment of all time!",
        replies: [
          {
            name: "Beyoncé",
            text: "Thank you Kanye… again 🙄",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Arnold Schwarzenegger",
    text: "I’ll be back… to watch this video again 💪",
    replies: [
      {
        name: "Sylvester Stallone",
        text: "Adriaaaan! Even Rocky thinks this video packs a punch.",
        replies: [],
      },
    ],
  },
  {
    name: "MrBeast",
    text: "Liked this video? I’ll give $10,000 to the best comment. No cap.",
    replies: [
      {
        name: "PewDiePie",
        text: "This is where I say *Brofist* ✊",
        replies: [],
      },
    ],
  },
  {
    name: "Narendra Modi",
    text: "Mitron… this video is truly *aatmanirbhar*. 🇮🇳",
    replies: [
      {
        name: "Rahul Gandhi",
        text: "I disagree… but I also don’t know why. Just vibes.",
        replies: [],
      },
    ],
  },
  {
    name: "Harry Potter",
    text: "This video is magical. 10 points to Gryffindor!",
    replies: [
      {
        name: "Voldemort",
        text: "You dare speak of Gryffindor in my comment section? Foolish child.",
        replies: [],
      },
      {
        name: "Dumbledore",
        text: "Ah, but happiness can be found in this video, even in the darkest of times.",
        replies: [],
      },
    ],
  },
  {
    name: "Thanos",
    text: "Perfectly balanced, as all videos should be. ✨",
    replies: [
      {
        name: "Iron Man",
        text: "And I… liked this video. ❤️",
        replies: [],
      },
      {
        name: "Captain America",
        text: "I could do this all day… rewatching this.",
        replies: [],
      },
    ],
  },
  {
    name: "Deadpool",
    text: "Breaking the 4th wall to say: this video is hilarious.",
    replies: [
      {
        name: "Spider-Man",
        text: "Kinda jealous, you get all the funny lines.",
        replies: [],
      },
    ],
  },
  {
    name: "Gordon Ramsay",
    text: "Finally! A video that’s not RAW! It’s cooked beautifully!",
    replies: [
      {
        name: "Jamie Oliver",
        text: "Bit too much salt though, mate.",
        replies: [],
      },
    ],
  },
  {
    name: "Bob Ross",
    text: "Just a happy little video in a happy little comment section 🎨",
    replies: [],
  },
];

const Comments = ({ data }) => {
  return (
    <div class="flex items-start space-x-1 my-1">
      {/* <!-- Comment Content --> */}
      <div class="flex-1">
        <div class="bg-white rounded-lg px-4 py-1 shadow border border-gray-200 flex flex-row gap-2 justify-start items-center">
          <img
            className="h-8 w-8 rounded-full"
            alt={data.name}
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${data.name}`}
          />

          <h4 class="font-semibold text-gray-800">{data.name}</h4>
          <p class="text-gray-700 text-sm leading-relaxed">{data.text}</p>
        </div>

        <div class="ml-8 border-l-2 border-gray-200 pl-4 space-y-1">
          {data.replies &&
            data.replies.map((each) => {
              return <Comments data={each} key={each.text} />;
            })}
        </div>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {commentsData.map((each) => {
        return <Comments data={each} key={each.text} />;
      })}
    </div>
  );
};

export default CommentsContainer;
