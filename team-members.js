document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".team-members__card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            cards.forEach((item) => {
                item.classList.remove("team-members__card--active");
            });

            card.classList.add("team-members__card--active");
        });
    });
});