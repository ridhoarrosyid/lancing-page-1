import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex justify-between px-7 items-center h-16">
      <div className="text-neutral-200 capitalize font-semibold text-xl">
        wallet
      </div>
      <div className="flex gap-2">
        <Button text="sign up" color={"text-neutral-200"} bg="" />
        <Button text="login" bg={"bg-purple-200"} color="" />
      </div>
    </div>
  );
}
