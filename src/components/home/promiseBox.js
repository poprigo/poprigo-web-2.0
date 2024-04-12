export default function PromiseBox({ title = "", video = "", subTitle = "" }) {
  return (
    <div className='promise-box'>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="gif-overlay" />
      <div className="gif-content">
        <h2 className="gif-title">{title}</h2>
        <p className="gif-description">
          {subTitle}
        </p>
      </div>
    </div>
  );
}