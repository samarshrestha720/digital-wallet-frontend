import { Controller, useForm } from "react-hook-form";
import "./SendMoney.css";
import { ISendMoneyInput } from "../../types/interfaces";
import { CustomTextField } from "../../components/CustomTextField";

export const SendMoney = () => {
  const {
    // handleSubmit,
    control,
    formState: {},
  } = useForm<ISendMoneyInput>();
  return (
    <div>
      <h1 className="sendMoney-heading">Send Money</h1>
      <p>Send Money to other SR Wallet users using their email.</p>
      <Controller
        name="receiverEmail"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomTextField {...field} label="Receiver Email" type="email" />
        )}
      />
      <Controller
        name="amount"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomTextField {...field} label="Amount" type="number" />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomTextField {...field} label="Description" type="string" />
        )}
      />
    </div>
  );
};
