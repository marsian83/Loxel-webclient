import React from "react";
import { twMerge } from "tailwind-merge";
import DataForm from "../../DataForm";

interface OrganizationRegistrationProps {
  className?: string;
}

export default function OrganizationRegistration(
  props: OrganizationRegistrationProps
) {
  return (
    <DataForm
      className={twMerge("flex flex-col items-stretch p-8", props.className)}
    >
      <h1 className="font-semibold tracking-tight text-3xl text-center">
        Register Your Organization
      </h1>

      <FormInput
        name="organizationName"
        placeholder="Organization Name"
        label="This is how you will be known on Loxel"
        required
      />

      <FormInput
        name="organizationEmail"
        placeholder="Eg: admin@yourbrand.com"
        label="Email will be used to login and in case you forget your credentials"
        required
      />

      <FormInput
        name="organizationWebsite"
        placeholder="Website  (www.yourstore.com)"
        label="This could be your brand's homepage or web store"
        required
      />

      <FormInput
        name="organizationSells"
        placeholder="What is your business  (Eg: Footwear, Cafe, etc.)"
        label="We collect this info for analytics purpose"
      />

      <FormInput
        name="organizationCountry"
        placeholder="Country"
        label="You can register different organizations for different countries"
        required
      />

      <div className="flex mt-8 gap-x-2">
        <input type="checkbox" name="countryLock" />
        <label htmlFor="countryLock" className="text-sm font-light">
          Do you want to restrict reward usage / redemption to be only available
          within registered country?
        </label>
      </div>

      <button className="mt-10 bg-primary px-6 py-3 font-medium text-back rounded mb-10">
        Register
      </button>
    </DataForm>
  );
}

function FormInput(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & { label?: string }
) {
  const { label, className, ...otherProps } = props;

  return (
    <div className="relative flex flex-col items-stretch">
      <input className={twMerge("mt-8", className)} {...otherProps} />

      {props.required && (
        <span className="absolute text-red-500 right-1 top-1/2 -translate-y-1/2">
          *
        </span>
      )}

      {label && (
        <label htmlFor={props.name} className="text-xs text-front/40 mt-2">
          {label}
        </label>
      )}
    </div>
  );
}
