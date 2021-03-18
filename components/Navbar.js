import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Collapse from 'react-bootstrap/Collapse'

const Navbar = ()=> {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          Toggle text
        </Button>
        <Fade in={open}>
          <div id="example-fade-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Fade>
      </>
    );
  }

  export default Navbar