import PropTypes from 'prop-types'

const ColorInput = ({text, buttonText, onClick}) => {
  function setBackground(){
    var inputField = document.querySelector(".input")
    var color = inputField.value
    inputField.value = ''
    return onClick(color)
}
  return (
    <div className='inputs'>
        <h3>{text}</h3>
        <input type="text" className="input" />
        <button onClick = {setBackground}>{buttonText}</button>
    </div>
    
  )
}

ColorInput.defaultProps = {
    text: 'Submit'
  }
  
ColorInput.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
  }
  

export default ColorInput