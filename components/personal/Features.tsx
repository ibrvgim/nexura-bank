import FeatureItem from "./FeatureItem";

function Features() {
  return (
    <div className="flex items-end justify-between gap-20 py-30">
      <FeatureItem
        image="users.svg"
        imageSize={235}
        title="Trusted by Millions"
        description="Every month, millions rely on our platform to move money securely — making us one of the most trusted names in digital banking."
      />

      <FeatureItem
        image="support.svg"
        imageSize={145}
        title="Constant Customer Support"
        description="Reach out to our specialists anytime via email, phone, or chat, ensuring smooth and stress-free banking — we are always here to help."
      />

      <FeatureItem
        image="secure.svg"
        imageSize={200}
        title="Secure Transactions"
        description="Your money and personal data are protected with advanced encryption, secure login, and real-time fraud monitoring — on all your devices."
      />
    </div>
  );
}

export default Features;
