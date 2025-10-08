"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-number-input";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import "react-phone-number-input/style.css";

// Type definition
type RegistrationFormData = {
  first_name: string;
  last_name: string;
  email?: string;
  phone_number?: string;
};

type BackendErrorType = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  detail?: string;
};

// Yup validation schema
const registrationSchema: yup.ObjectSchema<RegistrationFormData> = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .test(
      "email-or-phone",
      "Either email or phone number is required",
      function (value) {
        const { phone_number } = this.parent;
        return (
          !!value ||
          !!phone_number ||
          (phone_number && phone_number?.length < 4)
        );
      }
    )
    .optional(),
  phone_number: yup
    .string()
    .test(
      "phone-or-email",
      "Either phone number or email is required",
      function (value) {
        const { email } = this.parent;
        return !!value || !!email || Boolean(value && value?.length < 4);
      }
    )
    .optional(),
}) as yup.ObjectSchema<RegistrationFormData>;

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backendError, setBackendError] = useState<BackendErrorType | null>(
    null
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    setBackendError(null);

    try {
      const submitPromise = axios.post(
        "https://api.tuboh.com/api/events-users/",
        {
          ...data,
          event: "6d035fbc-471c-4144-8d6e-215b76b4638c",
        }
      );

      await toast.promise(
        submitPromise,
        {
          loading: "Submitting registration...",
          success: () => {
            reset();
            return "Registration successful!";
          },
          error: (error) => {
            console.log(error);
            const errorMessage =
              error.response?.data?.detail ||
              "Registration failed. Please try again.";

            if (!error.response?.data?.detail && error.response?.data) {
              setBackendError(error.response.data);
            }

            return errorMessage;
          },
        },
        {
          duration: 8000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col self-center gap-3 lg:gap-4 xl:gap-6 min-[90rem]:gap-8 w-full md:w-4/5 xl:w-[70%] min-[90rem]:w-3/5">
      <p className="font-medium text-3xl xl:text-4xl min-[90rem]:text-5xl">
        Register
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 lg:gap-4 xl:gap-5"
      >
        {/* First Name */}
        <div className="flex flex-col gap-1 md:gap-1.5">
          <label
            htmlFor="first_name"
            className="text-sm md:text-base text-textBody"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="first_name"
            type="text"
            placeholder="Enter your first name"
            className={`capitalize border rounded px-3 py-2 text-base xl:text-lg ${
              errors.first_name || backendError?.first_name
                ? "border-red-500"
                : "border-[#D0D5DD] hover:border-primary"
            }`}
            {...register("first_name")}
          />
          {errors.first_name && (
            <span className="text-red-500 text-sm">
              {errors.first_name.message}
            </span>
          )}
          {backendError?.first_name && (
            <span className="text-red-500 text-sm">
              {backendError.first_name}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1 md:gap-1.5">
          <label
            htmlFor="last_name"
            className="text-sm md:text-base text-textBody"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="last_name"
            type="text"
            className={`capitalize border rounded px-3 py-2 text-base xl:text-lg ${
              errors.last_name || backendError?.last_name
                ? "border-red-500"
                : "border-[#D0D5DD] hover:border-primary"
            }`}
            placeholder="Enter your last name"
            {...register("last_name")}
          />
          {errors.last_name && (
            <span className="text-red-500 text-sm">
              {errors.last_name.message}
            </span>
          )}
          {backendError?.last_name && (
            <span className="text-red-500 text-sm">
              {backendError.last_name}
            </span>
          )}
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-1 md:gap-1.5 col-span-full">
          <label htmlFor="email" className="text-sm md:text-base text-textBody">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`border rounded px-3 py-2 text-base xl:text-lg ${
              errors.email || backendError?.email
                ? "border-red-500"
                : "border-[#D0D5DD] hover:border-primary"
            }`}
            placeholder="Enter your email address"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          {backendError?.email && (
            <span className="text-red-500 text-sm">{backendError.email}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1 md:gap-1.5 col-span-full">
          <label
            htmlFor="phone_number"
            className="text-sm md:text-base text-textBody"
          >
            Phone Number
          </label>
          <Controller
            name="phone_number"
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                className={`rounded-md z-10 phone-input ${
                  errors.phone_number || backendError?.phone_number
                    ? "border-red-500"
                    : "border-[#D0D5DD] hover:border-primary"
                }`}
                international={true}
                defaultCountry="NG"
                countryCallingCodeEditable={false}
                placeholder="Enter phone number"
                value={value}
                onChange={onChange}
              />
            )}
          />
          {errors.phone_number && (
            <span className="text-red-500 text-sm">
              {errors.phone_number.message}
            </span>
          )}
          {backendError?.phone_number && (
            <span className="text-red-500 text-sm">
              {backendError.phone_number}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-full flex flex-col md:flex-row gap-2 md:gap-3 mt-2">
          <button
            type="button"
            onClick={() => {
              reset();
              setBackendError(null);
            }}
            disabled={isSubmitting}
            className={`flex items-center justify-center w-full px-8 bg-transparent border border-[#D0D5DD] text-textBody font-medium text-lg xl:text-xl py-3 rounded transition-colors ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center justify-center w-full bg-[#114287] text-white font-medium text-lg xl:text-xl py-3 rounded transition-colors ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#114287]/90"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
