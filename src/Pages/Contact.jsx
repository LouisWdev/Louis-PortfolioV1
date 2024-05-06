import Navbar from "../Components/Navbar"

const Contact = () => {
  return (
    <>
      <Navbar/>
      <form>
        <input type="text" name="email" /><br/>
        <input type="text" name="description" /><br/>
        <button>Send</button>
      </form>
    </>
  )
}

export default Contact