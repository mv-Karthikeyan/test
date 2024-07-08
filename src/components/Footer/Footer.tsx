"use client";
// import Footer from '@/components/common/Footer'
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="py-4 pt-1"> 
      {/* <footer className="bg-gray-800 text-white py-4 border-1">  */}
            <div className="container px-6 py-3 mx-auto flex justify-between items-center">
                <div className="items-center">
                    <h6 className='font-bold'>groko</h6>
                    <Link href='/'>
                        <img src="/CompanyFooter_poweredBy.png" alt="Groko Community Logo" className="" />
                    </Link>
                </div>
                <div>
                    <Link href="#" passHref>
                        <span className="mx-2">Terms of Use</span>
                    </Link>
                    <Link href="#" passHref>
                        <span className="mx-2">About Us</span>
                    </Link>
                    <Link href="#" passHref>
                        <span className="mx-2">Contact Us</span>
                    </Link>
                </div> 
            </div>
         </footer> 
    </>
  );
};

export default Footer;
