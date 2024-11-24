#include <Wt/WApplication.h>
#include <Wt/WBootstrapTheme.h>
#include <Wt/WEnvironment.h>
#include <Wt/WNavigationBar.h>
#include <Wt/WStackedWidget.h>
#include <Wt/WMenu.h>

#include "pages/HomePage/HomePage.hpp"

class PortfolioApplication : public Wt::WApplication
{
public:
    PortfolioApplication(const Wt::WEnvironment &env) : Wt::WApplication(env)
    {
        // Set theme
        auto theme = std::make_shared<Wt::WBootstrapTheme>();
        theme->setVersion(Wt::BootstrapVersion::v3);
        setTheme(theme);

        // Set viewport meta tag for responsiveness
        if (environment().ajax())
        {
            doJavaScript(
                "if(!document.querySelector('meta[name=\"viewport\"]')){"
                "var meta=document.createElement('meta');"
                "meta.name='viewport';"
                "meta.content='width=device-width, initial-scale=1';"
                "document.head.appendChild(meta);"
                "}");
        }
        else
        {
            require("public/scripts/viewport.js");
        }

        // Enable responsive features
        enableUpdates(true);

        // Set up navigation
        setupNavigation();

        // Set up routing
        setupRouting();
    }

private:
    Wt::WStackedWidget *mainStack_;
    Wt::WMenu *mainMenu_;

    void setupNavigation()
    {
        auto navigationBar = root()->addWidget(std::make_unique<Wt::WNavigationBar>());
        navigationBar->setResponsive(true);

        // Create a stack where we'll load our contents
        mainStack_ = root()->addWidget(std::make_unique<Wt::WStackedWidget>());

        // Create a menu
        mainMenu_ = navigationBar->addMenu(std::make_unique<Wt::WMenu>(mainStack_));

        // Add menu items
        mainMenu_->addItem("Home", std::make_unique<HomePage>())
            ->setLink(Wt::WLink(Wt::LinkType::InternalPath, "/"));
    }

    void setupRouting()
    {
        // Set up internal path handling
        handlePathChange(internalPath());

        // Connect path changed signal
        internalPathChanged().connect(this, &PortfolioApplication::handlePathChange);
    }

    void handlePathChange(const std::string &path)
    {
        if (path == "/" || path == "/home" || path.empty())
        {
            mainMenu_->select(0); // Select home page
        }
    }
};

int main(int argc, char **argv)
{
    return Wt::WRun(argc, argv, [](const Wt::WEnvironment &env)
                    { return std::make_unique<PortfolioApplication>(env); });
}
