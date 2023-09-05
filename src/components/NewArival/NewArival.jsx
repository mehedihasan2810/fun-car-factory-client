import "./NewArival.css";
const NewArival = () => {
  return (
   <section className="new-arrival-container">
    <video src="../../../public/videos/kids-playing.mp4" autoPlay loop muted className="new-arrival-video">

    </video>

    <div className="new-arrival-overlay"></div>

    <div className="new-arrival-text-container">
      <h2>Putting A Smile <br /> On Kid&#39;s Faces</h2>
    </div>

   </section>
  );
};

export default NewArival;
