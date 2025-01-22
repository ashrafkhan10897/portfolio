import Link from "next/link";
import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center pb-32 sm:flex-row-reverse sm:justify-between">
            <Socials />
            <section className="mt-8 sm:mt-0">
                <p className="text-center text-xs text-muted-foreground">
                    <span>&copy; 2023 - {new Date().getFullYear()}</span>{" "}
                    <Link className="link" href="/">
                        Ashraf Khan
                    </Link>
                </p>
            </section>
        </footer>
    );
};

export default Footer;
