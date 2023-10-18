import { Button } from "@/components/ui/button";
import { Ghost, Menu, icons } from "lucide-react";
import { MobileSidebar } from "../app/components/Mobile-sidebar";


const Navbar = async () => {


  return ( 
    <div className="flex items-center p-4">
     <MobileSidebar apiLimitCount={0} isPro={false} />
      </div>
   );
}
 
export default Navbar;