const descriptions = [
  "Africa's premier platform for healthcare innovation, investment, and access.",
  "Bringing together policymakers, innovators, investors, global partners, and the public.",
  "Focused on digital health, wellness, insurance, diagnostics, and infrastructure.",
  "Held in Lagos, the continent's commercial capital.",
  "Organized by Route5.",
];

const Descriptions = () => (
  <div className="flex flex-col gap-2 lg:gap-3">
    <p className="font-medium text-3xl xl:text-4xl min-[90rem]:text-5xl">
      Event Description
    </p>
    <ul className="list-disc list-inside">
      {descriptions.map((description, index) => (
        <li key={index} className="text-lg xl:text-xl text-textBody">
          {description}
        </li>
      ))}
    </ul>
  </div>
);

export default Descriptions;
