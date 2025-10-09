import Descriptions from "../components/description";
import Details from "../components/details";
import Hero from "../components/hero";
import Registration from "../components/registration";
import Statistics from "../components/statistics";

export default function Register() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 xl:gap-14 min-[90rem]:gap-16 w-full max-w-[90rem] pb-4 md:pb-8 lg:pb-16 xl:pb-28 min-[90rem]:pb-[7.5rem]">
      <Hero />
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 xl:gap-14 min-[90rem]:gap-16 w-full px-4 md:px-8 lg:px-16 xl:px-28 min-[90rem]:px-[7.5rem]">
        <Details />
        <Descriptions />
        <Statistics />
        <Registration />
      </div>
    </div>
  );
}
