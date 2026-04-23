import { SOCIAL_LINKS } from "@/lib/social";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.181.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.097 3.097 0 01-.748 1.15c-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.181-.466.398-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zM10 0C7.284 0 6.944.012 5.877.06 4.813.11 4.086.278 3.45.525a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 00.525 3.45C.278 4.086.109 4.813.06 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.247 1.363.416 2.427.465C6.944 19.988 7.284 20 10 20s3.057-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.066.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0016.55.525C15.914.278 15.187.109 14.123.06 13.056.012 12.716 0 10 0z" fill="white" />
      <path d="M10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666z" fill="white" />
      <circle cx="15.338" cy="4.662" r="1.2" fill="white" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.148 20V10.877h3.065l.459-3.563H7.148V5.05c0-1.031.286-1.734 1.765-1.734L10.8.015V.068C10.8.03 10.455 0 9.736 0H9.8c-.882 0-2.652.352-2.652 3.268v2.046H4v3.563h3.148V20z" fill="white" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.477 2.238a2.238 2.238 0 11-4.477 0 2.238 2.238 0 014.477 0zM.31 6.329h3.857V20H.31V6.329zM10.867 6.329H7.01V20h3.857v-7.178c0-3.993 5.155-4.32 5.155 0V20h3.878v-8.66c0-6.737-7.632-6.493-9.033-3.175V6.329z" fill="white" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.54 2.507A2.764 2.764 0 0019.597.538C17.862 0 11 0 11 0S4.138 0 2.403.538A2.764 2.764 0 00.46 2.507C0 4.27 0 8 0 8s0 3.73.46 5.493a2.764 2.764 0 001.943 1.969C4.138 16 11 16 11 16s6.862 0 8.597-.538a2.764 2.764 0 001.943-1.969C22 11.73 22 8 22 8s0-3.73-.46-5.493zM8.8 11.385V4.615L14.52 8 8.8 11.385z" fill="white" />
    </svg>
  );
}

export default function PostCtaSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-20">
        <div className="flex flex-col items-center gap-6 bg-[linear-gradient(130deg,#006CAD_5%,#012B71_100%)] rounded-[30px] px-8 py-12 lg:px-[103px] lg:py-[70px]">
          <h2 className="text-[26px] lg:text-[38px] leading-[1.3] text-white text-center font-normal">
            Não quer perder nenhuma dica da azulzinha?
          </h2>
          <p className="text-[16px] lg:text-[22px] leading-[1.3] text-white text-center">
            Navegue pelo site e siga nossas redes sociais
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-laranja text-[16px]"
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-laranja text-[16px]"
            >
              <FacebookIcon />
              Facebook
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-laranja text-[16px]"
            >
              <LinkedinIcon />
              Linkedin
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-laranja text-[16px]"
            >
              <YoutubeIcon />
              Youtube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
