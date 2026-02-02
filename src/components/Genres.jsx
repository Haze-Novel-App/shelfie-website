// import React from 'react';
// import horror from '../assets/imgs/generes/horror.png';
// import fantasy from '../assets/imgs/generes/dragon.png';
// import scifi from '../assets/imgs/generes/ufo.png';
// import adventure from '../assets/imgs/generes/adventure-sports.png';
// import selfhelp from '../assets/imgs/generes/book.png';

// const Genres = () => {
//   const genreData = [
//     { title: 'Fantasy', icon: fantasy, desc: 'Mythical Worlds' },
//     { title: 'Sci-Fi', icon: scifi, desc: 'Future & Tech' },
//     { title: 'Adventure', icon: adventure, desc: 'Quests & Journeys' },
//     { title: 'Self-Help', icon: selfhelp, desc: 'Growth & Mindset' },
//     { title: 'Horror', icon: horror, desc: 'Thrills & Chills' }
//   ];

//   return (
//     <section className="genres-section" id="genres">
//       <div className="genres-container">
//         {genreData.map((genre, index) => (
//           <div className="genre-item" key={index}>
//             <div className="icon-wrapper">
//               <img src={genre.icon} alt={genre.title} className="genre-icon-img" />
//             </div>
//             <h4>{genre.title}</h4>
//             <p className="genre-desc">{genre.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Genres;





import React from 'react';
import horror from '../assets/imgs/generes/horror.png';
import fantasy from '../assets/imgs/generes/dragon.png';
import scifi from '../assets/imgs/generes/ufo.png';
import adventure from '../assets/imgs/generes/adventure-sports.png';
import selfhelp from '../assets/imgs/generes/book.png';

const Genres = () => {
  const genreData = [
    { title: 'Fantasy', icon: fantasy, desc: 'Mythical Worlds' },
    { title: 'Sci-Fi', icon: scifi, desc: 'Future & Tech' },
    { title: 'Adventure', icon: adventure, desc: 'Quests & Journeys' },
    { title: 'Self-Help', icon: selfhelp, desc: 'Growth & Mindset' },
    { title: 'Horror', icon: horror, desc: 'Thrills & Chills' }
  ];

  return (
    <section className="genres-section" id="genres">
      <div className="genres-container">
        {genreData.map((genre, index) => (
          <div className="genre-item" key={index}>
            <div className="icon-wrapper">
              <img src={genre.icon} alt={genre.title} className="genre-icon-img" />
            </div>
            <h4>{genre.title}</h4>
            <p className="genre-desc">{genre.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Genres;