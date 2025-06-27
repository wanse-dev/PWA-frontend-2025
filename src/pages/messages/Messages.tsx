import "./Messages.css";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

type MessageFormInputs = {
  name: string;
  email: string;
  message: string;
};

const validationsSchema = Joi.object<MessageFormInputs>({
  name: Joi.string().required().messages({
    "string.empty": "Name is required",
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
  }),
  message: Joi.string().required().messages({
    "string.empty": "Message is required",
  }),
});

export const Messages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageFormInputs>({
    resolver: joiResolver(validationsSchema),
  });

  const onSubmit = (data: MessageFormInputs) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Send a message</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input {...register("name")} placeholder="Name" className="textInput" />
        {errors.name && <span>{errors.name.message}</span>}

        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          className="textInput"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          {...register("message")}
          placeholder="Message"
          type="textbox"
          className="textInput"
        />
        {errors.message && <span>{errors.message.message}</span>}

        <button type="submit" className="submitButton">
          Enviar
        </button>
      </form>
    </div>
  );
};
