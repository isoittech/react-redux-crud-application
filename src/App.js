import React from 'react';
import PropTypes from 'prop-types'

const Dog = (props) => {
  return (
    <div>
      ワウ　ワウ　ワウ！<br></br>
      （{props.bleederName}、こっちこっち！、{props.esa}くれぇええーー)
    </div>
  )
}

Dog.propTypes = {
  name: PropTypes.string,
  esa: PropTypes.string.isRequired
}

// Dog.defaultProps = {
//   esa: "骨"
// }

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
