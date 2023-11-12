import React from "react";
import Image from 'components/Imagenes/OIG-removebg-preview.png';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

function NavBar() {
  return (
        <Navbar fluid rounded>
          <Navbar.Brand as={Link} href="#">
            <img src="components\Imagenes\OIG-removebg-preview.png" className="mr-9 h-8 sm:h-5" alt="hola" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CUU Market Analizer</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Inicio
            </Navbar.Link>
            <Navbar.Link href="#">Tengo un Negocio</Navbar.Link>
            <Navbar.Link href="#">Comparar categorias</Navbar.Link>
            <Navbar.Link href="#">Maps</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>

    
  );
}
export default NavBar; 