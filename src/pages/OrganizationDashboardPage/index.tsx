import React from "react";
import Header from "./components/Header";
import PageSeparator from "../../common/PageSeparator";
import Tabs from "../../common/Tabs";

export default function OrganizationDashboardPage() {
  const tabs = [
    { title: "Passes" },
    { title: "Benifits" },
    { title: "Analytics" },
    { title: "Developer" },
    { title: "Settings" },
  ];

  return (
    <>
      <Header />

      <PageSeparator className="my-10" />

      <section className="p-page">
        <Tabs tabs={tabs} />
      </section>
    </>
  );
}
