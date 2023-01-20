import React from "react";
import styles from "./footer.module.sass";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RiSendPlane2Fill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillSkype } from "react-icons/ai";
import { SiDiscord, SiUpwork } from "react-icons/si";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={styles.app_footer}>
      <div className="container py-5">
        <div className="row">
          <div className="py-3 col-12 col-xl-3">
            <div className="app_logo pb-3">
              <Link href={"/"}>
                <a>
                  {theme && (
                    <Image
                      alt="app_logo"
                      src={`/static/assets/images/f_logo_${theme}.png`}
                      width={133}
                      height={56}
                      layout="fixed"
                      quality={100}
                      loading="eager"
                    />
                  )}
                </a>
              </Link>
            </div>
            <p className="m-0 pe-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              deleniti qui ex nisi earum reiciendis.
            </p>
          </div>
          <div className="py-3 col-6 col-lg-4 col-xl-2">
            <p className={`${styles.footer_col_title} m-0 py-3`}>My Account</p>
            <ul className={styles.footer_nav_list}>
              <li className={styles.footer_nav_list_item}>
                <Link href="/authors">
                  <a className={styles.footer_nav_link}>Authors</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/wallet-connect">
                  <a className={styles.footer_nav_link}>Collection</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/edit-profile">
                  <a className={styles.footer_nav_link}>Author Profile</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/create-item">
                  <a className={styles.footer_nav_link}>Create Item</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-3 col-6 col-lg-4 col-xl-2">
            <p className={`${styles.footer_col_title} m-0 py-3`}>Resources</p>
            <ul className={styles.footer_nav_list}>
              <li className={styles.footer_nav_list_item}>
                <Link href="/help-center">
                  <a className={styles.footer_nav_link}>Help & Support</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/auctions">
                  <a className={styles.footer_nav_link}>Live Auctions</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/item-details">
                  <a className={styles.footer_nav_link}>Item Details</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-3 col-6 col-lg-4 col-xl-2">
            <p className={`${styles.footer_col_title} m-0 py-3`}>Company</p>
            <ul className={styles.footer_nav_list}>
              <li className={styles.footer_nav_list_item}>
                <Link href="/explore">
                  <a className={styles.footer_nav_link}>Explore</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/contact">
                  <a className={styles.footer_nav_link}>Contact us</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/blog">
                  <a className={styles.footer_nav_link}>Our Blog</a>
                </Link>
              </li>
              <li className={styles.footer_nav_list_item}>
                <Link href="/faq">
                  <a className={styles.footer_nav_link}>FAQ</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-3 col-12 col-md-6 col-xl-3">
            <p className={`${styles.footer_col_title} m-0 py-3`}>
              Subscribe Us
            </p>
            <div className="subscribe_us_form_wrapper py-2">
              <form
                className={styles.footer_form}
                onSubmit={(e) => e.preventDefault()}
              >
                <input type="email" required placeholder="info@yourgmail.com" />
                <button type="submit">
                  <RiSendPlane2Fill />
                </button>
              </form>
            </div>
            <div className="social_media_links_wrapper pt-4">
              <ul className={styles.footer_social_list}>
                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://github.com/mastercodingbear"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://t.me/withtechs"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <FaTelegram />
                  </a>
                </li>

                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://discordapp.com/users/920301286233104425"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <SiDiscord />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footer_social_link}
                    href="https://join.skype.com/invite/JmNrWxIrLmAO"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <AiFillSkype />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
