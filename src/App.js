function Food(props) {
  console.log(props);
  return <h1>{ props.fav } 좋아</h1>;
}

function App() {
  return (
    <div>
      <h1>안녕</h1>
      <Food fav="김치" />
    </div>
  )
}

export default App;
