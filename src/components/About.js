import React, { useState } from 'react'

export default function About() {

	const [myStyle, setMyStyle] = useState({
		backgroundColor: '#00BCD4',
		color: 'white',
	});

	const [myStyle2, setMyStyle2] = useState({
		backgroundColor: 'white',
		color: 'black',
	});

	const changeStyle=()=>{
		if(myStyle.color==='white'){
			setMyStyle({
				backgroundColor: '#de99aa',
				color: 'black'
			})
			setMyStyle2({
				backgroundColor: 'black',
				color: 'white',
			})
		}
		else{
			setMyStyle({
				backgroundColor: '#00BCD4',
				color: 'white',
			})
			setMyStyle2({
				backgroundColor: 'white',
				color: 'black',
			})
		}
	}

  return (
    <>
    <div className='container'>
	<nav className="accordion arrows">
		<header className="box" style={myStyle}>
			<label htmlFor="acc-close" className="box-title"><h2>ABOUT US</h2></label>
		</header>
		<input type="radio" name="accordion" id="cb1" />
		<section className="box" style={myStyle2}>
			<label className="box-title b1" htmlFor="cb1">Readme</label>
			<label className="box-close" htmlFor="acc-close"></label>
			<div className="box-content">Click on an item to open. Click on its header or the list header to close.</div>
		</section>
		<input type="radio" name="accordion" id="cb2" style={myStyle2}/>
		<section className="box" style={myStyle2}>
			<label className="box-title b1" htmlFor="cb2">Read me too</label>
			<label className="box-close" htmlFor="acc-close"></label>
			<div className="box-content">Add the className 'arrows' to nav.accordion to add dropdown arrows.</div>
		</section>
		<input type="radio" name="accordion" id="cb3" style={myStyle2}/>
		<section className="box" style={myStyle2}>
			<label className="box-title b1" htmlFor="cb3">Item 3</label>
			<label className="box-close" htmlFor="acc-close"></label>
			<div className="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
		</section>
		<input type="radio" name="accordion" id="acc-close" />
		<div className="shift">
		<form className="d-flex mx-4" role="search">
		<label className="switch">
		<input type="checkbox" onClick={changeStyle}/>
		<span className="slider"></span>
        </label>
        </form>
		</div>
	</nav>
      
    </div>
    </>
  )
}

