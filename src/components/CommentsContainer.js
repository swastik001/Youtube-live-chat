import React from "react";
import commentsData from "../utils/commentsData.json";

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
