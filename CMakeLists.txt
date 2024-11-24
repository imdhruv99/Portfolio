cmake_minimum_required(VERSION 3.14)
project(cpp-portfolio)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

if(WIN32)
    set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/Debug)
    set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/Debug)
    set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/Debug)
endif()

if(NOT DEFINED CMAKE_TOOLCHAIN_FILE)
    set(CMAKE_TOOLCHAIN_FILE "${CMAKE_CURRENT_SOURCE_DIR}/vcpkg/scripts/buildsystems/vcpkg.cmake"
        CACHE STRING "Vcpkg toolchain file")
endif()

# Find Wt package
find_package(Wt REQUIRED)

# Add executable
add_executable(cpp-portfolio
    src/main.cpp

    # src/components/Header.cpp
    # src/components/Footer.cpp
    src/pages/HomePage/HomePage.cpp

    # src/pages/ProjectPage/ProjectsPage.cpp
    # src/utils/Theme.cpp
)

# Link Wt libraries
target_link_libraries(cpp-portfolio
    Wt::Wt
    Wt::HTTP
)

# Include directories
target_include_directories(cpp-portfolio PRIVATE
    ${CMAKE_SOURCE_DIR}/src
)

# Create resources directory in build
set(RESOURCES_DIR ${CMAKE_BINARY_DIR}/resources)
file(MAKE_DIRECTORY ${RESOURCES_DIR})

# Create scripts directory in resources
set(SCRIPTS_DIR ${RESOURCES_DIR}/scripts)
file(MAKE_DIRECTORY ${SCRIPTS_DIR})

# Copy viewport.js to scripts directory
configure_file(
    ${CMAKE_SOURCE_DIR}/public/scripts/viewport.js
    ${SCRIPTS_DIR}/viewport.js
    COPYONLY
)

# Set the docroot for Wt
set_target_properties(cpp-portfolio PROPERTIES
    RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}
)
