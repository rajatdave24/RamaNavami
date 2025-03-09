// import React from "react";
// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";
// import "./ISKCONInTheNews.css";

// const ISKCONInTheNews: React.FC = () => {
//   const galleryImages = [
//     {
//       original: "https://via.placeholder.com/800x400?text=News+Image+1",
//       thumbnail: "https://via.placeholder.com/150x80?text=Thumbnail+1",
//     },
//     {
//       original: "https://via.placeholder.com/800x400?text=News+Image+2",
//       thumbnail: "https://via.placeholder.com/150x80?text=Thumbnail+2",
//     },
//     {
//       original: "https://via.placeholder.com/800x400?text=News+Image+3",
//       thumbnail: "https://via.placeholder.com/150x80?text=Thumbnail+3",
//     },
//   ];

//   const videoData = [
//     {
//       videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       image: "https://via.placeholder.com/300x200?text=Video+1",
//     },
//     {
//       videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       image: "https://via.placeholder.com/300x200?text=Video+2",
//     },
//     {
//       videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//       image: "https://via.placeholder.com/300x200?text=Video+3",
//     },
//   ];

//   return (
//     <section className="iskcon-in-news">
//       {/* Top Gallery */}
//       <div className="gallery-container">
//         <h2 className="gallery-title">ISKCON in the News</h2>
//         <div className="gallery">
//           <ImageGallery items={galleryImages} showFullscreenButton={false} />
//         </div>
//       </div>

//       {/* Video Section */}
//       <div className="video-section">
//         <h2 className="video-title">Latest Videos</h2>
//         <div className="video-grid">
//           {videoData.map((video, index) => (
//             <div key={index} className="video-card">
//               <div className="video-frame">
//                 <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
//                   <img src={video.image} alt={`Video ${index + 1}`} className="video-thumbnail" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ISKCONInTheNews;
