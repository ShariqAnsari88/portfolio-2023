export const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    });
};
