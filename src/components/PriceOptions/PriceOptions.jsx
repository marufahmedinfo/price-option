import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const pricingOptions = [
        {
          id: 1,
          name: "Basic",
          price: 30,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "One personal training session per month",
            "Free Wi-Fi",
            "Access to free weights",
            "Cardio machines access"
          ]
        },
        {
          id: 2,
          name: "Standard",
          price: 50,
          features: [
            "Access to gym equipment",
            "Locker room and shower access",
            "Two personal training sessions per month",
            "Access to group classes",
            "Free gym merchandise",
            "Unlimited access to cardio and strength machines",
            "Free body composition analysis",
            "Access to beginner yoga classes",
            "Discount on in-house smoothie bar"
          ]
        },
        {
          id: 3,
          name: "Premium",
          price: 75,
          features: [
            "24/7 gym access",
            "Locker room and shower access",
            "Weekly personal training sessions",
            "Access to all group classes",
            "Free diet and workout consultation",
            "Access to sauna and spa facilities",
            "Free guest pass once per month",
            "Unlimited access to HIIT and circuit training zones",
            "Priority access to fitness workshops",
            "Access to advanced yoga and Pilates classes",
            "Free nutritional assessment"
          ]
        },
        {
          id: 4,
          name: "Elite",
          price: 95,
          features: [
            "24/7 gym access",
            "VIP locker room and shower access",
            "Unlimited personal training sessions",
            "Priority booking for all classes",
            "Free diet and workout consultations",
            "Access to sauna, spa, pool, and hot tub",
            "Two free guest passes per month",
            "Discounts on supplements and merchandise",
            "Exclusive access to VIP lounge",
            "Personalized workout plan with weekly check-ins",
            "Free entry to fitness events and competitions",
            "Access to private yoga and meditation sessions",
            "Monthly wellness coaching"
          ]
        },
        {
          id: 5,
          name: "Jone",
          price: 100,
          features: [
            "24/7 gym access",
            "VIP locker room and shower access",
            "Unlimited personal training sessions",
            "Priority booking for all classes",
            "Free diet and workout consultations",
            "Exclusive access to VIP lounge",
            "Personalized workout plan with weekly check-ins",
            "Free entry to fitness events and competitions",
            "Access to private yoga and meditation sessions",
            "Monthly wellness coaching"
          ]
        }
      ];





    return (
        <div className="my-12">
            <h2 className="text-5xl">Best Price in the town</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-12">

            {
              pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;