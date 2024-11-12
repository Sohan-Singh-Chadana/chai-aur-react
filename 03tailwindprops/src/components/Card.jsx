function Card({ channel, btnText = "Read more", src }) {
  return (
    <>
      <div className="max-w-xs rounded-md bg-black text-gray-100 shadow-md">
        <img
          src={src}
          alt=""
          className="h-72 w-full rounded-t-md bg-gray-500 object-cover object-center"
        />
        <div className="flex flex-col justify-between space-y-8 p-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold capitalize tracking-wide">
              {channel}
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio tempora ipsum soluta amet corporis accusantium aliquid
              consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md bg-gray-800 p-3 font-semibold tracking-wide text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
