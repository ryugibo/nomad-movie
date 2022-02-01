import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "김치",
    image: "https://1.bp.blogspot.com/-ss_pbo3ovUY/VCka72oQx9I/AAAAAAAAm-I/Jsz5t-52JCc/s400/food_kimuchi.png",
    rating: 3,
  },
  {
    id: 2,
    name: "삼겹살",
    image: "https://1.bp.blogspot.com/-vlM-aCacrPM/X1CK6FoXzlI/AAAAAAABawM/y_rt9HUgMAMomLmeL-T97UXQX9c-VLH4QCNcBGAsYHQ/s400/food_yakiniku_samugyopusaru.png",
    rating: 4,
  },
  {
    id: 3,
    name: "라면",
    image: "https://3.bp.blogspot.com/-rZMHLcW6Er4/WlGpO69KN7I/AAAAAAABJlg/KgmrOkMSuoM0Xf0qRil3iOpMlGer-ypmACLcBGAs/s400/food_cup_ramen_miso.png",
    rating: 4.3,
  },
  {
    id: 4,
    name: "돈까스",
    image: "https://1.bp.blogspot.com/-ndPI4wq1sRs/X3hF_nt2teI/AAAAAAABbmU/r8d5zTyOs0oITNVtj-p76sXoDPUtXwi5QCNcBGAsYHQ/s400/food_tonkatsu_solo.png",
    rating: 5,
  },
  {
    id: 5,
    name: "김밥",
    image: "https://1.bp.blogspot.com/-y3daFCAqXxI/UZRBfkzM0DI/AAAAAAAASnk/gPg7Uns_xmM/s400/setsubun_ehomaki3.png",
    rating: 4.5,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>{ name } 좋아</h2>
      <h4>{ rating }/5.0</h4>
      <img src={ picture } alt={ name } />
    </div>
  );
}

function App() {
  return (
    <div>
      { foodILike.map(dish => (<Food key={ dish.id } name={ dish.name } picture={ dish.image } rating={ dish.rating } />)) }
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
