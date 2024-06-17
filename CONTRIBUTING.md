# Contributing Guidelines

Thank you for considering contributing to our p5.js sketches repository! Before you start, please read these guidelines to ensure your contributions align with our project's structure and standards.

## File Naming Convention

When adding files inside the project folder, follow these naming conventions:

HTML File: Create an HTML file with the same name as your project, suffixed with .html.
JavaScript File: Create a JavaScript file with the same name as your project, suffixed with .js.

### Handling Spaces in Folder Names

If your project folder name contains spaces, please replace them with underscores (\_) in the file names.

For example, if your project folder is named "My Project", create files as follows:

- HTML File: my_project.html
- JavaScript File: my_project.js

## Adding p5.js CDN Script

In the HTML file, please include the p5.js CDN script for using p5.js functionalities. Add the following script tag within the `<head>` section:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
```

## Example Categories

Ensure your example fits into one of the following categories:

```
"3D" "Animation" "Data" "Drawing"
"Geometry" "Image Processing" "Interaction"
"Math" "Simulation" "Sound" "Typography"
```

If your example does not fit into one of these categories, it will be listed as `"Other"`.

## Contribution Process

1. Fork the repository to your GitHub account.

2. Clone the forked repository to your local machine.

3. Navigate to the category folder where you want to add your p5.js sketch.

4. Create a new folder with the name of your project inside the appropriate category folder.

5. Inside the project folder, create an HTML file `(your_project_name.html)` and a JavaScript file `(your_project_name.js)`. Ensure both files have the same name as your project.

6. Write your p5.js sketch in the JavaScript file and link it in the HTML file. Explain the code in comments for educational purposes.

7. Test your sketch locally to ensure it works as expected.

8. Add, commit, and push your changes to your forked repository.

9. Submit a pull request to the main repository.

---

We welcome contributions from everyone! To contribute, please follow the guidelines above and submit your pull request. Thank you for helping us build a comprehensive collection of p5.js examples.
