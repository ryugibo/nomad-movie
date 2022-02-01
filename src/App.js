function Food({ fav }) {
  return <h1>{ fav } 좋아</h1>;
}

function App() {
  return (
    <div>
      <h1>안녕</h1>
      <Food fav="김치" />
      <Food fav="라면" />
      <Food fav="삼겹살" />
      <Food fav="쭈꾸미" />
    </div>
  )
}

export default App;
