import Hello from "../component/Hello";
import Navbar from "../component/Navbar";

export default function WelcomePage() {
  return (
    <div className="h-svh">
      <Navbar />
      <Hello />
    </div>
  );
}
