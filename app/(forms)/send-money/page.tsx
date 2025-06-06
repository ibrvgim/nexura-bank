import FormContainer from "@/components/forms/FormContainer";
import SendMoneyAmountForm from "@/components/forms/send-money/SendMoneyAmountForm";

function SendMoney() {
  return (
    <div className="mt-12 mb-24">
      <FormContainer>
        <SendMoneyAmountForm />
      </FormContainer>
    </div>
  );
}

export default SendMoney;
