import WelcomePage from "./section/WelcomePage";
import logo1 from "./assets/logos1.png";
import image1 from "./assets/image1.png";
import HelloCard from "./component/HelloCard";
import Button from "./component/Button";
import coinIcon from "./assets/coinIcon.png";
import cardsIcon from "./assets/cardsIcon.png";
import purseIcon from "./assets/purseIcon.png";
import star from "./assets/star.png";
import userFeedbackImg from "./assets/userFeedbackImg.png";
import gif from "./assets/gif.png";

function App() {
  return (
    <div className="bg-zinc-800">
      <WelcomePage />
      <div className="w-[70rem] mx-auto border-y-2 border-solid border-neutral-700 py-10 mb-14">
        <img src={logo1} className="w-[90%] mx-auto" />
      </div>
      <div className="w-[50rem] px-3 pt-5 bg-red-200 mx-auto rounded-3xl mb-36">
        <img src={image1} className="w-[100%] mx-auto object-fill" />
      </div>
      <div className="flex gap-10 justify-center text-center mb-36">
        {featureCards.map((featureCard, i) => {
          return (
            <div className="w-52" key={i}>
              <img src={featureCard.img} className="mx-auto w-14 mb-10" />
              <h1 className="text-neutral-100 mb-3">{featureCard.h1}</h1>
              <p className="text-neutral-500">{featureCard.p}</p>
            </div>
          );
        })}
      </div>
      <div className="bg-purple-300 w-[50rem] font-semibold text-xl mx-auto py-16 px-32 rounded-2xl mb-36">
        <p className="text-neutral-900 mb-10">{`"${reviewText}"`}</p>
        <div className="flex items-center gap-6">
          <img src={userFeedbackImg} className="w-14" />
          <div>
            <p className="text-neutral-500 text-sm">Johnny Owens</p>
            <div className="flex">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-36 flex justify-between px-36">
        <HelloCard
          h1={"Questions? Let's talk"}
          p={
            "Contact us through our 24/7 live chat. We're always happy to help!"
          }
          textTombol={"Get started"}
        />
        <img src={gif} />
      </div>
      <hr className="border-neutral-500 mb-10 mx-20" />
      <div className="text-neutral-200 flex justify-between mx-20 pb-10">
        <div>
          <h1 className="mb-10 text-xl font-semibold">Wallet</h1>
          <ul className="flex gap-5">
            <li>©️ Wallet 2022</li>
            <li>Privaci policy</li>
            <li>Cookies policy</li>
            <li>Terms of use</li>
          </ul>
        </div>
        <div>
          <form>
            <label htmlFor="email" className="block mb-6">
              Updates right to your inbox
            </label>
            <input
              className="inline-block mr-5 bg-[#333] outline-none border-none pl-6 py-2 w-72 rounded-xl"
              placeholder="Email Address"
              type="email"
              id="email"
            />
            <Button text="Send" bg={"bg-purple-200"} color="text-black" />
          </form>
        </div>
      </div>
    </div>
  );
}

const featureCards = [
  {
    img: cardsIcon,
    h1: "Customizable card",
    p: "Custom your own car for your exact incomes and expenses need.",
  },
  {
    img: coinIcon,
    h1: "No payment fee",
    p: "Transfer your payment all over the world with no payment fee.",
  },
  {
    img: purseIcon,
    h1: "All in one place",
    p: "The right place to keep your credit and debit cards, boarding passes & more.",
  },
];

const reviewText =
  "Wallet is agreat product! All of my most important information is there - credit cards, transit cards, boarding passes, ticket, and more. And I don't need to worry because it's all in one place! thanks!";

export default App;
