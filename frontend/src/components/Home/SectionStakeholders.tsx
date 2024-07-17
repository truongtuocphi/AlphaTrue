import styles from "./SectionStakeholders.module.css";
import Image from "next/image";
import APT1 from "@/public/images/Home/APT 1.png";
import APT2 from "@/public/images/Home/APT 2.png";
import APT3 from "@/public/images/Home/APT 3.png";

const images = [
  { link: APT2, title: "INCUBATOR" },
  { link: APT1, title: "LABS" },
  { link: APT3, title: "MEDIA" },
];

export default function SectionStakeholders() {
  return (
    <div className="w-full h-[650px] relative">
      <div className="w-10/12 h-[566px] absolute top-0 left-2/4 -translate-x-2/4 bg-red-400 z-20 rounded-3xl overflow-hidden">
        <section
          className={`${styles.block}, ${styles.pbmitElementServiceStyle4} h-full`}
        >
          <div
            className={`${styles.containerFluid}, ${styles.container} h-full`}
          >
            <div className={styles.row}>
              {images.map(({ link, title }) => {
                return (
                  <article className={styles.pbmitServiceStyle4} key={title}>
                    <div className="h-full">
                      <div className="pbmitServiceImgWrapper">
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmitFeaturedWrapper absolute">
                            <Image
                              src={link}
                              className={`${styles.imgFluid} w-full h-screen object-cover`}
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.pbminfotechBoxContent}>
                        <div className={styles.pbmitContentInner}>
                          <div className={styles.pbminfotechBoxNumber}>01</div>
                          <div className={styles.pbmitCatWrap}>
                            <div className="pbmit-serv-cat">
                              <a href="service-detail.html" rel="tag">
                                Advisory
                              </a>
                            </div>
                            <h3 className={styles.pbmitServiceTitle}>
                              <a href="service-detail.html">
                                Consulting Service
                              </a>
                            </h3>
                          </div>
                        </div>
                        <div className="pbmit-svg-btn">
                          <a className="btn-arrow" href="service-detail.html">
                            <svg
                              className="pbmit-svg-arrow"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              width="10"
                              height="19"
                              viewBox="0 0 19 19"
                              xmlSpace="preserve"
                            >
                              <line x1="1" y1="18" x2="17.8" y2="1.2"></line>
                              <line x1="1.2" y1="1" x2="18" y2="1"></line>
                              <line x1="18" y1="17.8" x2="18" y2="1"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="pbminfotech-icon-box">
                        <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-global"></i>
                      </div>
                    </div>
                    <a
                      href="service-detail.html"
                      className={styles.pbmitLink}
                    ></a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="absolute bottom-0 w-full h-80 bg-gradient-to-r from-blue-700 to-teal-400"></div>
    </div>
  );
}
