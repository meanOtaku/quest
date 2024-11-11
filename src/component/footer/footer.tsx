import style from "./footer.module.css"
import Content from "./footerContent/content";
import apple from "../../../public/apple.svg"
import google from "../../../public/playStore.svg"
import twitter from "../../../public/twitter.svg"
import facebook from "../../../public/facebook.svg"
import instagram from "../../../public/instagram.svg"
import linkedin from "../../../public/linkedin.svg"
import Image from "next/image";
export default function Footer() {
    return (
      <div className={style.footer}>
        <div className={style.about}>
          <div className="sm:flex sm:flex-row justify-evenly">
            <Content services="Company" dmc={['About us', 'Contact us', 'Careers']}></Content>
            <Content services="Business Size" dmc={['Enterpreneurs', 'SMBs', 'Growth Business', 'Houshold Services', 'Enterprise']}></Content>
            <Content services="Business Type" dmc={['Health & Wellness', 'Sports', 'Learning Activites', 'Household Services', 'Miscellaneous']}></Content>
            {/* <Content services="Download" dmc={['apple.svg', 'Bussiness App', 'playStore.svg', 'Business App', 'apple.svg', 'User App', 'playStore.svg', 'User App']}></Content> */}
            <div>
                <div className={style.heading}>
                    Download
                </div>
                <div className="flex flex-row">
                  <Image
                        priority
                        src={apple}
                        height={20}
                        width={20}
                        alt="apple"
                        className={style.icons}
                    />
                    <div className={style.content}>
                      Business App
                    </div>
                </div>
                <div className="flex flex-row">
                  <Image
                      priority
                      src={google}
                      width={20}
                      height={20}
                      alt="google"
                      className={style.icons}
                  />
                  <div className={style.content}>
                    Business App
                  </div>
                </div>
                <div className="flex flex-row">
                  <Image
                        priority
                        src={apple}
                        height={20}
                        width={20}
                        alt="apple"
                        className={style.icons}
                    />
                    <div className={style.content}>
                      User App
                    </div>
                </div>
                <div className="flex flex-row">
                  <Image
                      priority
                      src={google}
                      height={20}
                      width={20}
                      alt="google"
                      className={style.icons}
                  />
                  <div className={style.content}>
                    User App
                  </div>
                </div>
              </div>
              <div>
                
            </div>
            <Content services="Legal" dmc={['Privacy Policy', 'Terms & Conditions', 'Return Policy']}></Content>
            <Content services="Contact us" dmc={['support@Rmax.com', '+91-8459671235']}></Content>
          </div>
          <hr className={style.hr} />
          <div className={`flex justify-between ${style.copyRight}`}>
            <div>
              &copy; 2024 Copyright, All Right Reserverd@RMax
            </div>
            <div className="flex flex-row">
              <Image
                priority
                src={twitter}
                height={20}
                width={20}
                alt="twitter"
                className={style.svgs}
              />
              <Image
                priority
                src={facebook}
                height={20}
                width={20}
                alt="facebook"
                className={style.svgs}
              />
              <Image
                priority
                src={instagram}
                height={20}
                width={20}
                alt="instagram"
                className={style.svgs}
              />
              <Image
                priority
                src={linkedin}
                height={20}
                width={20}
                alt="linkedin"
                className={style.svgs}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  