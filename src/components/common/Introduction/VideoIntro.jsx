import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export const VideoIntro = () => {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://youtu.be/FCJL073wew4"
        thumbnailSrc="/assets/images/video-dialog/logo.webp"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://youtu.be/FCJL073wew4"
        thumbnailSrc="/assets/images/video-dialog/logo.webp"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
};

export default VideoIntro;
