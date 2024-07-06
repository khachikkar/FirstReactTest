import PrimaryButton from './Buttons/PrimaryButton';
import SecondaryButton from './Buttons/SecondaryButton';
import Menu from './Menu';
import logo from './logo.svg';

function Nav(props){
    let data = props.data 
    return(
       <div className="navbar" id='nav'>

        <img className='logo' alt='Logo' src={logo}></img>
        <Menu  mdata={data}/>
        <div className='nav-buttons'>
        <PrimaryButton dat={{ haslogo: true, val:"Log In"}}/>
        <SecondaryButton data={{width:"120px", height:"40px"}}/>
        </div>
      
       </div>
    )
}

export default Nav