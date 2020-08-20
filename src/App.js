import React from 'react';

const Dog = (props) => {
  return (
    <div>
      ワウ　ワウ　ワウ！<br></br>
      （{props.bleederName}、こっちこっち！、{props.esa}くれぇええーー)
    </div>
  )
}

Dog.defaultProps = {
  esa: "骨"
}

const App = () => {
  const bleeders = [
    { name: "ほりけん", esa: "ペディグリーチャム" },
    { name: "たいぞう", esa: "骨形のガム" },
    { name: "森さん" }
  ]
  return (
    <div>
      {
        bleeders.map((bleeder, index) => {
          return <Dog bleederName={bleeder.name} esa={bleeder.esa} key={index}></Dog>
        })
      }
    </div>
  )
}

export default App;
