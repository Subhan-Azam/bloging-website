// import Link from "next/link";
// import React from "react";

// interface NavLinkProps {
//   title: string;
//   path: string;
//   mobile?: boolean;
//   onClick?: () => void;
// }
// const NavLink = ({ title, path, mobile = false, onClick }: NavLinkProps) => {
//   return (
//     <>
//       <li className="group">
//         <Link
//           href={path}
//           className="px-[13px] py-[9px] rounded-[25px] text-[#FFFFFF] hover:text-black hover:bg-[#01CFFF]/80 focus:bg-[#01CFFF] active:bg-[#01CFFF]/60 transition-all duration-300 ease-in-out relative overflow-hidden"
//         >
//           <span className="relative z-10">{title}</span>
//           <span className="absolute inset-0 bg-[#01CFFF] scale-0 group-hover:scale-100 origin-center transition-all duration-300 ease-in-out rounded-[25px] z-0"></span>
//         </Link>
//       </li>
//     </>
//   );
// };

// export default NavLink;



import Link from "next/link";
import React from "react";

interface NavLinkProps {
  title: string;
  path: string;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ title, path, mobile = false, onClick }: NavLinkProps) => {
  const desktopClasses = `
    px-[13px] py-[9px] rounded-[25px] text-[#FFFFFF] 
    hover:text-black hover:bg-[#01CFFF]/80 
    focus:bg-[#01CFFF] active:bg-[#01CFFF]/60 
    transition-all duration-300 ease-in-out 
    relative overflow-hidden
  `;

  const mobileClasses = `
    block w-full py-3 px-4 text-white text-center
    hover:bg-[#01CFFF] hover:text-black
    transition-colors duration-300
  `;

  return (
    <li className={`group ${mobile ? 'w-full' : ''}`}>
      <Link
        href={path}
        className={mobile ? mobileClasses : desktopClasses}
        onClick={onClick}
      >
        {!mobile ? (
          <>
            <span className="relative z-10">{title}</span>
            <span className="absolute inset-0 bg-[#01CFFF] scale-0 group-hover:scale-100 origin-center transition-all duration-300 ease-in-out rounded-[25px] z-0"></span>
          </>
        ) : (
          title
        )}
      </Link>
    </li>
  );
};

export default NavLink;