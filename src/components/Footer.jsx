import { SOCIAL_MEDIA_LINKS } from "../constants"

const Footer = () => {
  return (
    <div className="mt-20 mb-8">
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a href={link.href} key={index} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                </a>
            ))}
        </div>
        <p className="mt-8 tracking-tighter text-center text-neutral-500">
            &copy; {new Date().getFullYear()} FoodSRus. All rights reserved.{" "}
        </p>
        <p className="mt-8 tracking-tighter text-center text-neutral-500">
            Built By Adisa Made It &reg;
        </p>
    </div>
  )
}
export default Footer