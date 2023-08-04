import Image from "next/image";

function Footer() {
  return (
    <footer
      className="bg-no-repeat bg-[length:100%_100%]"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="px-6 xs:px-10 sm:px-14 md:px-16 lg:px-20 pt-6 xs:pt-10 pb-4 flex flex-col items-center bg-gradient-to-r from-primaryBg/20 to-primaryBg/20">
        <h2 className="text-3xl font-semibold text-brand mb-4 xs:mb-6">
          Gym Name
        </h2>
        <p className="w-full xs:w-11/12 sm:w-10/12 md:8/12 lg:w-7/12 text-xs xs:text-sm lg:text-base font-light text-center text-white/80 mb-4 xs:mb-6">
          Join us today and experience the transformative power of our fitness
          classes. Don&apos;t wait to start your fitness journey. Take the first
          step towards a healthier, stronger you. Let&apos;s sweat, have fun,
          and make fitness a way of life together!
        </p>
        <div className="flex items-center gap-2 mb-4 xs:mb-6">
          <FooterSocial src={"/icons/facebook.png"} link="#" />
          <FooterSocial src={"/icons/twitter.svg"} link="#" />
          <FooterSocial src={"/icons/instagram.png"} link="#" />
          <FooterSocial src={"/icons/tiktok.png"} link="#" />
        </div>
        <div className="w-11/12 h-[0.05rem] bg-white/70 mb-4"></div>
        <div className="text-white/70 text-sm">
          &#169; <a href="https://goaldone.vercel.app/" target="_blank"> GoalDone </a>2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

interface FooterSocialProps {
  src: string;
  link: string;
}

function FooterSocial({ src, link }: FooterSocialProps) {
  return (
    <a href={link} target="_blank">
      <Image
        src={src}
        alt="social icon"
        width={25}
        height={25}
        className="cursor-pointer"
      />
    </a>
  );
}

export default Footer;
