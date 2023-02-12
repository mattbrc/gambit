const ShareButton = ({ title, text, url }) => {
  const handleClick = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: text,
        url: url,
      });
    }
  };

  return (
    <button
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      onClick={handleClick}
    >
      Share
    </button>
  );
};

export default function Test() {
  return (
    <div>
      <ShareButton
        title="Gambit Training App"
        text="Check this app out!"
        url="https://app.acidgambit.com"
      />
    </div>
  );
}
