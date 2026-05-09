import { Metadata } from "next";

import ContactCode from "@/components/ContactCode";

import styles from "@/styles/ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Liên hệ</h1>
      <p className={styles.pageSubtitle}>
        Hãy liên hệ với tôi qua bất kỳ nền tảng mạng xã hội nào bên dưới. Tôi luôn sẵn sàng đón nhận những cơ hội và kết
        nối mới.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
