import BubbleMenu from "./BubbleMenu";

export default function NavbarV2() {
    const items = [
        {
            label: "home",
            href: "#",
            ariaLabel: "Home",
            rotation: -8,
            hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
        },
        {
            label: "about",
            href: "#about",
            ariaLabel: "About",
            rotation: 8,
            hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
        },
        {
            label: "projects",
            href: "#projects",
            ariaLabel: "Projects",
            rotation: 8,
            hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
        },
        {
            label: "experience",
            href: "#experience",
            ariaLabel: "Experience",
            rotation: 8,
            hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
        },
        {
            label: "contact",
            href: "#contact",
            ariaLabel: "Contact",
            rotation: -8,
            hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
        },
    ];
    return (
        <>
            <BubbleMenu
                logo={
                    <span style={{ fontWeight: 700, color: "#3b82f6" }}>
                        Tanim
                    </span>
                }
                items={items}
                menuAriaLabel="Toggle navigation"
                menuBg="#ffffff"
                menuContentColor="#111111"
                useFixedPosition={false}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.12}
            />
        </>
    );
}
