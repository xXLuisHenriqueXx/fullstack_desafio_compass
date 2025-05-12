import { FormEvent, useState } from "react";
import { tv } from "tailwind-variants";
import { ArrowRight, X } from "lucide-react";

import { ICreateContactParams } from "../../../../../common/interfaces/contact/CreateContactParams";

import { contactService } from "../../../../../services/ContactService";

interface Props {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
}

const modalContactStyles = tv({
  slots: {
    containerMain:
      "fixed z-99 flex flex-row items-center justify-center w-full h-screen bg-primary-80/95",
    containerModal:
      "flex flex-col w-[640px] px-8 py-6 gap-y-6 bg-neutral rounded-lg",
    containerHeader: "flex flex-row justify-end w-full",
    labelInput:
      "group relative flex flex-col items-start focus-within:text-primary",
    input:
      "w-full h-12 px-4 border border-neutral-40 text-sm font-normal text-primary rounded-md outline-none transition-all duration-300 focus:border-primary focus:text-primary",
    button:
      "relative flex flex-row justify-center items-center w-full py-3 bg-primary hover:bg-state-blue text-sm font-medium text-neutral hover:text-primary transition-all duration-300 rounded-md",
    textInput:
      "absolute -top-2 left-2 px-0.5 bg-neutral text-xs font-medium text-neutral-40 group-focus-within:text-primary transition-all duration-300",
    headerIcon:
      "text-neutral-60 hover:text-primary transition-all duration-300 cursor-pointer",
    buttonIcon: "absolute right-4",
  },
  variants: {
    active: {
      true: {
        button: "opacity-100 cursor-pointer",
      },
      false: {
        button: "opacity-50 cursor-not-allowed",
      },
    },
  },
});

const {
  containerMain,
  containerModal,
  containerHeader,
  labelInput,
  input,
  button,
  textInput,
  headerIcon,
  buttonIcon,
} = modalContactStyles();

export default function ModalContact({ showModal, setShowModal }: Props) {
  const [fields, setFields] = useState<ICreateContactParams>({
    fullname: "",
    phone: "",
    email: "",
    city: "",
    state: "",
  });

  const isFormValid = Object.values(fields).every(
    (value) => value.trim() !== ""
  );

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return null;

    await contactService.create(fields);

    handleClearInputs();
  };

  const handleClearInputs = () => {
    setFields({
      fullname: "",
      phone: "",
      email: "",
      city: "",
      state: "",
    });
  };

  return (
    <article className={containerMain()}>
      <form className={containerModal()} onSubmit={(e) => handleSubmit(e)}>
        <header className={containerHeader()}>
          <X className={headerIcon()} size={24} onClick={handleCloseModal} />
        </header>

        <label className={labelInput()} htmlFor="fullname">
          <p className={textInput()}>Fullname:</p>
          <input
            className={input()}
            type="text"
            id="fullname"
            required
            value={fields.fullname}
            onChange={(e) => setFields({ ...fields, fullname: e.target.value })}
          />
        </label>

        <label className={labelInput()} htmlFor="phone">
          <p className={textInput()}>Phone:</p>
          <input
            className={input()}
            type="tel"
            id="phone"
            required
            value={fields.phone}
            onChange={(e) => setFields({ ...fields, phone: e.target.value })}
          />
        </label>

        <label className={labelInput()} htmlFor="email">
          <p className={textInput()}>Email:</p>
          <input
            className={input()}
            type="email"
            id="email"
            required
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
          />
        </label>

        <label className={labelInput()} htmlFor="city">
          <p className={textInput()}>City:</p>
          <input
            className={input()}
            type="text"
            id="city"
            required
            value={fields.city}
            onChange={(e) => setFields({ ...fields, city: e.target.value })}
          />
        </label>

        <label className={labelInput()} htmlFor="state">
          <p className={textInput()}>State:</p>
          <input
            className={input()}
            type="text"
            id="state"
            required
            value={fields.state}
            onChange={(e) => setFields({ ...fields, state: e.target.value })}
          />
        </label>

        <button
          className={button({ active: isFormValid })}
          type="submit"
          disabled={!isFormValid}
        >
          Send
          <ArrowRight className={buttonIcon()} size={16} />
        </button>
      </form>
    </article>
  );
}
