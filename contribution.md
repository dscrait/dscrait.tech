# Contributing to dscrait.tech

First off, thanks for taking the time to contribute! 

The following is a set of guidelines for contributing to dscrait.tect, which is hosted in the [dscrait.tech](https://dscrait.tech). These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

Index | Content Heading
------------|--------------------------------
1 | [Code of Conduct](#code-of-conduct)
2 | [What should I know before I get started?](#what-should-i-know-before-i-get-started)
3 | [How Can I Contribute?](#how-can-i-contribute)
4 | [Styleguides](#styleguides)


## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

By participating, you are expected to uphold this code. Please report unacceptable behavior to [dsc.rait@gmail.com](dsc.rait@gmail.com).


If chat is more your speed, you can join the DSC-RAIT Discord Channel:

* [Join the DSC-RAIT Discord Channel](https://discord.com/channels/743724391296270377/749248351563677697)
    * Even though Discord is a chat service, sometimes it takes few hours for community members to respond &mdash; please be patient!
   

## What should I know before I get started?

dscrait.tech is a open source project &mdash; it's made up of over [repositories](https://github.com/dscrait/dscrait.tech). When you initially consider contributing to 
dscrait.tech, 
you might be unsure about which of those repositories implements the functionality you want to change or report a bug for. This section should help you with that.


## How Can I Contribute?

**1.** Fork [this](https://github.com/dscrait/dscrait.tech.git) repository.

**2.** Clone the forked repository.
```terminal
git clone https://github.com/dscrait/dscrait.tech.git
```

**3.** Navigate to the project directory.
```terminal
cd dscrait.tech
```

**4.** Install NPM packages.
```terminal
npm install
```
**5.** Run the website in your localhost by typing this command.
```terminal
npm run dev
```

**6.** Create a new Branch.
```terminal
git branch <your_branch_name>
```

**7.** Switched to your new branch.
```terminal
git checkout -b <your_branch_name>
```

**8.** Make changes locally.
```terminal
git add filename.md  
```

**9.** Before commiting your changes add the following commands on your terminal
```terminal 
git remote add upstream https://github.com/dscrait/dscrait.tech.git
```

```terminal
git pull upstream master
```

**10.** Commit your changes.

```terminal
  git add .
  git commit -m "<your_commit_message>"
  
  # If so try to use conventional commit messages using the guide: https://www.conventionalcommits.org/en/v1.0.0/
```

**11.** Push your local branch to the remote repository.
```terminal
git push 
```

**12.** Create a Pull Request! 


### Your First Code Contribution

Unsure where to begin contributing to dscrait.tech? You can start by looking through these `good first issues`:

* Good First issues - issues which should only require a few lines of code, and a test or two.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line



 
