function Menu( {mdata} ) {
let dat = mdata

console.log(dat);
    return(
<div>

        {dat.map((item, index)=>( <span className="menuitem" key={index}>{item}</span>)
        )}
</div>
    )
}

export default Menu