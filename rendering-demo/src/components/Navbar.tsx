
import Navlinks from "./Navlinks";
import NavSearch from "./NavSearch";

export default function Navbar() {
    console.log("Navbar rendered")
    return (
        <div>
            <Navlinks />
            <NavSearch />
        </div>
    );
}