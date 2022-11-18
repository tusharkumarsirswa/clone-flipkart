import React from 'react'

function Footer(props) {
  return (
    <>
    <div className='footer '>
      <div className="allitem">

    <div className='liitem1  '>

      
     <h6 className="text my-3">ABOUT</h6>
     <li className='tagLI '><a className='tagA' href="/">Contact us</a></li> 
     <li className='tagLI'><a className='tagA' href="/">About us</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Careers</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Flipkart Stories</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Press</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Flipkart Wholesaler</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Corporate information</a></li> 
       </div>

            <div className='liitem2'>
            <h6 className="text my-3">Help</h6>
     <li className='tagLI '><a className='tagA' href="/">Payments</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Shipping</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Cancellation & Returns</a></li> 
     <li className='tagLI'><a className='tagA' href="/">FAQ</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Report infringement</a></li> 
     
            </div>

            <div className='liitem2'>
            <h6 className="text my-3">Policy</h6>
     <li className='tagLI '><a className='tagA' href="/">Return Policy</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Terms of Use</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Security</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Privacy</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Sitemap</a></li> 
     <li className='tagLI'><a className='tagA' href="/">EPR Compliance</a></li> 
     
            </div>

            <div className='liitem2'>
            <h6 className="social my-3">SOCIAL</h6>
     <li className='tagLI'><a className='tagA' href="/">Facebook</a></li> 
     <li className='tagLI'><a className='tagA' href="/">Twitter</a></li> 
     <li className='tagLI'><a className='tagA' href="/">YouTube</a></li> 
     
            </div>

            {/* mail */}
               <div className="line mx-4 ">

     </div>
              
            <div className='mailbox'>
            <h6 className="text my-3 mx-3">Mail Us</h6>
          <p className='address'>Flipkart Internet Private Limited,Buildings Alyssa, Begonia &Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village,Bengaluru, 560103,Karnataka, India</p>
     </div>

                  {/* reg. */}
                  <div className='mailbox'>
            <h6 className="text my-3 ">Registered Office Address:</h6>
          <p className='Reg_address'>Flipkart Internet Private Limited,
Buildings Alyssa, Begonia &
Clove Embassy Tech Village,
Outer Ring Road, Devarabeesanahalli Village,
Bengaluru, 560103,
Karnataka, India
CIN : U51109KA2012PTC066107
Telephone:
<a href="/"> 044-45614700</a> 
 </p>
     </div>
           

       </div>
    
    <div className='endfooter'>
    
          {/* <p className='paragraph' ></p>
          <p className='paragraph' >Become a Seller <img src={props.link2}alt="" /></p> */}

      <p className='paragraph'><li className='tagLI2'><img className='endimg' src={props.link}alt="" /><a className='tagA2' href="/">Become a Seller</a></li> </p>
      <p className='paragraph'><li className='tagLI2'><img className='endimg' src={props.link2}alt="" /><a className='tagA2' href="/">Advertise</a></li> </p>
      <p className='paragraph'><li className='tagLI2'><img className='endimg' src={props.link3}alt="" /><a className='tagA2' href="/">Gift Cards</a></li> </p>
      <p className='paragraph'><li className='tagLI2'><img className='endimg' src={props.link4}alt="" /><a className='tagA2' href="/">Help Center</a></li> </p>
      <p className="paragraph2">© 2007-2022 Flipkart.com</p>
      <img className='lastimg' src={props.link5} alt="" />
          
          
          </div>
            <p className="creatby">-TUSHAR SIRSWA</p>
    </div>
    </>
  )
}

export default Footer
