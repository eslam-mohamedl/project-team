import { ThemeToggle } from "../atoms/ThemeButton";
function Navbar() {
  return (
    <div className="ds-bg h-15 flex items-center">
      <div className="flex justify-between container">
        <h2>logo</h2>
        <button>menu</button>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
