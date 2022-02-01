const foodILIke = [
  {
    name: "김치",
    image: "",
  },
  {
    name: "삼겹살",
    image: "",
  },
  {
    name: "비빔밥",
    image: "",
  },
  {
    name: "돈까스",
    image: "",
  },
  {
    name: "김밥",
    image: "",
  },
];

function Food({ name }) {
  return <h1>{ name } 좋아</h1>;
}

function App() {
  return (
    <div>
      { foodILIke.map(dish => (<Food name={dish.name} />)) }
    </div>
  )
}

export default App;
