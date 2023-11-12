import React from "react";
import Link from 'next/link';
import { Footer } from 'flowbite-react';

function FooTer() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">Sobre nosotros</Footer.Link>
        <Footer.Link href="#">Contactanos</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
export default FooTer; 
