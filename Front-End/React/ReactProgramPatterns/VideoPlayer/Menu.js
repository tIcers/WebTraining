function menu(props) {
  function clickhandler(event){
    const name = event.target.value
    props.onselectvideo(name)
  }
	return (
		  <form onclick={clickhandler}>
			  <input type="radio" name="src" value="fast"/> fast
			  <input type="radio" name="src" value="slow" /> slow
			  <input type="radio" name="src" value="cute" /> cute
			  <input type="radio" name="src" value="eek" /> eek
		  </form>
		);
};

export default menu;
