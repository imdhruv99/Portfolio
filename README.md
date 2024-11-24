# Portfolio

-   Portfolio website for me, but not with normal way using JavaScript, HTML and CSS. **Developing full Portfolio using C++**.

### Project Setup

-   #### Windows

    -   Install Visual Studio Code
        ```
        Download and install from https://code.visualstudio.com/
        ```
    -   Install Visual Studio Build Tools 2022
        -   Download from https://visualstudio.microsoft.com/visual-cpp-build-tools/
        ```
        Select "Desktop Development with C++" workload
        ```
    -   Install vcpkg package manager
        ```
        git clone https://github.com/Microsoft/vcpkg.git
        cd vcpkg
        .\bootstrap-vcpkg.bat
        .\vcpkg integrate install
        ```
    -   Install `wt` framework
        ```
        .\vcpkg install wt:x64-windows
        ```

-   #### Ubuntu

    -   Install essential build tools
        ```
        sudo apt update
        sudo apt install build-essential cmake git pkg-config
        ```
    -   Install VS Code
        ```
        sudo apt install software-properties-common apt-transport-https
        wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
        sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
        sudo apt update
        sudo apt install code
        ```
    -   Install `wt` framework
        ```
        sudo apt install witty witty-dev
        ```

-   #### MacOs

    -   Install Homebrew if not already installed

        ```
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        ```

    -   Install required tools

        ```
        brew install cmake git
        ```

    -   Install VS Code
        ```
        brew install --cask visual-studio-code
        ```
    -   Install `wt` framework
        ```
        brew install wt
        ```

### VSCode Extensions

-   C/C++ Extension Pack (Microsoft)
-   CMake Tools
-   CMake Language Support
