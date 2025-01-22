import Icon from "./Icon";
const socials = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ashrafkhan10897/",
        icon: "linkedin",
    },
    {
        name: "GitHub",
        href: "https://github.com/ashrafkhan10897",
        icon: "github",
    },
    {
        name: "Email",
        href: "mailto:ashraf.khan4@outlook.com",
        icon: "mail",
    },
];

const Socials = () => {
    return (
        <section className="flex gap-6">
            {socials.map((item) => (
                <a
                    href={item.href}
                    key={item.name}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                    rel="noopener noreferrer"
                    title={item.name}
                >
                    <span className="sr-only">{item.name}</span>
                    <Icon
                        name={item.icon}
                        aria-hidden="true"
                        className="size-5"
                    />
                </a>
            ))}
        </section>
    );
};

export default Socials;
