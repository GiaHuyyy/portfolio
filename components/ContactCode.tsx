import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'github',
    link: 'GiaHuyyy',
    href: 'https://github.com/GiaHuyyy',
  },
  {
    social: 'facebook',
    link: 'Tô Vũ Gia Huy',
    href: 'https://www.facebook.com/NotAboutLovee',
  },
  {
    social: 'linkedin',
    link: 'Tô Vũ Gia Huy',
    href: 'https://www.linkedin.com/in/t%C3%B4-v%C5%A9-gia-huy-854298352/',
  },
  {
    social: 'email',
    link: 'tovugiahuy@gmail.com',
    href: 'mailto:tovugiahuy@gmail.com',
  },
  {
    social: 'phone',
    link: '0932920885',
    href: 'tel:+84932920885',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
