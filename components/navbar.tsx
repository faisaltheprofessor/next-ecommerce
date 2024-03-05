import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./icons";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center ">
              {/* Todo: Mobile Nav */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10"></Icons.logo>
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-strech">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
