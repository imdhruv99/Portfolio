#pragma once
#include <Wt/WContainerWidget.h>
#include <Wt/WText.h>
#include <Wt/WImage.h>
#include <Wt/WCssDecorationStyle.h>
#include <Wt/WLength.h>
#include <Wt/WColor.h>
#include <Wt/WBorder.h>
#include <Wt/WBreak.h>
#include <Wt/WVBoxLayout.h>

class HomePage : public Wt::WContainerWidget
{
public:
    HomePage();

private:
    void createHeader();
    void createHero();
    void createAboutSection();
    void createSkills();
    void styleContainer(Wt::WContainerWidget *container);
};
