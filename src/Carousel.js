// import Glide from '@glidejs/glide';

// const Carousel = ({ element = 'glide', options, children }) => {
//   const [slider] = useState(new Glide(`.${element}`, options));
//   useEffect(() => {
//     slider.mount();

//     // subscribe to an event
//     // slider.on('run.before', (event) => {
//     //   // ... do something cool here
//     // });

//     // cleanup when unmounting component
//     return () => slider.destroy();
//   }, [slider]);

//   return (
//     <div className={element}>
//       <div className="glide__track" data-glide-el="track">
//         <ul className="glide__slides">
//           {children.map((slide, index) => {
//             return React.cloneElement(slide, {
//               key: index,
//               className: `${slide.props.className} glide__slide`,
//             });
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

import React from 'react';

const Carousel = () => {
  // const [slider] = useState(new Glide(`.${element}`, options));
  // useEffect(() => {
  //   slider.mount();

  //   // subscribe to an event
  //   // slider.on('run.before', (event) => {
  //   //   // ... do something cool here
  //   // });

  //   // cleanup when unmounting component
  //   return () => slider.destroy();
  // }, [slider]);
  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <h3>Main Title</h3>
          </li>
          <li className="glide__slide">
            <h3>Second Title</h3>
          </li>
          <li className="glide__slide">
            <h3>Third Title</h3>
          </li>
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          prev
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
