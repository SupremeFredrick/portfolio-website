import SectionTitle from "../Common/SectionTitle";
import SinglePricing from "./SInglePricing";

const pricingData = [
  { id: "starter", unit_amount: 29 * 100, nickname: "Small" },
  { id: "growth", unit_amount: 79 * 100, nickname: "Medium" },
  { id: "scale", unit_amount: 149 * 100, nickname: "Large" },
];

const PricingGrids = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Get access"
          title="Our Pricing Plan"
          paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
        />
        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((price, key) => (
            <SinglePricing price={price} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingGrids;
