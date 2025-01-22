import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FileDown, ArrowRightIcon } from "lucide-react";
import Socials from "@/components/Socials";
import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";

const LIMIT = 2;

export default function Home() {
    return (
        <div className="mt-8 flex flex-col gap-16 pb-16 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
                <Image
                    className="rounded-lg"
                    src="/ashraf.jpg"
                    alt="Photo"
                    width={175}
                    height={175}
                    priority
                />
                <div className="flex flex-col">
                    <h1 className="title text-5xl font-semibold">
                        Hi Ashraf here 👋
                    </h1>
                    <p className="mt-4 font-light">
                        Software Developer from India 🇮🇳
                    </p>
                    <p className="mt-2 font-light">
                        I am a Salesforce Developer at Talent Cogent.
                    </p>
                    <section className="mt-8 flex items-center gap-8">
                        <Link href="/resume.pdf" target="_blank">
                            <Button variant="outline">
                                <span className="font-semibold">Resume</span>
                                <FileDown className="ml-2 size-5" />
                            </Button>
                        </Link>
                        <Socials />
                    </section>
                </div>
            </main>
            <Experience />

            <section className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h2 className="title text-2xl sm:text-3xl">
                        Featured Projects
                    </h2>
                    <LinkWithIcon
                        href="/projects"
                        position="right"
                        icon={<ArrowRightIcon className="size-5" />}
                        text="view more"
                    />
                </div>
                <Projects limit={LIMIT} />
            </section>
        </div>
    );
}
