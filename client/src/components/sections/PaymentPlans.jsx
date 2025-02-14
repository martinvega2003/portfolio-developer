import { Link } from "react-router-dom";
import { paymentPlans } from "../../data/paymentPlansData";
import { useNavigate } from "react-router-dom";

export default function PaymentPlans() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <h2 className="text-sm sm:text-base md:text-lg font-extralight italic text-secondary uppercase text-left border-b-2">
        My Pricing
      </h2>
      <p className="text-xl sm:text-3xl md:text-6xl md:w-2/5 font-bold text-primary text-left mt-2">
        Pricing packages for every budget
      </p>

      {/* Basic Website Maintenance Section */}
      <div className="mt-8 w-full bg-transparent p-6 rounded-xl shadow-2xl border border-gray-200">
        <h3 className="text-xl md:text-2xl font-bold text-primary flex items-start">
          <span className="text-blue-500 text-2xl mr-2">🔷</span>
          Basic Website Maintenance (Included in All Plans)
        </h3>
        <ul className="mt-4 space-y-2 text-secondary">
          <li className="flex md:block flex-col justify-start items-start"><strong>✔ Software Updates</strong> (React, Express, PostgreSQL, dependencies, security patches).</li>
          <li className="flex md:block flex-col justify-start items-start"><strong>✔ Bug Fixes & Error Handling</strong> (Database errors, broken pages, etc.).</li>
          <li className="flex md:block flex-col justify-start items-start"><strong>✔ Website Backups</strong> (Daily/Weekly, depending on the plan).</li>
          <li className="flex md:block flex-col justify-start items-start"><strong>✔ Performance Optimization</strong> (Speed improvements, reducing load times).</li>
          <li className="flex md:block flex-col justify-start items-start"><strong>✔ Security Checks & Fixes</strong> (SSL, firewall setup, protection against hacking).</li>
          <li className="flex md:block flex-col justify-start items-start"><strong>✔ Uptime Monitoring</strong> (Ensuring the site is always online).</li>
          <li className="flex md:block flex-col justify-start items-start"><strong>✔ Basic Support</strong> (Small text/image updates, resolving minor issues).</li>
        </ul>
      </div>

      {/* Pricing Plans Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {paymentPlans.map((plan) => (
          <div key={plan.id} className={`p-6 rounded-3xl shadow-2xl border border-gray-200 ${plan.bgWhite ? "bg-white text-primary" : "bg-primary text-white"}`}>
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className={plan.bgWhite ? "text-secondary" : "text-gray-200"}>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-3xl font-bold mt-6">{plan.price}<span className="text-sm italic font-extralight"> / At Just {plan.monthlyPrice} Per Month</span></p>
            <p className="text-sm">{plan.monthly}</p>
            <button onClick={() => handleRedirect("/form")} className={`mt-4 ${plan.bgWhite ? "bg-primary hover:bg-accent" : "bg-accent hover:bg-transparent hover:border-accent"} py-2 px-4 text-white rounded-lg w-full border-2 border-transparent transition duration-300`}>
                {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
