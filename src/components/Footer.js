import React from 'react';
import styled from "styled-components"
function Footer() {
  return (
    <Footbar className="pt-5" >
    
      <div className="container text-center">
        <p>&copy; Built by Tommy Maher</p>
      </div>
    
    </Footbar>
  )
}

export default Footer;

const Footbar = styled.footer`


position:fixed;
bottom:0;

width:100%;


`;