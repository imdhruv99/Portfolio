#include "HomePage.hpp"

HomePage::HomePage()
{
    // Set global styles for the page
    setStyleClass("homepage");
    setContentAlignment(Wt::AlignmentFlag::Center);

    // Use VBoxLayout for vertical arrangement
    auto mainLayout = setLayout(std::make_unique<Wt::WVBoxLayout>());
    mainLayout->setSpacing(10);

    // Create sections
    createHeader();
    createHero();
    createAboutSection();
    createSkills();
}

void HomePage::createHeader()
{
    auto header = addWidget(std::make_unique<Wt::WContainerWidget>());
    header->setStyleClass("header");

    auto headerStyle = header->decorationStyle();
    headerStyle.setBackgroundColor(Wt::WColor(33, 33, 33));
    headerStyle.setForegroundColor(Wt::WColor(255, 255, 255));
    headerStyle.setFont(Wt::WFont());
    headerStyle.font().setSize(Wt::FontSize::Large);

    // Set padding using inline styles
    header->setAttributeValue("style", "padding: 20px;");
    header->setDecorationStyle(headerStyle);

    auto logo = header->addWidget(std::make_unique<Wt::WText>("Portfolio"));
    logo->setStyleClass("logo");
}

void HomePage::createHero()
{
    auto hero = addWidget(std::make_unique<Wt::WContainerWidget>());
    styleContainer(hero);

    auto title = hero->addWidget(std::make_unique<Wt::WText>("Full-Stack Developer"));
    title->setStyleClass("hero-title");

    auto subtitle = hero->addWidget(std::make_unique<Wt::WText>(
        "Specializing in DevOps, Web Development, and AI"));
    subtitle->setStyleClass("hero-subtitle");
}

void HomePage::createAboutSection()
{
    auto about = addWidget(std::make_unique<Wt::WContainerWidget>());
    styleContainer(about);

    auto title = about->addWidget(std::make_unique<Wt::WText>("About Me"));
    title->setStyleClass("section-title");

    about->addWidget(std::make_unique<Wt::WBreak>());

    auto description = about->addWidget(std::make_unique<Wt::WText>(
        "I am a passionate developer with expertise in building scalable applications "
        "using modern technologies. My approach focuses on creating efficient, "
        "maintainable solutions that solve real-world problems."));
    description->setStyleClass("section-text");
}

void HomePage::createSkills()
{
    auto skills = addWidget(std::make_unique<Wt::WContainerWidget>());
    styleContainer(skills);

    auto title = skills->addWidget(std::make_unique<Wt::WText>("Skills"));
    title->setStyleClass("section-title");

    // Create skill categories
    auto categories = {
        "DevOps", "Web Development", "Artificial Intelligence",
        "C++", "Python", "Cloud Technologies"};

    for (const auto &category : categories)
    {
        auto skill = skills->addWidget(std::make_unique<Wt::WContainerWidget>());
        skill->setStyleClass("skill-item");
        skill->addWidget(std::make_unique<Wt::WText>(category));
    }
}

void HomePage::styleContainer(Wt::WContainerWidget *container)
{
    auto style = container->decorationStyle();
    style.setBackgroundColor(Wt::WColor(245, 245, 245));
    style.setForegroundColor(Wt::WColor(33, 33, 33));
    style.setBorder(Wt::WBorder(Wt::BorderStyle::Solid, 1, Wt::WColor(200, 200, 200)));
    container->setDecorationStyle(style);

    // Set margins and padding using inline styles
    container->setAttributeValue("style",
                                 "margin: 10px 0; padding: 20px;");
}
