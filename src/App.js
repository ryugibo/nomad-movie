const foodILike = [
  {
    id: 1,
    name: "김치",
    image: "https://1.bp.blogspot.com/-ss_pbo3ovUY/VCka72oQx9I/AAAAAAAAm-I/Jsz5t-52JCc/s400/food_kimuchi.png",
  },
  {
    id: 2,
    name: "삼겹살",
    image: "https://1.bp.blogspot.com/-vlM-aCacrPM/X1CK6FoXzlI/AAAAAAABawM/y_rt9HUgMAMomLmeL-T97UXQX9c-VLH4QCNcBGAsYHQ/s400/food_yakiniku_samugyopusaru.png",
  },
  {
    id: 3,
    name: "라면",
    image: "https://3.bp.blogspot.com/-rZMHLcW6Er4/WlGpO69KN7I/AAAAAAABJlg/KgmrOkMSuoM0Xf0qRil3iOpMlGer-ypmACLcBGAs/s400/food_cup_ramen_miso.png",
  },
  {
    id: 4,
    name: "돈까스",
    image: "https://1.bp.blogspot.com/-ndPI4wq1sRs/X3hF_nt2teI/AAAAAAABbmU/r8d5zTyOs0oITNVtj-p76sXoDPUtXwi5QCNcBGAsYHQ/s400/food_tonkatsu_solo.png",
  },
  {
    id: 5,
    name: "김밥",
    image: "https://1.bp.blogspot.com/-y3daFCAqXxI/UZRBfkzM0DI/AAAAAAAASnk/gPg7Uns_xmM/s400/setsubun_ehomaki3.png",
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>{ name } 좋아</h2>
      <img src={ picture } alt={ name } />
    </div>
  );
}

function App() {
  return (
    <div>
      { foodILike.map(dish => (<Food key={ dish.id } name={ dish.name } picture={ dish.image } />)) }
    </div>
  )
}

export default App;
