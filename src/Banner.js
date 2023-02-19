import './Banner.css';

const Banner = () => {
  const truncate = (string, numberOfCharsFromCut) => {
    return string?.length > numberOfCharsFromCut
      ? string.substring(0, numberOfCharsFromCut - 1) + '...'
      : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        // backgroundImage: 'url(./netflix-banner.png)',
        backgroundImage:
          'url("https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg")',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test description This is a test description This is a test
          description This is a test description This is a test description This
          is a test description This is a test description This is a test
          description This is a test description This is a test description This
          is a test description This is a test description This is a test
          description This is a test description`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
