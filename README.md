# Portfolio2

A remake of my portfolio website. This time in React

{add test badges here, all projects you build from here on out will have tests, therefore you should have github workflow badges at the top of your repositories: Github Workflow Badges}
Demo & Snippets

    Include hosted link
    Include images of app if CLI or Client App

Requirements / Purpose

    MVP
    purpose of project
    stack used and why

Build Steps

    how to build / run project
    use proper code snippets if there are any commands to run

Design Goals / Approach

    Design goals
    why did you implement this the way you did?

Features

    What features does the project have?
    list them...

Known issues

    Remaining bugs, things that have been left unfixed
    Features that are buggy / flimsy

Future Goals

    What are the immediate features you'd add given more time

Change logs

    Write a paragraph labelled with the date every day you work on the project to discuss what you've done for the say. Be specific about the changes that have happened for that day.

12/03/2024

    Initial project creation.
    Split app out into separate page routes
    Added a Navbar and styling

14/03/2024

    Attempted to implement a video player to have short .mp4 files, but could only find old library documentation. Have settled for imaged that will rotate automatically.
    Added object containing all project data and added a useEffect to call pull that data in. I've kept the project data in a separate file so that it's easy to update in the future, instead of digging through the app itself.
    Created project sliders

15/03/2024

    Restructured the project data file to be TypeScript friendly - took a bit but has been a valuable learning experience in how explicit you have to be with TS.

16/03/2024

    Updated the 'projects' page to by more dynamic
    Fixed issue with skill 'chips' on 'projects' page not displaying properly
    Fixed github link graphical issue

17/03/2024

    Major overhaul of site styling - feedback was that it looked dated so I had to spend hours looking at more modern websites.
    There's still a lot that I don't know how to do, but added:
        dynamic box shadowing
        changed the colour-palette
        updated all pages to reduce element width
        updated the 'stack' and 'about' pages in particular to use a 'pillar' concept
        Added in icons on the 'stack' page
        Added partials folder with website palette and changed styling files, almost entire website palette can now be updated from this file.

What did you struggle with?

    What? Why? How?

Licensing Details

    What type of license are you releasing this under?

Further details, related projects, reimplementations

    Is this project a reimplementation for something you've done in the past? if so explain it and link it here.
    If it's an API, is there a client app that works with this project? link it
